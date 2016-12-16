# Visual Studio Services Web Extension SDK

## Overview

Core client SDK script files and TypeScript declare files needed for developing [Visual Studio Team Services Extensions](https://www.visualstudio.com/integrate/extensions/overview).

The core SDK script, `VSS.SDK.js`, enables web extensions to communicate to the host Team Services frame and to perform operations like initializing, notifying extension is loaded or getting context about the current page.

> A previous version of the SDK was named `vss-sdk`. Make sure to switch to the new `vss-web-extension-sdk` name.

## Get the SDK

1. Download and install [Node.js]((https://nodejs.org/en/download/))
2. Run `npm install vss-web-extension-sdk` from the root of your extension project

This will place `VSS.SDK.js` and `VSS.SDK.min.js` in `node_modules/vss-web-extension-sdk/lib/`

### Include SDK on your page

If you are developing a web extension, you will need to reference the SDK script from your HTML pages. For example:

```
<script src="lib/VSS.SDK.min.js"></script>
```

To ensure the SDK script is packaged with your extension, update your extension manifest (typically `vss-extension.json`) and add a new entry to `files`:

```
{       
	"files": [{
		"path": "node_modules/vss-web-extension-sdk/lib/VSS.SDK.min.js",
		"addressable": true,
		"partName": "lib/VSS.SDK.min.js"
	}]
}
```

Note: setting `partName` is optional, but creates a simpler path for referencing the SDK script from your page. Not setting a part name would have required you to reference the full path in your `<script>` tag (`src="lib/node_modules/vss-web-extension-sdk/lib/VSS.SDK.min.js"`)


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

From [TypeScript](https://www.typescriptlang.org):

1. Install the `vss-web-extension-sdk` NPM module (see above)
2. Update your `tfsconfig.json` project file to set ```"moduleResolution": "node"```

See [TypeScript Module Resolution](https://www.typescriptlang.org/docs/handbook/module-resolution.html)

You can explicitly reference the types at the top of your TypeScript file with:

```
    /// <reference types="vss-web-extension-sdk" />
```

## Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
