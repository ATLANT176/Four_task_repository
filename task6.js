function calculateTime (distance, speed) {
    time_hours = distance / speed;
    time_minutes = time_hours * 60;
    hours = int(time_minutes);
    minutes = int(time_minutes % 60);
    time = "{hours:02d}ч. {minutes:02d}м.";
    return time;
}

console.log(calculateTime(500, 14));