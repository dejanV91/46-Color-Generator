function hexToRGBA(hex) {
  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    // console.log(c >> 16);
    // console.log(c >> 8);
    // console.log(c);

    return `rgb(${(c >> 16) & 255}, ${(c >> 8) & 255}, ${c & 255})`;
  } else {
    return false;
  }

  // return (+d).toString(16).toUpperCase();
}

export default hexToRGBA;
