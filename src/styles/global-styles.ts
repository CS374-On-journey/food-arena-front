import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 100;
    src: url('https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.woff') format('opentype');
  }
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 300;
    src: url('https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.woff') format('opentype');
  }
  @font-face {
   font-family: 'Noto Sans KR';
   font-style: normal;
   font-weight: 400;
   src: url('https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff') format('opentype');
  }
  @font-face {
     font-family: 'Noto Sans KR';
     font-style: normal;
     font-weight: 500;
     src: url('https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.woff') format('opentype');
  }
  @font-face {
   font-family: 'Noto Sans KR';
   font-style: normal;
   font-weight: 700;
   src: url('https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff') format('opentype');
  }
  @font-face {
   font-family: 'Noto Sans KR';
   font-style: normal;
   font-weight: 900;
   src: url('https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Black.woff') format('opentype');
  } 

 @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeOutDown {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(20px);
    }
  }

  .fadeInUp {
      animation-duration: 0.4s;
      animation-fill-mode: both;
      animation-name: fadeInUp;
  }

  * {
    outline: none !important;
    letter-spacing: -0.7px;
    font-family: 'Noto Sans KR', 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
  }

  img {
    user-select: none;
  }
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
`;
