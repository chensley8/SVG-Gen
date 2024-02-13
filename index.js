const fs = require('fs');
const readline = require('readline');
const { Square, Circle, Triangle } = require('./lib/shapes');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function generateSVG(chosenShape, shapeColor, text, textColor) {
  const size = 100;
  let shape, textX, textY;

  switch (chosenShape.toLowerCase()) {
    case 'square':
      shape = new Square(size, shapeColor);
      textX = 50 + size / 2 - text.length * 5;
      textY = 50 + size / 2 + 5; 
      break;
    case 'circle':
      shape = new Circle(size / 2, shapeColor); 
      textX = 300 - text.length * 5;
      textY = 300 + 5; 
      break;
    case 'triangle':
      shape = new Triangle(size, shapeColor);
      textX = 200 - text.length * 5;
      textY = 150 + size / 4 + 5; 
      break;
    default:
      console.error('Invalid shape chosen.');
      rl.close();
      return;
  }

  const shapeAttributes = shape.render();

  const svgContent = `
    <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
      ${shapeAttributes}
      <text x="${textX}" y="${textY}" fill="${textColor}" font-size="20" font-family="Arial">${text.slice(0, 3)}</text>
    </svg>
  `;

  // Write to file
  fs.writeFileSync('output.svg', svgContent);

  console.log('SVG file generated successfully!');
  rl.close();

  // Return the SVG string for testing purposes
  return svgContent;
}

rl.question('Choose a shape (square, circle, triangle): ', (chosenShape) => {
  rl.question('Enter shape color (e.g., red, green, blue or #FF5733): ', (shapeColor) => {
    rl.question('Enter up to three characters of text: ', (text) => {
      rl.question('Enter text color (e.g., red, green, blue or #FF5733): ', (textColor) => {
        generateSVG(chosenShape, shapeColor, text, textColor);
      });
    });
  });
});

module.exports = { generateSVG };
