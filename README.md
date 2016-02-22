# Visual Studio Services Client SDK

This repo contains core client SDK file and TypeScript declare files needed for developing [Visual Studio Team Services Extensions](https://www.visualstudio.com/integrate/extensions/overview).

**VSS.SDK.js** enables an extension to communicate to host to perform operations like initializing, notifying extension is loaded or getting context about the current page on the host.

## Getting started
 * Add this line: `<script src="sdk/scripts/VSS.SDK.js"></script>`
 * Using `npm install vss-sdk`
 * Using `bower install vss-sdk`

## Usage
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
 * Types of VSS.SDK.js are available in typings/vss.d.ts. 
 * REST Client types are available in typings/tfs.d.ts
 
### Using tsd
Although TypeScript declare files do not exist at [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) repo, they can still be used through [tsd](https://www.npmjs.com/package/tsd).

1. First, make sure that the dependencies are loaded using below command:
 * `tsd install jquery knockout q --save`
 
2. Next, run below command to get vss-sdk types added to tsd.d.ts:
 * `tsd link`

3. Finally, add only reference to typings/tsd.d.ts in your TypeScript files. 
