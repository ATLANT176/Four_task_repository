function calculateDistance (x1, y1, x2, y2) {
    const firstCoordinate = (x1 + x2)/2;
    const secondCoordinate = (y1 + y2)/2;
    const distance = firstCoordinate + secondCoordinate;
    return distance;
}

console.log(calculateDistance(3, 2, 5, 3));