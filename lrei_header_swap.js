//@OnlyCurrentDoc
function onOpen() {
  SpreadsheetApp
    .getUi()
    .createAddonMenu()
    .addItem("Clean CSV headers", "csvRemoveNumericPrefixesFromHeaders")
    .addToUi();
}
function csvRemoveNumericPrefixesFromHeaders() {
  const sheet = SpreadsheetApp.getActiveSheet();
  Logger.log("Active sheet", sheet ? sheet.getName() : null);
  if (sheet) {
    let range = sheet.getRange(1, 1, 1, sheet.getLastColumn());
    const values = range.getValues();
      for (let col in values[0]) {
        const matches = /^(\d+[^A-Za-z0-9])(.*)$/.exec(values[0][col]);
        if (matches) {
          const cellRow = 1;
          const cellCol = parseInt(col) + 1;
          const cell = sheet.getRange(cellRow, cellCol);
          cell.setValue(matches[2]);
          Logger.log(`Removed "${matches[1]}" prefix from cell ${cellRow}:${cellCol}`);
        }
      }
    //range of columns where header need to be changed
    // params are start row, start column, number of rows, number of columns
    range = sheet.getRange(1,49,1,69)
    
    //matrix to replace must exactly match dimensions of range, thus needs to be an array or arrays, with each inner array representing a row 
    //and each value within the array representing the value of the cell
    range.setValues(containerArray)
  }

}

//array of values new headers should be

let containerArray = [
  ['H1 p1Relationship', 'H1 p2Relationship', 'user_id1', 'H1 p1Title', 'H1 p1NameFirst', 'H1 p1NameFamiliar',
  'H1 p1NameMiddle', 'H1 p1NameLast', 'H1 p1Suffix', 'H1 p1Email', 'H1 p1PhoneCell', 'H1 p1PhoneWork',
  'H1 p1Employer', 'H1 p1Occupation', 'H1 p1JobTitle', 'H1 p2Title', 'H1 p2NameFirst', 'H1 p2NameFamiliar',
  'H1 p2NameMiddle', 'H1 p2NameLast', 'H1 p2Suffix', 'H1 p2Email', 'H1 p2PhoneCell', 'H1 p2PhoneWork',
  'H1 p2Employer', 'H1 p2Occupation', 'H1 p2JobTitle', 'H1 address1', 'H1 address2', 'H1 city', 'H1 state',
  'H1 zip', 'H1 country', 'H1 phoneHome', 'secondaryHouseholdID', 'H2 p1Relationship', 'H2 p2Relationship',
  'user_id2', 'H2 p1Title', 'H2 p1NameFirst', 'H2 p1NameFamiliar', 'H2 p1NameMiddle', 'H2 p1NameLast',
  'H2 p1Suffix', 'H2 p1Email', 'H2 p1PhoneCell', 'H2 p1PhoneWork', 'H2 p1Employer', 'H2 p1Occupation',
  'H2 p1JobTitle', 'H2 p2Title', 'H2 p2NameFirst', 'H2 p2NameFamiliar', 'H2 p2NameMiddle', 'H2 p2NameLast',
  'H2 p2Suffix', 'H2 p2Email', 'H2 p2PhoneCell', 'H2 p2PhoneWork', 'H2 p2Employer', 'H2 p2Occupation',
  'H2 p2JobTitle', 'H2 address1', 'H2 address2', 'H2 city', 'H2 state', 'H2 zip', 'H2 country', 'H2 phoneHome']
]


