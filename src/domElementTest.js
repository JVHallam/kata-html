const maf = require("maf-test");
const describe = maf.describe;
const test = maf.test;

const prettyPrint = require("./prettyprint.js").prettyPrintAllTests;

/*
  runDomTests([
    [ "Checking garb element exists",
      () => document.getElementById("garb"),
      elementIsNotNull
    ],
    [ "I'm expecting this to fail",
      () => document.getElementById("FAIL"),
      ( element ) => { expect( element ).to.not.be( null ) }
    ]
  ]);

  parameters:
    name {string} - The tests name
    getElementFn {callback()} - get the element from the dom, then return it
    testElementFn {callback( domElement )} - Test the elements values 
*/
async function runDomTests( tests = [] ){
  const testsArray = tests.map( ( [ name, getElementFn, testElementFn ] ) => { 
    return test(name, () => { testElementFn( getElementFn() ) } );
  });

  const describeResult = await describe( testsArray );

  prettyPrint( describeResult );
};


module.exports = {
  runDomTests : runDomTests
};
