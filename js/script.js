const currentSpeed = document.querySelector(".current-speed");
const currentLatitude = document.querySelector(".position--latitude span");
const currentLongitude = document.querySelector(".position--longitude span");

navigator.geolocation.watchPosition(
  data => {
    console.log(data);
    const speedInKm = data.coords.speed;
    const speedInMetres = speedInKm * 1000;
    const distancePerSecond = 3600 / speedInMetres;
    const secondsPerKm = distancePerSecond * 1000;
    const minutes = Math.floor(secondsPerKm / 60);
    const seconds = Math.round(secondsPerKm % 60);
    const currentSpeedText = minutes + ":" + seconds;

    currentSpeed.textContent = currentSpeedText;
    currentLatitude.textContent = data.coords.latitude;
    currentLongitude.textContent = data.coords.longitude;
  },
  error => {
    console.error(error);
    alert("You need to allow location for this to work.");
  }
);
