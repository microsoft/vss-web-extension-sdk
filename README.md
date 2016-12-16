# Visual Studio Services Web Extension SDK

## Overview

Core client SDK script files and TypeScript declare files needed for developing [Visual Studio Team Services Extensions](https://www.visualstudio.com/integrate/extensions/overview).

The core SDK script, `VSS.SDK.js`, enables web extensions to communicate to the host Team Services frame and to perform operations like initializing, notifying extension is loaded or getting context about the current page.

> A previous version of the SDK was named `vss-sdk`. Make sure to switch to the new `vss-web-extension-sdk` name.

## Get the SDK

1. Download and install [Node.js]((https://nodejs.org/en/download/))
2. Run `npm install vss-web-extension-sdk` from the root of your extension project

This will place `VSS.SDK.js` and `VSS.SDK.min.js` in `node_modules/vss-web-extension-sdk/lib/`

### Include the SDK script on your page

If you are developing a web extension, you will need to reference the SDK script from your HTML pages. For example:

```
<script src="lib/VSS.SDK.min.js"></script>
```

To ensure the SDK script is packaged with your extension, update your extension manifest (typically `vss-extension.json`) and add a new entry to `files`:

```
{       
	"files": [{
		"path": "node_modules/vss-web-extension-sdk/lib"",
		"addressable": true,
		"packagePath": "lib"
	}]
}
```

Note: setting `packagePath` is optional, but results in a simpler path for referencing the SDK script from your HTML pages. Not setting a part name would have required you to reference the full path in your `<script>` tag (`src="node_modules/vss-web-extension-sdk/lib/VSS.SDK.min.js"`)


## Use the SDK

To initialize the SDK from your HTML page you have two options. 

 1. Implicit handshake (simplest)
 
 	```html
	<script>
	
	  // Initialize
	  VSS.init({
		  usePlatformScripts: true, 
		  usePlatformStyles: true
	  });
	  
	  // Register callback to get called when initial handshake completed
	  VSS.ready(function() {
		  // Start using VSS
	  });
	  
	</script>
	  ```
      
 2. Explicit handshake
 
    ```html
       <script>
	  // Initialize with explicitNotifyLoaded set to true 
	  VSS.init({
          explicitNotifyLoaded: true,
		  usePlatformScripts: true, 
		  usePlatformStyles: true
	  });
      
         // Perform some async operation here
         doSomeAsyncStuff().then(
            function(result) {
              // Succeeded
              VSS.notifyLoadSucceeded();
              
              // Start using VSS
            },
            function(error) {
              // Failed
              VSS.notifyLoadFailed(error);
            }
	 );
      </script>
    ```

Full API reference of VSS.SDK.js can be found at [Core Client SDK](https://www.visualstudio.com/en-us/integrate/extensions/reference/client/core-sdk) page.

## Types

Type definitions are provided for:

 * UI controls and client services (see `typings/vss.d.ts`)
 * REST clients and contracts for Build, Work, and Code (see `typings/tfs.d.ts`)
 * REST clients and contracts for Release Management (see `typings/rmo.d.ts`)

### Dependencies

Dependency graph for the types:

![Dependency Graph](img/dependencies.png)
 
### Consuming the types

From a [TypeScript](https://www.typescriptlang.org) 2.0 or later project:

1. Install the `vss-web-extension-sdk` NPM module (see above)
2. Update your `tfsconfig.json` project file to set ```"moduleResolution": "node"```

See [TypeScript Module Resolution](https://www.typescriptlang.org/docs/handbook/module-resolution.html) for more details.

You can explicitly reference the types at the top of your TypeScript file with:

```
    /// <reference types="vss-web-extension-sdk" />
```

## Organizing your web extension project

If you are developing a web extension for Visual Studio Team Service using TypeScript, we recommend the following organization:

### Project structure:

```
 |-- src
     |-- my-module
         |-- a.ts
         |-- b.ts
 |-- static
     |-- css
         |-- main.css
     |-- images
         |-- logo.png
     |-- my-hub.html
 |-- vss-extension.json
 |-- package.json
 |-- tsconfig.json
``` 

1. TypeScript source files are placed in `src/` and then one or more logical module names. Your `tsconfig.json` will compile `.ts` files in this folder and place the resulting `.js` files into the `dist/` folder (not shown).
2. All static content (CSS, images, HTML pages, etc) are placed in a single `static` folder structure. This makes it easy to package all static files into your extension package (only requires a single `files` entry in your `vss-extension.json`).

### `tsconfig.json`

```json
{
    "compilerOptions": {
        "module": "amd",
        "moduleResolution": "node",
        "target": "es5",
	"rootDir": "src/",
        "outDir": "dist/",
        "types": [
            "vss-web-extension-sdk"
        ]	
    },
    "files": [
        "src/my-module/a.ts",
        "src/my-module/b.ts"
    ]
}
```

1. After compiling (`tsc -p .`), generated .js files will be located under dist. For example, `dist/my-module/a.js`.

### `package.json` (abbreviated)

```
{
  "scripts": {
    "build": "tsc -p .",
    "postbuild": "npm run package",
    "package": "tfx extension create",
    "clean": "rimraf ./dist && rimraf ./*.vsix"
  },
  "devDependencies": {
    "rimraf": "^2.5.4",
    "tfx-cli": "^0.3.45",
    "typescript": "^2.1.4"
  },
  "dependencies": {
    "@types/jquery": "^2.0.34",
    "@types/q": "0.0.32",
    "vss-web-extension-sdk": "^2.109.0"
  }
}
```

1. `scripts` provides a convenient way to define common actions that you want to perform on your project, like compiling and package. See [Scripts](https://docs.npmjs.com/misc/scripts) for more details. 
2. The dependencies on the @types for `jquery` and `q` are only necessary if your TypeScript code is directly referencing either of these types.


### `vss-extension.json`

```
{
    "files": [
        {
            "path": "dist",
            "addressable": true,
            "packagePath": "/"
        },
        {
            "path": "static",
            "addressable": true,
            "packagePath": "/"
        },
        {
            "path": "node_modules/vss-web-extension-sdk/lib",
            "addressable": true,
            "packagePath": "lib"
        }
    ],
    "contributions": [
        {
            "id": "my-hub,
            "type": "ms.vss-web.hub",
            "properties": {
                "name": "Hub",
                "uri": "my-hub.html"
            }
        }
    ]
}
```

1. Compiled JavaScript files (under `dist/`) will be packaged at the root of the extension (along with HTML, CSS, and images files).
2. The `VSS.SDK.js` bootstrapping script (referenced from your HTML pages) will be placed under the `lib/` folder in the resulting extension package. 

### Any HTML page

```html

<head>
   <script src="lib/VSS.SDK.min.js"></script>
</head>

<body>

 <script type="text/javascript">

        // Initialize the VSS sdk
        VSS.init({
            usePlatformScripts: true,
            usePlatformStyles: true
        });
	
	VSS.require(["my-module/a"], function (a) { 
	    ...
	});

 </script>

</body>
```

## Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
