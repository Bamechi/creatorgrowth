/**
 * Creator Growth — form intake endpoint (v2)
 * Receives POSTs from 19keys.com/creator and writes rows to the
 * "Creator Growth Applicants" spreadsheet.
 *
 * Two intake types, routed by payload.type:
 *   "application"  -> first tab (Program applications), with the builder Package
 *   "challenge"    -> "Challenge Waitlist" tab (created automatically)
 *
 * REDEPLOY after pasting: Deploy > Manage deployments > edit (pencil) >
 * Version: New version > Deploy. The /exec URL stays the same.
 */

var SPREADSHEET_ID = "1IssP7EywVz0UAscjtpojIwmkqP2_RksF64IRENKa-04";

var APP_HEADERS = [
  "First Name", "Last Name", "Email", "Phone", "Busines/Brand", "Website",
  "Building", "Investment", "Preferred Discovery", "Checkbox", "Timestamp", "Package"
];

var CHALLENGE_TAB = "Challenge Waitlist";
var CHALLENGE_HEADERS = ["First Name", "Email", "Phone", "Handle", "Plan", "Timestamp"];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    var data = parseIncoming(e);
    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);

    if (data.type === "challenge") {
      var tab = ss.getSheetByName(CHALLENGE_TAB);
      if (!tab) {
        tab = ss.insertSheet(CHALLENGE_TAB);
        tab.getRange(1, 1, 1, CHALLENGE_HEADERS.length).setValues([CHALLENGE_HEADERS]);
        tab.setFrozenRows(1);
      }
      tab.appendRow([
        data.firstName || "",
        data.email || "",
        data.phone || "",
        data.website || "",
        data.vision || "",
        new Date()
      ]);
      return json({ ok: true, routed: CHALLENGE_TAB });
    }

    var sheet = ss.getSheets()[0];
    sheet.appendRow([
      data.firstName || "",
      data.lastName || "",
      data.email || "",
      data.phone || "",
      data.brand || "",
      data.website || "",
      data.vision || "",
      data.investment || "",
      data.discovery || "",
      data.consent || "",
      new Date(),
      data.package || ""
    ]);
    return json({ ok: true, routed: "applications" });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return json({ ok: true, service: "Creator Growth intake v2" });
}

function parseIncoming(e) {
  if (e && e.postData && e.postData.contents) {
    try { return JSON.parse(e.postData.contents); } catch (ignore) {}
  }
  var p = (e && e.parameter) ? e.parameter : {};
  return {
    type: p.type || "application",
    firstName: p.firstName || p["first-name"] || "",
    lastName: p.lastName || p["last-name"] || "",
    email: p.email || "",
    phone: p.phone || "",
    brand: p.brand || "",
    website: p.website || "",
    vision: p.vision || "",
    investment: p.investment || "",
    discovery: p.discovery || "",
    consent: p.consent || "",
    "package": p["package"] || ""
  };
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

/** Run once: writes/refreshes the header rows on both tabs. */
function setupHeaders() {
  var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  ss.getSheets()[0].getRange(1, 1, 1, APP_HEADERS.length).setValues([APP_HEADERS]);
  var tab = ss.getSheetByName(CHALLENGE_TAB) || ss.insertSheet(CHALLENGE_TAB);
  tab.getRange(1, 1, 1, CHALLENGE_HEADERS.length).setValues([CHALLENGE_HEADERS]);
  tab.setFrozenRows(1);
}
