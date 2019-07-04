/*
  Expected Variable:  
  [
      {
          name : "This is a test"
          result : true 
          error : null 
      },
      {
          name : "This is a test"
          result : true 
          error : null 
      }
  ]
*/

module.exports = {
  prettyPrintAllTests : prettyPrintAllTests
};

function prettyPrintTest( { name, result, error } ){
  const color = result ? "green" : "red";
  const errorMessage = result ? "" : ` => ${error}`;
  const cssString = `color : ${color}`;
  console.log( `%c ${name} ${errorMessage}`, cssString );
};

function prettyPrintAllTests( testArray=[] ){
  const totalTests = testArray.length;
  const passedTests = testArray.reduce( (a, x) => a + ( x.result ? 1 : 0 ) , 0 );

  console.log(`%c Tests passing => ${passedTests} / ${totalTests}`, `color : blue`);

  for( var i = 0; i < testArray.length; ++i ){
    const currentTest = testArray[i];

    prettyPrintTest( currentTest );
  };
};
