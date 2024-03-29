<<<<<<< HEAD
const { generateSVG } = require('../index');
const { Square, Circle, Triangle } = require('./shapes'); 

describe('SVG Generation', () => {
  test('generates correct SVG for a square', () => {
    const chosenShape = 'square';
    const shapeColor = 'red';
    const text = 'ABC';
    const textColor = 'blue';
  
    const expectedSVG = `
    <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="50" width="100" height="100" fill="red" />
      <text x="85" y="105" fill="blue" font-size="20" font-family="Arial">ABC</text>
    </svg>
    `.trim();
  
    const generatedSVG = generateSVG(chosenShape, shapeColor, text, textColor).trim();
    expect(generatedSVG).toBe(expectedSVG);
  });

  test('generates correct SVG for a circle', () => {
    const chosenShape = 'circle';
    const shapeColor = 'green';
    const text = 'XYZ';
    const textColor = 'black';
  
    const expectedSVG = `
<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
      <circle cx="300" cy="300" r="50" fill="green" />
      <text x="285" y="305" fill="black" font-size="20" font-family="Arial">XYZ</text>
    </svg>
  `.trim();
  
    const generatedSVG = generateSVG(chosenShape, shapeColor, text, textColor).trim();
    expect(generatedSVG).toBe(expectedSVG);
  });

  test('generates correct SVG for a triangle', () => {
    const chosenShape = 'triangle';
    const shapeColor = 'blue';
    const text = 'LMN';
    const textColor = 'white';
  
    const expectedSVG = `
<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
      <polygon points="100,150 300,250 -100,250" fill="blue" />
      <text x="185" y="180" fill="white" font-size="20" font-family="Arial">LMN</text>
    </svg>
  `.trim();
  
    const generatedSVG = generateSVG(chosenShape, shapeColor, text, textColor).trim();
    expect(generatedSVG).toBe(expectedSVG);
  });

})
=======
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
>>>>>>> 848a597b63280b5d9bc652d3f08ea707890f75f2
