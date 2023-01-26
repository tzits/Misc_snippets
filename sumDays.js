//function add all the numbers including below and including current (think factorials but addition) in google scripts

function myFunction() {
  function onOpen() {
    SpreadsheetApp
    .getUi()
    .createAddonMenu()
    .addItem("Sum Days", "sumDays")
    .addToUi();
  }
  function sumDays() {
    const sheet = SpreadsheetApp.getActiveSheet()
    // order is row#, column #, # of rows, # of columns
    let cell = sheet.getRange(3,4,1,1)
    let cellVal = cell.getValue()
    // for exponents in google scripts use Math.pow(x,n)
    let total = (Math.pow(cellVal,2) + cellVal)/2
    let range = sheet.getRange(3,2,1,2)
    // each outer array is a row, inner array is values of columns
    // # of values and format must match range
    range.setValues([[total,total]])
  }
}
