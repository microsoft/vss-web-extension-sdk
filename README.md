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

From your web extension's HTML page, include and initialize the VSS SDK like this:

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
      
Full API reference of VSS.SDK.js can be found at [Core Client SDK](https://www.visualstudio.com/en-us/integrate/extensions/reference/client/core-sdk) page.

## Types

Type definitions are provided for:

 * UI controls and client services (see `typings/vss.d.ts`)
 * REST clients and contracts for Build, Work, and Code (see `typings/tfs.d.ts`)
 * REST clients and contracts for Release Management (see `typings/rmo.d.ts`)

Dependency graph:

![Dependency Graph](img/dependencies.png)
 
### Consuming the types

From a [TypeScript](https://www.typescriptlang.org) 2.0 or later project:

1. Install the `vss-web-extension-sdk` module (see above)
2. Update your `tfsconfig.json` project file to set ```"moduleResolution": "node"```

See [TypeScript Module Resolution](https://www.typescriptlang.org/docs/handbook/module-resolution.html) for more details.

You can explicitly reference the types at the top of your TypeScript file with:

```
    /// <reference types="vss-web-extension-sdk" />
```

## Organizing your web extension project

If you are developing a web extension for Visual Studio Team Service using TypeScript, we recommend the following organization:

### Project structure

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

1. TypeScript source files are placed in `src` (under one or more module folders).
2. Static content (CSS, images, HTML pages, etc) are placed in `static`. This makes it easy to include all static files in your extension package.

### TypeScript project file (`tsconfig.json`)

Defines the options for compiling your TypeScript files.

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

1. After compiling (`tsc -p .`), the resulting .js files are placed in `dist`. For example, `dist/my-module/a.js`.
2. If your extension directly uses types from other @types modules, you will want to list them within `types`. See [@types](http://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

Learn more about [tsconfig.json](http://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

### NPM package manifest (`package.json`)

Declares the libraries (like the vss-web-extension-sdk) required to compile, package, and use your extension.

```
{
  /* other details like ID, version, etc are omitted */
  
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

1. `scripts` provides a convenient way to define common operations that you want to perform on your project, like compiling and package. For example, to build (compile) and package your extension, run: `npm run build`. This runs `build` and `postbuild`. If you make a change that doesn't require compiling, you can package by simply running `npm run package`. 
2. The dependencies on the @types for `jquery` and `q` are only necessary if your TypeScript code is directly referencing either of these types.

Learn more about [package.json](https://docs.npmjs.com/files/package.json)

### Extension manifest (`vss-extension.json`)

```
{
    /* details omitted */
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

1. Compiled JavaScript files (placed into `dist`) will get packaged at the root of the extension (along with HTML, CSS, and images files).
2. The `VSS.SDK.js` scripts (preferenced from your HTML pages) are placed under `lib` in the resulting extension package. 

Learn more about the [extension manifest](https://www.visualstudio.com/en-us/docs/integrate/extensions/develop/manifest).

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
