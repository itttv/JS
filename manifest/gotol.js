var _cData = 'en';
$.get("https://1.1.1.1/cdn-cgi/trace", {}, function (_0x3143ef) {
  var _0x1b681f = _0x3143ef.split("\n");
  var _0x500418 = 0;
  for (var _0x441fba = _0x1b681f.length; _0x500418 < _0x441fba; _0x500418++) {
    var _0x59914b = _0x1b681f[_0x500418].split('=');
    _cData = 'en';
    if (_0x59914b[0] == "loc") {
      _cData = _0x59914b[1].toLowerCase();
      break;
    }
  }
});
var _linkIndex = -1;
document.getElementById(atob("Zmlyc3RfY29udGVudA==")).innerHTML = atob("PGlmcmFtZSBhbGxvdz0nZW5jcnlwdGVkLW1lZGlhJyBhbGxvd2Z1bGxzY3JlZW49J2FsbG93ZnVsbHNjcmVlbicgYWxsb3d0cmFuc3BhcmVuY3k9J3RydWUnIGNsYXNzPSdpZnJhbWUnIGZyYW1lYm9yZGVyPScwJyBmcmFtZXNwYWNpbmc9JzAnIGdlc3R1cmU9J21lZGlhJyBoZWlnaHQ9JzEwMHZoJyBpZD0nbWFpbl9pZnJhbWUnIHNjcm9sbGluZz0nbm8nIHNyYz0naHR0cHM6Ly9saXZlLXNwb3J0LmR1a3Rlay5vbmxpbmUnIHdpZHRoPScxMDB2dycvPg==");
var _myLocation = window.location.href;
eval(atob("ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5faWZyYW1lJykuc3JjID0gJ2h0dHBzOi8vbGl2ZS1zcG9ydHMuZHVrdGVrLm9ubGluZS8nK191cmwucGF0aG5hbWU="));
var _changeState = function (_0x385178, _0x2e656f) {
  window.history.pushState({
    'pageTitle': _0x385178
  }, '', _0x2e656f);
  document.title = _0x385178;
};
window.onmessage = _0x3e1a8b => {
  if (_0x3e1a8b.origin === atob("aHR0cHM6Ly9saXZlLXNwb3J0cy5kdWt0ZWsub25saW5l")) {
    var _0x5df60f = JSON.parse(_0x3e1a8b.data);
    if (_0x5df60f.type == "changeUrl") {
      _changeState(_0x5df60f.title, _0x5df60f.path);
      document.title = _0x5df60f.title;
    } else if (_0x5df60f.type == "copyToClipboard") {
      navigator.clipboard.writeText(_0x5df60f.text);
    }
  }
};
function setCookie(_0x13d03e, _0x6fcaa3, _0x2a53e0) {
  let _0x4b3be8 = new Date();
  _0x4b3be8.setTime(_0x4b3be8.getTime() + _0x2a53e0 * 24 * 60 * 60 * 1000);
  const _0x1d658b = "expires=" + _0x4b3be8.toUTCString();
  document.cookie = _0x13d03e + '=' + _0x6fcaa3 + "; " + _0x1d658b + "; path=/";
}
function getCookie(_0x52dec3) {
  const _0x3fd807 = _0x52dec3 + '=';
  const _0x5defa4 = decodeURIComponent(document.cookie);
  const _0x37f3e7 = _0x5defa4.split("; ");
  var _0x9457a0 = -1;
  _0x37f3e7.forEach(_0x1b0627 => {
    if (_0x1b0627.indexOf(_0x3fd807) === 0) {
      _0x9457a0 = _0x1b0627.substring(_0x3fd807.length);
    }
  });
  return _0x9457a0;
}
//add iklan
var _links = ["https://carrierdestined.com/h9wy87em5h?key=20cb5df32b0cb6d71e91c2556d91f27a", "https://sauptowhy.com/4/3184875", "https://nv3tosjqd.com/2017599/", "https://naazex.com/gosl/InNpZCI6MTM0NTI1OCwic21hcnRsaW5rIjp0cnVlfQ==eyJwaWQiOjExODA1MzIs?si1=&si2="];
var _directLinkUrl = '';
var _get = function (_0x3eea8f) {
  if (_0x3eea8f = new RegExp("[?&]" + encodeURIComponent(_0x3eea8f) + "=([^&]*)").exec(location.search)) {
    return decodeURIComponent(_0x3eea8f[1]);
  }
};
function generateCode() {
  _linkIndex = parseInt(getCookie("linkIndex"));
  if (_linkIndex >= _links.length || _linkIndex < 0) {
    _linkIndex = 0;
  }
  if (typeof _get("loc") != "undefined") {
    _directLinkUrl = atob(_get("loc"));
  } else {
    _directLinkUrl = _links[_linkIndex];
  }
  _linkIndex = _linkIndex + 1;
  setCookie("linkIndex", _linkIndex, 1);
}
generateCode();
var _displayMode = "browser";
if (navigator.standalone || window.matchMedia("(display-mode: standalone)").matches) {
  _displayMode = "standalone";
}
