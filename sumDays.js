//function add all the numbers including below and including current (think factorials but addition) in google scripts


function onOpen() {
    SpreadsheetApp
    .getUi()
    .createAddonMenu()
    .addItem("Sum Days", "sumDays")
    .addToUi();
}
function sumDays() {
  const sheet = SpreadsheetApp.getActiveSheet()
  let cell = sheet.getRange(3,4,1,1)
  let cellVal = cell.getValue()
  let total = (Math.pow(cellVal,2) + cellVal)/2
  let range = sheet.getRange(3,2,1,2)
  range.setValues([[total,total]])
  
  // reset day
  let newVals = []

  for (let i = 2; i < 4; i++) {
    let toAdd = sheet.getRange(11,i,1,1)
    let current = sheet.getRange(4,i,1,1)
    let addVal = toAdd.getValue()
    let currentVal = current.getValue()
    let newVal = addVal + currentVal
    newVals.push(newVal)
  }

  let currentValArray = [newVals]
  console.log(currentValArray)

  sheet.getRange(4,2,1,2).setValues(currentValArray)

  let reset = sheet.getRange(11, 2, 1, 2)
  reset.setValues([[0,0]])
}
