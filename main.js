let Circle = function (radius) {
    this.radius = radius;

    this.getRadius = function () {
        return radius;
    }

    this.getArea = function () {
        return Math.PI * radius * radius;
    }
}

let circle = new Circle(2);
let radius = a.getRadius();
let area = a.getArea();

alert("radius: " + radius + "; area: " + area);