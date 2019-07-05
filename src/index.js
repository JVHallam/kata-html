const expect = require("chai").expect;
const runDomTests = require("./domElementTest.js").runDomTests;


function elementIsNotNull( element ){
  expect( element ).not.to.equal( null );
  expect( element ).not.to.equal( undefined );
};


(async() => {
  runDomTests([
    [ "Checking garb element exists",
      () => document.getElementById("garb"),
      elementIsNotNull
    ],
    [ "I'm expecting this to fail",
      () => document.getElementById("FAIL"),
      elementIsNotNull
    ]
  ]);
})();
