'use strict'
function countdownto(target, time, callback) {
  var fin = new Date(time);
  var s = 1000,
    m = s * 60,
    h = m * 60,
    d = h * 24;

  (function timer() {
    var now = new Date();
    var dist = fin - now;

    var days = Math.floor(dist / d),
      hours = Math.floor((dist % d) / h),
      minutes = Math.floor((dist % h) / m),
      seconds = Math.floor((dist % m) / s);

    var timestr = seconds + "s";
    target.innerHTML = timestr;

    if (dist > 0) {
      setTimeout(timer, 1000);
    } else {
      callback();
    }
  })();
}
var cde = document.getElementById("countdown");
var time = new Date();
time.setSeconds(time.getSeconds() + 10);
countdownto(cde, time, function () {
  cde.style.display = "none";
});
let hid = () => {
  document.getElementById("countdown").innerHTML = "Happy independence day";
};
setTimeout(hid, 10000);
