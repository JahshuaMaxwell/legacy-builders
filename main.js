(function () {
  var cfg = window.LEGACY_CONFIG || {};

  function byId(id) {
    return document.getElementById(id);
  }

  function setHref(id, url) {
    var el = byId(id);
    if (el && url) el.setAttribute("href", url);
  }

  setHref("book-cta", cfg.CALENDLY_URL);
  setHref("book-link", cfg.CALENDLY_URL);
  setHref("info-cta", cfg.IDECISION_URL);

  var phone = byId("phone-link");
  if (phone && cfg.PHONE_TEL) {
    var tel = String(cfg.PHONE_TEL);
    phone.setAttribute("href", tel.indexOf("tel:") === 0 ? tel : "tel:" + tel);
  }
  var phoneText = byId("phone-text");
  if (phoneText && cfg.PHONE_DISPLAY) phoneText.textContent = cfg.PHONE_DISPLAY;

  var email = byId("email-link");
  if (email && cfg.EMAIL) email.setAttribute("href", "mailto:" + cfg.EMAIL);
  var emailText = byId("email-text");
  if (emailText && cfg.EMAIL) emailText.textContent = cfg.EMAIL;

  var ig = byId("instagram-link");
  if (ig && cfg.INSTAGRAM_URL) ig.setAttribute("href", cfg.INSTAGRAM_URL);
  var igText = byId("instagram-text");
  if (igText && cfg.INSTAGRAM_HANDLE) {
    igText.textContent = "@" + String(cfg.INSTAGRAM_HANDLE).replace(/^@/, "");
  }
})();
