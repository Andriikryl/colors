export function hexAToRGBA(h: string): string {
    if (!/^#([A-Fa-f0-9]{3,4}|([A-Fa-f0-9]{2}){3,4})$/.test(h)) {
        throw new Error('Invalid hexadecimal color.');
    }
    let r = 0, g = 0, b = 0, a = 1;
    h = h.substring(1); // Remove the '#'

    if (h.length === 3) {
        r = parseInt(h[0] + h[0], 16);
        g = parseInt(h[1] + h[1], 16);
        b = parseInt(h[2] + h[2], 16);
    } else if (h.length === 4) {
        r = parseInt(h[0] + h[0], 16);
        g = parseInt(h[1] + h[1], 16);
        b = parseInt(h[2] + h[2], 16);
        a = parseInt(h[3] + h[3], 16) / 255;
    } else if (h.length === 6) {
        r = parseInt(h[0] + h[1], 16);
        g = parseInt(h[2] + h[3], 16);
        b = parseInt(h[4] + h[5], 16);
    } else if (h.length === 8) {
        r = parseInt(h[0] + h[1], 16);
        g = parseInt(h[2] + h[3], 16);
        b = parseInt(h[4] + h[5], 16);
        a = parseInt(h[6] + h[7], 16) / 255;
    }

    return `(${r}, ${g}, ${b}, ${a.toFixed(1)})`;
}
