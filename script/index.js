

function calculateTriangleArea() {
    let base = parseFloat(document.getElementById('Base').value);
    let height = parseFloat(document.getElementById('Height').value);
    // to insure that both base and height are positive numbers
    if (base <= 0 || height <= 0 || isNaN(base) || isNaN(height)) {
        document.getElementById('result').innerHTML = "Base and height must be positive numbers.";
        return;
    }
    //area of triangle formula
    let area = 0.5 * base * height;
    document.getElementById('result').innerHTML = "The area of the triangle is: " + area; //the result
}
