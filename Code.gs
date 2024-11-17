function doPost(e) {
  // CORS-Header für die Entwicklungsumgebung
  var headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Headers': 'Content-Type'
  };

  if (e.postData.contents) {
    try {
      // Parse die eingehenden Daten
      var data = JSON.parse(e.postData.contents);
      
      // Öffne das Google Sheet (IHRE_SHEET_ID durch die tatsächliche ID ersetzen)
      var sheet = SpreadsheetApp.openById("IHRE_SHEET_ID").getActiveSheet();
      
      // Füge eine neue Zeile mit den Formulardaten hinzu
      sheet.appendRow([
        new Date(), // Zeitstempel
        data.name,
        data.email,
        data.attending,
        data.guests,
        data.mealPreference,
        data.dietaryRestrictions,
        data.songRequest
      ]);

      // Erfolgreiche Antwort
      return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
        .setMimeType(ContentService.MimeType.JSON)
        .setHeaders(headers);

    } catch (error) {
      // Fehlerantwort
      return ContentService.createTextOutput(JSON.stringify({ 
        status: "error", 
        message: error.toString() 
      }))
        .setMimeType(ContentService.MimeType.JSON)
        .setHeaders(headers);
    }
  }

  // OPTIONS request - CORS preflight
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeaders(headers);
}

function doGet(e) {
  return ContentService.createTextOutput("Der Service ist aktiv")
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeaders({
      'Access-Control-Allow-Origin': '*'
    });
}