class Square {
  constructor(size, color) {
    this.size = size;
    this.color = color;
  }

  render() {
    return `<rect x="50" y="50" width="${this.size}" height="${this.size}" fill="${this.color}" />`;
  }
}

class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }

  render() {
    return `<circle cx="300" cy="300" r="${this.radius}" fill="${this.color}" />`;
  }
}

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