export function getOppositeColor(hexColor: string) {
    // Convert hex to RGB first
    let r = 0,
      g = 0,
      b = 0;
    if (hexColor.length === 4) {
      r = parseInt(hexColor[1] + hexColor[1], 16);
      g = parseInt(hexColor[2] + hexColor[2], 16);
      b = parseInt(hexColor[3] + hexColor[3], 16);
    } else if (hexColor.length === 7) {
      r = parseInt(hexColor.slice(1, 3), 16);
      g = parseInt(hexColor.slice(3, 5), 16);
      b = parseInt(hexColor.slice(5, 7), 16);
    }
  
    // Calculate the opposite RGB values
    r = 255 - r;
    g = 255 - g;
    b = 255 - b;
  
    // Convert the opposite RGB back to hex
    const oppositeHex =
      "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  
    return oppositeHex;
  }