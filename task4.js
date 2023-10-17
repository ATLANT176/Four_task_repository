function calculateRectangleProperties (width, height) {
    perimeter = 2 * (width + height)
    area = width * height
    properties = {
        "perimeter": perimeter,
        "area": area
    }
    return properties
}

console.log(calculateRectangleProperties(10, 4));