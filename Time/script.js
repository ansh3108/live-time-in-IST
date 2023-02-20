function updateTime() {
    var now = new Date();
    var options = { timeZone: 'Asia/Kolkata', hour12: false };
    var timeString = now.toLocaleTimeString('en-US', options);
    document.getElementById('live-time').innerHTML = timeString;
  }
  
  setInterval(updateTime, 1000);
  
  var toggleFullscreenButton = document.getElementById('toggle-fullscreen');
  toggleFullscreenButton.addEventListener('click', function() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  });
  
  var toggleDarkModeButton = document.getElementById('toggle-darkmode');
  toggleDarkModeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
  });
  