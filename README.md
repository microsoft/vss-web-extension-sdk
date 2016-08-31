# Visual Studio Services Web Extension SDK

## Overview

This repository contains core client SDK script files and TypeScript declare files needed for developing [Visual Studio Team Services Extensions](https://www.visualstudio.com/integrate/extensions/overview).

The core SDK script, `VSS.SDK.js`, enables extensions to communicate to the host Team Services frame and to perform operations like initializing, notifying extension is loaded or getting context about the current page.

> A previous version of the SDK was named ```vss-sdk``. Make sure to switch to the new `vss-web-extension-sdk` name.

## Get the SDK

### Bower

1. [Download](https://nodejs.org/en/download/) and install Node.js
2. Install Bower (`npm install -g bower`)
3. Run `bower install vss-web-extension-sdk` from a command line 

From your extension's HTML page, add a reference to the imported SDK script. For example:

```html
 <script src="bower_components/vss-web-extension-sdk/lib/VSS.SDK.min.js"></script>
 ```
  
### NPM

Alternatively, the SDK is available via NPM. Run `npm install vss-web-extension-sdk`
\
## Use the SDK

Next step is initializing the extension using two options below: 
 1. Implicit handshake
 	```javascript
	  // Initialize
	  VSS.init({
		  usePlatformScripts: true, 
		  usePlatformStyles: true
	  });
	  
	  // Register callback to get called when initial handshake completed
	  VSS.ready(function() {
		  // Start using VSS
	  });
	  ```
      
 2. Explicit handshake
    ```javascript
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
          });
    ```

Full API reference of VSS.SDK.js can be found at [Core Client SDK](https://www.visualstudio.com/en-us/integrate/extensions/reference/client/core-sdk) page.

## Types
 * Types of VSS.SDK.js, controls and client services are available in typings/vss.d.ts. 
 * REST Client types for VSTS are available in typings/tfs.d.ts
 * REST Client and extensibility types for Release Management are available in typings/rmo.d.ts
 
### Dependencies

Dependency graph for the types:

![Dependency Graph](img/dependencies.png)
 
### Using tsd
Although TypeScript declare files do not exist at [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) repo, they can still be used through [tsd](https://www.npmjs.com/package/tsd).

1. First, make sure that the dependencies are loaded using below command:
 * `tsd install jquery knockout q require --save`
 
2. Next, run below command to get vss-web-extension-sdk types added to tsd.d.ts:
 * `tsd link`

3. Finally, add only reference to typings/tsd.d.ts in your TypeScript files. 

## Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
