
const temperature = 28; 
const isRaining = false;
const windSpeed = 12;   

let activityAdvice = "";

if (isRaining) {
  activityAdvice = "Stay indoors with hot coffee.";
} else if (temperature > 35) {
  activityAdvice = "Go swimming.";
} else if (temperature < 15 && windSpeed > 20) {
  activityAdvice = "Too cold and windy - stay home.";
} else {
  activityAdvice = "Perfect day for a walk.";
}

console.log(`Temperature: ${temperature}°C | Rain: ${isRaining} | Wind: ${windSpeed} km/h`);
console.log(`Advice: ${activityAdvice}`);