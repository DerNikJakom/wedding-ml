function doPost(e) {
  var headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Accept',
    'Access-Control-Max-Age': '86400'
  };

  // Handle OPTIONS request (CORS preflight)
  if (e.parameter && e.parameter.method === 'OPTIONS') {
    return ContentService.createTextOutput('')
      .setMimeType(ContentService.MimeType.TEXT)
      .setHeaders(headers);
  }

  if (e.postData && e.postData.contents) {
    try {
      var data = JSON.parse(e.postData.contents);
      var sheet = SpreadsheetApp.openById("IHRE_SHEET_ID").getActiveSheet();
      
      // Wenn das Sheet leer ist, füge die Spaltenüberschriften hinzu
      if (sheet.getLastRow() === 0) {
        sheet.appendRow([
          'Zeitstempel',
          'Name',
          'E-Mail',
          'Teilnahme',
          'Anzahl Gäste',
          'Menüauswahl',
          'Unverträglichkeiten',
          'Musikwunsch'
        ]);
      }
      
      // Füge die Daten in der gleichen Reihenfolge wie die Überschriften hinzu
      sheet.appendRow([
        new Date(),
        data.name,
        data.email,
        data.attending,
        data.guests,
        data.mealPreference,
        data.dietaryRestrictions,
        data.songRequest
      ]);

      return ContentService.createTextOutput(JSON.stringify({
        status: "success",
        message: "Daten erfolgreich gespeichert"
      }))
        .setMimeType(ContentService.MimeType.JSON)
        .setHeaders(headers);

    } catch (error) {
      return ContentService.createTextOutput(JSON.stringify({
        status: "error",
        message: error.toString()
      }))
        .setMimeType(ContentService.MimeType.JSON)
        .setHeaders(headers);
    }
  }

  return ContentService.createTextOutput(JSON.stringify({
    status: "error",
    message: "Ungültige Anfrage"
  }))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders(headers);
}

function doGet(e) {
  var headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Accept'
  };

  return ContentService.createTextOutput("Der Service ist aktiv")
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeaders(headers);
}