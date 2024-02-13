<<<<<<< HEAD
class Shape {
  constructor(color) {
    this.color = color;
  }
}

class Square extends Shape {
  constructor(size, color) {
    super(color);
    this.size = size;
=======
class Square {
  constructor(size, color) {
    this.size = size;
    this.color = color;
>>>>>>> 848a597b63280b5d9bc652d3f08ea707890f75f2
  }

  render() {
    return `<rect x="50" y="50" width="${this.size}" height="${this.size}" fill="${this.color}" />`;
  }
}

<<<<<<< HEAD
class Circle extends Shape {
  constructor(radius, color) {
    super(color);
    this.radius = radius;
=======
class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
>>>>>>> 848a597b63280b5d9bc652d3f08ea707890f75f2
  }

  render() {
    return `<circle cx="300" cy="300" r="${this.radius}" fill="${this.color}" />`;
  }
}

<<<<<<< HEAD
class Triangle extends Shape {
  constructor(size, color) {
    super(color);
    this.size = size;
  }

  render() {
    const height = this.size;
    const base = this.size * 2;
    const startX = 200 - base / 2;
    const startY = 150 + this.size;
    return `<polygon points="${startX},${150} ${startX + base},${startY} ${startX - base},${startY}" fill="${this.color}" />`;
  }
}

module.exports = { Square, Circle, Triangle };
=======
class Triangle {
  constructor(size, color) {
    this.size = size;
    this.color = color;
  }

  render() {
    // Assuming the size affects the triangle's dimensions uniformly
    let height = this.size;
    let base = this.size * 2;
    let startX = 200 - base / 2;
    let startY = 50 + height;
    return `<polygon points="${startX},${50} ${startX + base},${startY} ${startX - base},${startY}" fill="${this.color}" />`;
  }
}

module.exports = { Square, Circle, Triangle };
>>>>>>> 848a597b63280b5d9bc652d3f08ea707890f75f2
