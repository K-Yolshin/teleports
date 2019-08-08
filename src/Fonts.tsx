import { createGlobalStyle } from 'styled-components';

import museoSansCyrl100 from '@/assets/museo-sans-cyrl-100.ttf';
import museoSansCyrl300 from '@/assets/museo-sans-cyrl-300.ttf';
import museoSansCyrl500 from '@/assets/museo-sans-cyrl-500.ttf';
import museoSansCyrl700 from '@/assets/museo-sans-cyrl-700.ttf';
import museoSansCyrl900 from '@/assets/museo-sans-cyrl-900.ttf';

import Font from '@/helpers/Font';

/**
 * Components which contains a declaration of fonts.
 */
const Fonts = createGlobalStyle`
  @font-face {
    font-family: ${Font.default};
    font-weight: 100;
    src: url(${museoSansCyrl100}) format('truetype');
  }

  @font-face {
    font-family: ${Font.default};
    font-weight: 300;
    src: url(${museoSansCyrl300}) format('truetype');
  }

  @font-face {
    font-family: ${Font.default};
    font-weight: 400;
    src: url(${museoSansCyrl300}) format('truetype');
  }

  @font-face {
    font-family: ${Font.default};
    font-weight: 500;
    src: url(${museoSansCyrl500}) format('truetype');
  }

  @font-face {
    font-family: ${Font.default};
    font-weight: 500;
    src: url(${museoSansCyrl500}) format('truetype');
  }

  @font-face {
    font-family: ${Font.default};
    font-weight: 700;
    src: url(${museoSansCyrl700}) format('truetype');
  }

  @font-face {
    font-family: ${Font.default};
    font-weight: 900;
    src: url(${museoSansCyrl900}) format('truetype');
  }
`;

export default Fonts;
