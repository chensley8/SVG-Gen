class Shape {
  constructor(color) {
    this.color = color;
  }
}

class Square extends Shape {
  constructor(size, color) {
    super(color);
    this.size = size;
  }

  render() {
    return `<rect x="50" y="50" width="${this.size}" height="${this.size}" fill="${this.color}" />`;
  }
}

class Circle extends Shape {
  constructor(radius, color) {
    super(color);
    this.radius = radius;
  }

  render() {
    return `<circle cx="300" cy="300" r="${this.radius}" fill="${this.color}" />`;
  }
}

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
