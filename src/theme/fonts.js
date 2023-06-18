import ralewayWoff from '@assets/fonts/raleway.woff';
import ralewayWoff2 from '@assets/fonts/raleway.woff2';

/** Font Face Definitions */
const FONT = `
    @font-face{
      font-family: 'raleway';
      src: url(${ralewayWoff2}) format('woff2'),
      url(${ralewayWoff}) format('woff');
    }
`;

export default FONT;
