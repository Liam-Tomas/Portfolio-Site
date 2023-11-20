// breakpoints.js
import { generateMedia } from 'styled-media-query';

const customMedia = generateMedia({
  small: '450px',
  medium: '768px',
  large: '1024px',
  extraLarge: '1500px',
  ultra: '2000px'
});

export default customMedia;
