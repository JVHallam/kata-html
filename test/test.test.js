/*
  We're going to use jest to test the tests.

  We're going to have to use dependancy injection to test the tests.

  We're going to have to have 2 layers:
    * Files to export to the browser
    * Files to contain the values that are being tested

  jsdom notes:
    jsdom.fromFile( filename ).then( dom => { } );
     
    dom.window.document

    dom.window.document.doctype.name == "html"

  Dependancy injection:
    We're going to have to inject the window.
*/
