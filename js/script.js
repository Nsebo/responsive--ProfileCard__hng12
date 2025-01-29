function updateTime() {
  const utcTime = new Date().toUTCString();
  document.getElementById('utc-time').innerText = `UTC Time: ${utcTime}`;
}
updateTime();
