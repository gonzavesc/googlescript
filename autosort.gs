function onEdit(event) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Hoja 1");
  var sheet2 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Hoja 2");
  var editedCell = sheet.getActiveCell();
  var now = new Date();
  var columnToSortBy = 2;
  var tableRange = "A2:B";
  if (editedCell.getColumn() == columnToSortBy) {   
    var range = sheet.getRange(tableRange);
    range.sort( { column : columnToSortBy } );
  }
  var columnToSortBy = 7;
  var tableRange = "E2:G";
  var col = editedCell.getColumn();
  var lin = editedCell.getRow();
  var tete = sheet.getRange(lin,col);
  var data = tete.getValue();
  var tod = sheet.getRange(1,1).getValue();
  if (col == columnToSortBy) {
    var range = sheet.getRange(tableRange);
    range.sort( { column : columnToSortBy } );
    }  
  var empty = '';
  var don = 'TRUE';
  var i = 1
  var l = 0;
  var val = sheet.getRange(i,6).getValue();
  while(val != empty) {
    l=l+1;
    val = sheet.getRange(i,6).getValue();
    i=i+1;
  }
  var l2 = 0;
  var i = 1;
  val = sheet.getRange(i,10).getValue();
  while(val != empty) {
    l2=l2+1;
    val = sheet.getRange(i,10).getValue();
    i=i+1;
  }
  var task;
  var dat;
  var j = 2;
  var T = sheet.getRange(1,2).getValue();
  for (var j = 2;j<=l;j++) {
    val = sheet.getRange(j,8).getValue();
    if (val==T) {
      task = sheet.getRange(j,6).getValue();
      dat = sheet.getRange(j,7).getValue();
      sheet.getRange(j,6).setValue(empty);
      sheet.getRange(j,7).setValue(empty);
      sheet.getRange(j,8).setValue('FALSE');
      sheet.getRange(j,5).setValue('FALSE');
      sheet.getRange(l2,10).setValue(task);
      sheet.getRange(l2,11).setValue(tod);
      sheet.getRange(l2,12).setValue(dat);
      l2=l2+1;
    }
  }
  var l3 = 0;
  var i = 1;
  val = sheet2.getRange(i,1).getValue();
  while(val != empty) {
    l3=l3+1;
    val = sheet2.getRange(i,1).getValue();
    i=i+1;
  }
  for (var j= 2; j<l2;j++){    
    dat = sheet.getRange(j,11).getValue();
    val = (tod-dat)/(3600*24*1000);
    if (val>30){
      task = sheet.getRange(j,10).getValue();
      var dat2 = sheet.getRange(j,11).getValue();
      dat = sheet.getRange(j,12).getValue();
      sheet.getRange(j,10).setValue(empty);
      sheet.getRange(j,11).setValue(empty);
      sheet.getRange(j,12).setValue(empty);
      sheet.getRange(j,13).setValue(empty);
      sheet2.getRange(l3,1).setValue(task);
      sheet2.getRange(l3,2).setValue(dat2);
      sheet2.getRange(l3,3).setValue(dat);
      
    }
  }
  var range = sheet.getRange(tableRange);
  range.sort( { column : columnToSortBy } );
  var tableRange = "J2:L";
  var range = sheet.getRange(tableRange);
  var columnToSortBy = 11;
  range.sort( { column : columnToSortBy } );
  var tableRange = "A2:C";
  var range = sheet2.getRange(tableRange);
  var columnToSortBy = 2;
  range.sort( { column : columnToSortBy } );
  sheet.getRange(2,2).setValue('FALSE');
  
}
