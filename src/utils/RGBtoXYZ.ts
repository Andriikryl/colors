export function RGBtoXYZ(rgbaString: string): string | null {
    // Extract RGB values from the RGBA string
    const match = rgbaString.match(/\d+/g);
    if (!match) {
      return null; // Return null if no matches are found
    }
    const [R, G, B] = match.map(Number);
  
    // Normalize RGB values to the range 0-1
    const [var_R, var_G, var_B] = [R, G, B]
      .map((x) => x / 255)
      .map((x) => (x > 0.04045 ? Math.pow((x + 0.055) / 1.055, 2.4) : x / 12.92))
      .map((x) => x * 100);
  
    // Apply the RGB to XYZ conversion formula
    const X = var_R * 0.4124 + var_G * 0.3576 + var_B * 0.1805;
    const Y = var_R * 0.2126 + var_G * 0.7152 + var_B * 0.0722;
    const Z = var_R * 0.0193 + var_G * 0.1192 + var_B * 0.9505;
  
    // Return the XYZ values
    return [X.toFixed(2), Y.toFixed(2), Z.toFixed(2)].join(", ");
  }