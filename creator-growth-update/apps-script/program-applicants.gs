/**
 * Creator Growth Applicants — Program applications
 * Project: "Creator Growth Applicants"
 * Sheet:   1IssP7EywVz0UAscjtpojIwmkqP2_RksF64IRENKa-04
 * Live at: /macros/s/AKfycbw_oIZpxme-u2jr0zGvrDV5v3_o3M-sHZNVQVOq6DXS1IyY_xrRKDGS7uvseHTBlCMQ/exec
 *
 * IF NOT YET UPDATED: paste this over the existing Code.gs, run setupHeaders once,
 * then Deploy > Manage deployments > pencil > Version: New version > Deploy.
 * The /exec URL does not change.
 *
 * Adds the "Package" column (the a la carte selections from the builder).
 */

var SPREADSHEET_ID = "1IssP7EywVz0UAscjtpojIwmkqP2_RksF64IRENKa-04";
var APP_HEADERS = ["First Name", "Last Name", "Email", "Phone", "Busines/Brand", "Website", "Building", "Investment", "Preferred Discovery", "Checkbox", "Timestamp", "Package"];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    var d = parseIncoming(e);
    var sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheets()[0];
    sheet.appendRow([
      d.firstName || "", d.lastName || "", d.email || "", d.phone || "",
      d.brand || "", d.website || "", d.vision || "", d.investment || "",
      d.discovery || "", d.consent || "", new Date(), d.package || ""
    ]);
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function doGet() { return json({ ok: true, service: "Creator Growth Applicants" }); }

function parseIncoming(e) {
  if (e && e.postData && e.postData.contents) {
    try { return JSON.parse(e.postData.contents); } catch (ignore) {}
  }
  var p = (e && e.parameter) ? e.parameter : {};
  return {
    firstName: p.firstName || "", lastName: p.lastName || "", email: p.email || "",
    phone: p.phone || "", brand: p.brand || "", website: p.website || "",
    vision: p.vision || "", investment: p.investment || "", discovery: p.discovery || "",
    consent: p.consent || "", "package": p["package"] || ""
  };
}

function json(obj) { return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON); }

function setupHeaders() {
  var sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheets()[0];
  sheet.getRange(1, 1, 1, APP_HEADERS.length).setValues([APP_HEADERS]);
  sheet.setFrozenRows(1);
}
