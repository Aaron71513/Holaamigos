// Display current time and weather
function updateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    document.getElementById('time').textContent = "Current Time: " + time;
}

function updateWeather() {
    document.getElementById('weather').textContent = "Weather: Sunny, 22°C"; // Placeholder, you can integrate actual API
}

// Music control button functionality
document.getElementById('music-control').addEventListener('click', function() {
    alert('This will control Spotify music playback.'); // Placeholder action
});

// Initialize HUD updates
setInterval(updateTime, 1000);
updateWeather();