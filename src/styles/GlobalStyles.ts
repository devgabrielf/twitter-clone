import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #15202B;
    --secondary: #192734;
    --search: #253341;
    --white: #FFF;
    --gray-light: #EFF3F4;
    --gray: #8899A6;
    --outline: #38444D;
    --retweet: #00C06B;
    --like: #E8265E;
    --twitter: #33A1F2;
    --twitter-hover: rgba(239, 243, 244, 0.1);
    --twitter-dark-hover: #2C8ED6;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    color: var(--white);

    transition: 0.2s;

    -webkit-tap-highlight-color: transparent;
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    height: 100%;
    width: 100%;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: TwitterChirp, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  }

  html {
    background: var(--primary);
  }

  @font-face {
    font-family: TwitterChirpExtendedHeavy;
    src: url(https://abs.twimg.com/fonts/v1/chirp-extended-heavy-web.woff2) format('woff2');
    src: url(https://abs.twimg.com/fonts/v1/chirp-extended-heavy-web.woff) format('woff');
    font-weight: 800;
    font-style: 'normal';
    font-display: 'swap';
  }

  @font-face {
    font-family: TwitterChirp;
    src: url(https://abs.twimg.com/fonts/v2/chirp-regular-web.woff2) format('woff2');
    src: url(https://abs.twimg.com/fonts/v2/chirp-regular-web.woff) format('woff');
    font-weight: 400;
    font-style: 'normal';
    font-display: 'swap';
  }

  @font-face {
    font-family: TwitterChirp;
    src: url(https://abs.twimg.com/fonts/v2/chirp-medium-web.woff2) format('woff2');
    src: url(https://abs.twimg.com/fonts/v2/chirp-medium-web.woff) format('woff');
    font-weight: 500;
    font-style: 'normal';
    font-display: 'swap';
  }

  @font-face {
    font-family: TwitterChirp;
    src: url(https://abs.twimg.com/fonts/v2/chirp-bold-web.woff2) format('woff2');
    src: url(https://abs.twimg.com/fonts/v2/chirp-bold-web.woff) format('woff');
    font-weight: 700;
    font-style: 'normal';
    font-display: 'swap';
  }

  @font-face {
    font-family: TwitterChirp;
    src: url(https://abs.twimg.com/fonts/v2/chirp-heavy-web.woff2) format('woff2');
    src: url(https://abs.twimg.com/fonts/v2/chirp-heavy-web.woff) format('woff');
    font-weight: 800;
    font-style: 'normal';
    font-display: 'swap';
  }
`;
