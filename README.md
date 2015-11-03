# SDK for Visual Studio Online Extensions

This repo contains core client SDK file and TypeScript declare files for [Visual Studio Online extensions](https://www.visualstudio.com/integrate/extensions/overview).

**VSS.SDK.js** enables an extension to communicate to host to perform operations like initializing, notifying extension is loaded or getting context about the current page on the host.

First thing needs to be done is adding VSS.SDK.js to the extension page like below:
```html
<script src="sdk/scripts/VSS.SDK.js"></script>
```

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
      doSomeAsynStuff().then(
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