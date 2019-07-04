const expect = require("chai").expect;
const maf = require("maf-test");
const describe = maf.describe;
const test = maf.test;

(async() => {
  const result = describe([
    test("This is a chai test", () => {
      expect( 1 ).to.equal( 1 );
    }),
    test("This is a dom test", () => {
      expect( document.getElementById("garb") ).to.not.equal( null );
    }),
    test("This test should fail", () => {
      expect( 1 ).to.equal( 2 );
    })
  ]);

  console.log(result);
})();
