const fs = require('fs');
const readline = require('readline');
const shapes = require('./lib/shapes');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function generateSVG(chosenShape, shapeColor, text, textColor) {
    const size = 100;
  
    if (shapes[chosenShape]) {
      const shapeAttributes = shapes[chosenShape](size, shapeColor);
  
      const textX = 200 - text.length * 5; 
      const textY = 200 + size / 2 + 10; 
  
      const svgContent = `
        <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
          ${shapeAttributes}
          <text x="${textX}" y="${textY}" fill="${textColor}" font-size="20" font-family="Arial">${text.slice(0, 3)}</text>
        </svg>
      `;
  
      fs.writeFileSync('output.svg', svgContent);
  
      console.log('SVG file generated successfully!');
    } else {
      console.error('Invalid shape chosen.');
    }
  
    rl.close();
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
