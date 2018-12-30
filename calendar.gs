function setCal(name, dat) {
  // NEED TO ADD TRIGER TO WORK ONEDIT!!!
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Hoja 1");
  var editedCell = sheet.getActiveCell();
  var T = sheet.getRange(1,2).getValue();
  // Adding to calendar!!!//
  col = editedCell.getColumn();
  lin = editedCell.getRow();
  var cal = 5;
  if (col == cal)
  {
    var name = sheet.getRange(lin, col + 1).getValue();
    var dat = sheet.getRange(lin, col + 2).getValue();
    var tick = sheet.getRange(lin, col).getValue();
    
    if (tick == T)
    {
      var D = new Date(dat);
      var C = new Date(D.getTime() + 1000*3600*9+1000);
      dateEvents = CalendarApp.getEventsForDay(C);
      var ok = 1;
      var jlen = dateEvents.length;
      for (var j = 0; j < jlen; j++)
      {
        if (dateEvents[j].getTitle() == name)
        {
          ok = 0;
          break;
        }
      }
      if (ok)
      {
        CalendarApp.getDefaultCalendar().createAllDayEvent(name, C);
      }
      
    }
    
  }
}
