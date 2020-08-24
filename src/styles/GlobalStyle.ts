import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  /* open-sans-300 - latin */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 300;
    src: url('./fonts/open-sans-v17-latin-300.eot'); /* IE9 Compat Modes */
    src: local('Open Sans Light'), local('OpenSans-Light'),
      url('./fonts/open-sans-v17-latin-300.eot?#iefix') format('embedded-opentype'),
      /* IE6-IE8 */ url('./fonts/open-sans-v17-latin-300.woff2') format('woff2'),
      /* Super Modern Browsers */ url('./fonts/open-sans-v17-latin-300.woff') format('woff'),
      /* Modern Browsers */ url('./fonts/open-sans-v17-latin-300.ttf') format('truetype'),
      /* Safari, Android, iOS */ url('./fonts/open-sans-v17-latin-300.svg#OpenSans') format('svg'); /* Legacy iOS */
  }
  /* open-sans-300italic - latin */
  @font-face {
    font-family: 'Open Sans';
    font-style: italic;
    font-weight: 300;
    src: url('./fonts/open-sans-v17-latin-300italic.eot'); /* IE9 Compat Modes */
    src: local('Open Sans Light Italic'), local('OpenSans-LightItalic'),
      url('./fonts/open-sans-v17-latin-300italic.eot?#iefix') format('embedded-opentype'),
      /* IE6-IE8 */ url('./fonts/open-sans-v17-latin-300italic.woff2') format('woff2'),
      /* Super Modern Browsers */ url('./fonts/open-sans-v17-latin-300italic.woff') format('woff'),
      /* Modern Browsers */ url('./fonts/open-sans-v17-latin-300italic.ttf') format('truetype'),
      /* Safari, Android, iOS */ url('./fonts/open-sans-v17-latin-300italic.svg#OpenSans')
        format('svg'); /* Legacy iOS */
  }
  /* open-sans-regular - latin */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: url('./fonts/open-sans-v17-latin-regular.eot'); /* IE9 Compat Modes */
    src: local('Open Sans Regular'), local('OpenSans-Regular'),
      url('./fonts/open-sans-v17-latin-regular.eot?#iefix') format('embedded-opentype'),
      /* IE6-IE8 */ url('./fonts/open-sans-v17-latin-regular.woff2') format('woff2'),
      /* Super Modern Browsers */ url('./fonts/open-sans-v17-latin-regular.woff') format('woff'),
      /* Modern Browsers */ url('./fonts/open-sans-v17-latin-regular.ttf') format('truetype'),
      /* Safari, Android, iOS */ url('./fonts/open-sans-v17-latin-regular.svg#OpenSans') format('svg'); /* Legacy iOS */
  }
  /* open-sans-italic - latin */
  @font-face {
    font-family: 'Open Sans';
    font-style: italic;
    font-weight: 400;
    src: url('./fonts/open-sans-v17-latin-italic.eot'); /* IE9 Compat Modes */
    src: local('Open Sans Italic'), local('OpenSans-Italic'),
      url('./fonts/open-sans-v17-latin-italic.eot?#iefix') format('embedded-opentype'),
      /* IE6-IE8 */ url('./fonts/open-sans-v17-latin-italic.woff2') format('woff2'),
      /* Super Modern Browsers */ url('./fonts/open-sans-v17-latin-italic.woff') format('woff'),
      /* Modern Browsers */ url('./fonts/open-sans-v17-latin-italic.ttf') format('truetype'),
      /* Safari, Android, iOS */ url('./fonts/open-sans-v17-latin-italic.svg#OpenSans') format('svg'); /* Legacy iOS */
  }
  /* open-sans-600 - latin */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    src: url('./fonts/open-sans-v17-latin-600.eot'); /* IE9 Compat Modes */
    src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'),
      url('./fonts/open-sans-v17-latin-600.eot?#iefix') format('embedded-opentype'),
      /* IE6-IE8 */ url('./fonts/open-sans-v17-latin-600.woff2') format('woff2'),
      /* Super Modern Browsers */ url('./fonts/open-sans-v17-latin-600.woff') format('woff'),
      /* Modern Browsers */ url('./fonts/open-sans-v17-latin-600.ttf') format('truetype'),
      /* Safari, Android, iOS */ url('./fonts/open-sans-v17-latin-600.svg#OpenSans') format('svg'); /* Legacy iOS */
  }
  /* open-sans-600italic - latin */
  @font-face {
    font-family: 'Open Sans';
    font-style: italic;
    font-weight: 600;
    src: url('./fonts/open-sans-v17-latin-600italic.eot'); /* IE9 Compat Modes */
    src: local('Open Sans SemiBold Italic'), local('OpenSans-SemiBoldItalic'),
      url('./fonts/open-sans-v17-latin-600italic.eot?#iefix') format('embedded-opentype'),
      /* IE6-IE8 */ url('./fonts/open-sans-v17-latin-600italic.woff2') format('woff2'),
      /* Super Modern Browsers */ url('./fonts/open-sans-v17-latin-600italic.woff') format('woff'),
      /* Modern Browsers */ url('./fonts/open-sans-v17-latin-600italic.ttf') format('truetype'),
      /* Safari, Android, iOS */ url('./fonts/open-sans-v17-latin-600italic.svg#OpenSans')
        format('svg'); /* Legacy iOS */
  }
  /* open-sans-700 - latin */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    src: url('./fonts/open-sans-v17-latin-700.eot'); /* IE9 Compat Modes */
    src: local('Open Sans Bold'), local('OpenSans-Bold'),
      url('./fonts/open-sans-v17-latin-700.eot?#iefix') format('embedded-opentype'),
      /* IE6-IE8 */ url('./fonts/open-sans-v17-latin-700.woff2') format('woff2'),
      /* Super Modern Browsers */ url('./fonts/open-sans-v17-latin-700.woff') format('woff'),
      /* Modern Browsers */ url('./fonts/open-sans-v17-latin-700.ttf') format('truetype'),
      /* Safari, Android, iOS */ url('./fonts/open-sans-v17-latin-700.svg#OpenSans') format('svg'); /* Legacy iOS */
  }
  /* open-sans-700italic - latin */
  @font-face {
    font-family: 'Open Sans';
    font-style: italic;
    font-weight: 700;
    src: url('./fonts/open-sans-v17-latin-700italic.eot'); /* IE9 Compat Modes */
    src: local('Open Sans Bold Italic'), local('OpenSans-BoldItalic'),
      url('./fonts/open-sans-v17-latin-700italic.eot?#iefix') format('embedded-opentype'),
      /* IE6-IE8 */ url('./fonts/open-sans-v17-latin-700italic.woff2') format('woff2'),
      /* Super Modern Browsers */ url('./fonts/open-sans-v17-latin-700italic.woff') format('woff'),
      /* Modern Browsers */ url('./fonts/open-sans-v17-latin-700italic.ttf') format('truetype'),
      /* Safari, Android, iOS */ url('./fonts/open-sans-v17-latin-700italic.svg#OpenSans')
        format('svg'); /* Legacy iOS */
  }
  /* open-sans-800 - latin */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 800;
    src: url('./fonts/open-sans-v17-latin-800.eot'); /* IE9 Compat Modes */
    src: local('Open Sans ExtraBold'), local('OpenSans-ExtraBold'),
      url('./fonts/open-sans-v17-latin-800.eot?#iefix') format('embedded-opentype'),
      /* IE6-IE8 */ url('./fonts/open-sans-v17-latin-800.woff2') format('woff2'),
      /* Super Modern Browsers */ url('./fonts/open-sans-v17-latin-800.woff') format('woff'),
      /* Modern Browsers */ url('./fonts/open-sans-v17-latin-800.ttf') format('truetype'),
      /* Safari, Android, iOS */ url('./fonts/open-sans-v17-latin-800.svg#OpenSans') format('svg'); /* Legacy iOS */
  }
  /* open-sans-800italic - latin */
  @font-face {
    font-family: 'Open Sans';
    font-style: italic;
    font-weight: 800;
    src: url('./fonts/open-sans-v17-latin-800italic.eot'); /* IE9 Compat Modes */
    src: local('Open Sans ExtraBold Italic'), local('OpenSans-ExtraBoldItalic'),
      url('./fonts/open-sans-v17-latin-800italic.eot?#iefix') format('embedded-opentype'),
      /* IE6-IE8 */ url('./fonts/open-sans-v17-latin-800italic.woff2') format('woff2'),
      /* Super Modern Browsers */ url('./fonts/open-sans-v17-latin-800italic.woff') format('woff'),
      /* Modern Browsers */ url('./fonts/open-sans-v17-latin-800italic.ttf') format('truetype'),
      /* Safari, Android, iOS */ url('./fonts/open-sans-v17-latin-800italic.svg#OpenSans')
        format('svg'); /* Legacy iOS */
  }

  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
  }

  li {
    list-style-type: none;
    list-style: none;
  }

  input, button { 
    border: none;
    background: none;
  } 

  a{
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
    font-family: inherit;
  }

  #root {
    height: 100%;
    width: 100%;
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 300;
  }
`;
