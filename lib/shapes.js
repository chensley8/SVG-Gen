module.exports = {
    square: function(size, color) {
      return `<rect x="50" y="50" width="${size}" height="${size}" fill="${color}" />`;
    },
  
    circle: function(radius, color) {
      return `<circle cx="300" cy="300" r="${radius}" fill="${color}" />`;
    },
  
    triangle: function(size, color) {
      return `
        <polygon points="200,50 250,150 150,150" fill="${color}" />
      `;
    }
  };