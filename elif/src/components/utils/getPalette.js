// src/utils/colors.js
import colorPalettes from '../../data/colorPalettes.json';

export const getPalette = (paletteName) => {
  const palette = colorPalettes.find((item) => Object.keys(item)[0] === paletteName);
  return palette ? palette[paletteName] : {};
};
