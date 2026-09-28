// Sai Xerox & Stationers - customer feedback
// Google Sheet must have a tab named "Feedback" with these headings in row 1:
// Time | Name | Rating | About | Message | Approved

var TAB = "Feedback";

// Saves each new feedback as a new row. Approved starts as "No".
function doPost(e) {
  var d = JSON.parse(e.postData.contents);
  var sheet = SpreadsheetApp.getActive().getSheetByName(TAB);
  sheet.appendRow([
    new Date(),
    String(d.name || "").slice(0, 60),
    Math.max(1, Math.min(5, Number(d.rating) || 0)),
    String(d.about || "").slice(0, 40),
    String(d.message || "").slice(0, 600),
    "No"
  ]);
  return ContentService.createTextOutput("ok");
}

// Sends the website only the rows where Approved is "Yes" (latest 20 first).
function doGet() {
  var rows = SpreadsheetApp.getActive().getSheetByName(TAB).getDataRange().getValues().slice(1);
  var list = rows
    .filter(function (r) { return String(r[5]).toLowerCase() === "yes"; })
    .reverse()
    .slice(0, 20)
    .map(function (r) {
      return {
        n: r[1] || "Customer",
        r: r[2],
        t: r[4],
        d: Utilities.formatDate(new Date(r[0]), "Asia/Kolkata", "dd MMM yyyy")
      };
    });
  return ContentService.createTextOutput(JSON.stringify(list))
    .setMimeType(ContentService.MimeType.JSON);
}
