export function rgbTolab(rgbString: any): string {
    // Extract RGB values from the string
    const rgb = rgbString.match(/\d+/g).map(Number);
    // Normalize RGB values to the range 0-1
    let r = rgb[0] / 255,
      g = rgb[1] / 255,
      b = rgb[2] / 255;
  
    // Apply gamma correction
    r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
    g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
    b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
  
    // Convert to XYZ
    let x = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047,
      y = (r * 0.2126 + g * 0.7152 + b * 0.0722) / 1.0,
      z = (r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883;
  
    // Convert XYZ to LAB
    x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
    y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
    z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
  
    return [
      Math.ceil(116 * y - 16),
      Math.ceil(500 * (x - y)),
      Math.ceil(200 * (y - z)),
    ].join(",");
  }