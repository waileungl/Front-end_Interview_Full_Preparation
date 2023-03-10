/*
The following are some reasons why you might need to use dynamic import:

- Static imports increases loading time.
- Static imports increases memory usage.
- Some modules may not exist at load time.
- Import string may be constructed dynamically
- When the module being imported has side effects and you do not want those side effects unless some condition is true

*/

// Way 1

// To dynamically import a module, the import keyword may be called as a function. When used this way, it returns a promise.
const modulePath = './myModule.js';

import(modulePath)
  .then((myModule) => {
    const { myFunction, myVariable } = myModule;
    myFunction();
    console.log(myVariable);
  })
  .catch((error) => {
    console.error(error);
  });

// Way 2
let module2 = await import("/modules/my-module2.js"); //make sure this line is running an async function rather than global scope 