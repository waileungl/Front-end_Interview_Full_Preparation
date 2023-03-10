/*------------------------Basic rule-------------------------------*/
//Example1:
// math.js
const square = (x) => x * x;
const cube = (x) => x * x * x;
export default square;

// main.js
import mySquare from './math.js';

console.log(mySquare(3)); // 9

/*In this example, we are exporting the square function as the default export of the math.js module using the export default syntax. We can then import this default export using any name we choose in our main.js module by using the import statement with the as keyword.*/

// Example2:
// math.js
export const square2 = (x) => x * x;
export const cube2 = (x) => x * x * x;

// main.js
import { square2, cube2 } from './math.js';

console.log(square2(3)); // 9
console.log(cube2(3)); // 27

/*In this example, we are exporting both square and cube functions as named exports of the math.js module using the export syntax. We can then import only the square function as a named export using the curly braces {} syntax in our main.js module.*/


/*------------------------static importing------------------------- */
// static Vs dynamic importing
/* Dynamic importing is a feature in JavaScript that allows you to import modules at runtime, instead of statically importing them at compile time. This means that you can load a module only when you need it, instead of loading all modules upfront, which can improve the performance and efficiency of your application. */

// Import an entire module's contents
import * as myModule from '/modules/my-module.js';

// Import a single export from a module
import { myExport } from '/modules/my-module.js';

// Import multiple exports from module
import { foo, bar } from '/modules/my-module.js';

// Import an export with a more convenient alias
import {
  reallyReallyLongModuleExportName as shortName,
  anotherLongModuleName as short
} from '/modules/my-module.js';

// Import a module for its side effects only
// This runs the module's global code.
import '/modules/my-module.js';


// Dynamic import
(async () => {
  if (somethingIsTrue) {
    await import('/modules/my-module.js');
  }
})();

// Importing defaults
import myDefault from '/modules/my-module.js';
import myDefault, * as myModule from '/modules/my-module.js';
import myDefault, { foo, bar } from '/modules/my-module.js';


/*---------------------------------------------------------------- */

// For dynamic default import:
// You need to destructure and rename the "default" key from the returned object.
(async () => {
  if (somethingIsTrue) {
    const { default: myDefault, foo, bar } = await import('/modules/my-module.js');
  }
})();