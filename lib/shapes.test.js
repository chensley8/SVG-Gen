const { Square } = require('../lib/shapes');
const { Triangle } = require('../lib/shapes');
const { Circle } = require('../lib/shapes');

describe('Square', () => {
    test('renders correct SVG for a square with specific radius and color', () => {
    const square = new Square(100, 'red');
    const expectedSVG = '<rect x="50" y="50" width="100" height="100" fill="red" />';
    expect(square.render()).toBe(expectedSVG);
  });
});

describe('Circle', () => {
    test('renders correct SVG for a circle with specific radius and color', () => {
      const circle = new Circle(50, 'blue');
      const expectedSVG = '<circle cx="300" cy="300" r="50" fill="blue" />';
      expect(circle.render()).toBe(expectedSVG);
    });
});

describe('Triangle', () => {
    test('renders correct SVG for a triangle with specific size and color', () => {
        const triangle = new Triangle(100, 'red');
        const expectedSVG = '<polygon points="100,50 300,150 -100,150" fill="red" />';
        expect(triangle.render()).toBe(expectedSVG);
    });
});