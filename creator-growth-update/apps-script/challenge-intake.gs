/**
 * Creator Growth Intake Form — Challenge signups  [ALREADY DEPLOYED]
 * Project: "creator growth intake"
 * Sheet:   16LEK9HsrlIAHZOcM-Ot_F3QqrMk4jZ-0w553C_jlReE
 * Live at: /macros/s/AKfycbwZoWev9b-2rrNbwOXKcSBZsCbgIJ_-7dNXMOxAr0hn_raSZlJyl69Ug-cu8HRfotoD/exec
 *
 * Kept here for reference. Only re-paste if you need to restore or edit it.
 * Columns: Name | Email | Phone | Instagram | Interest(s) | timestamp | Plan
 */

var SPREADSHEET_ID = "16LEK9HsrlIAHZOcM-Ot_F3QqrMk4jZ-0w553C_jlReE";
var HEADERS = ["Name", "Email", "Phone", "Instagram", "Interest(s)", "timestamp", "Plan"];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    var d = parseIncoming(e);
    var sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheets()[0];
    sheet.appendRow([d.name || "", d.email || "", d.phone || "", d.instagram || "", d.interests || "", new Date(), d.plan || ""]);
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function doGet() { return json({ ok: true, service: "Creator Growth Intake Form" }); }

function parseIncoming(e) {
  if (e && e.postData && e.postData.contents) {
    try { return JSON.parse(e.postData.contents); } catch (ignore) {}
  }
  var p = (e && e.parameter) ? e.parameter : {};
  return { name: p.name || "", email: p.email || "", phone: p.phone || "", instagram: p.instagram || "", interests: p.interests || "", plan: p.plan || "" };
}

function json(obj) { return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON); }

/** Run once to write the header row (adds the Plan column). */
function setupHeaders() {
  var sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheets()[0];
  sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
  sheet.setFrozenRows(1);
}
