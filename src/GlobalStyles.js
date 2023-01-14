import { createGlobalStyle } from "styled-components";

export const theme = {
  black: "#000000",
  white: "#FFFFFF",
  darkGrey: "#313131",
  secondDarkGrey: "#757575",
  turquoise: "#5DC4C5",
  grey: "#707070",
  darkBlue: "#4372AC",
  navy: "#4D72A7",
  cyan: "#5DA9DB",
  lightBlue: "#60B3FB",
  lightGrey: "#E5E5E5",
  lightBlack: "#3F414B",
  charcoal: "#4D4D4D",
  lightCharcoal: "#848484",
  spectrumDarkGrey: "#2C2C2C",
  spectrumLightGrey: "#707070",
  spectrumLightBlue: "#CDEDEF",
  spectrumBackgroundGrey: "#F8F8F8",
  spectrumFeatureGrey: "#E8E7E5",
  spectrumGrey: "#EAEAEA",
  spectrumTitleGrey: "#3F414B",
  legacyFooterBackground: "#1F1F1F",

  // Reponsive Sizes based on https://www.npmjs.com/package/react-responsive-simple
  mobile: "768px",
  tablet: "992px",
  desktop: "1200px",
  largeDesktop: "1440px"
};

export const GlobalStyles = createGlobalStyle`
  /*font-family: 'Open Sans', sans-serif*/
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
  
  /*font-family: 'Merriweather', serif*/
  @import url('https://fonts.googleapis.com/css?family=Merriweather&display=swap');
  
  /*font-family: 'Baumans', serif */
  @import url('https://fonts.googleapis.com/css2?family=Baumans&display=swap');
  
  /*font-family: 'Lato', sans-serif*/
  @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
  /*font-family: 'Bitter', serif; */
  @import url('https://fonts.googleapis.com/css?family=Bitter&display=swap');
  /* font-family: 'Playfair Display', serif; */
  @import url("https://fonts.googleapis.com/css?family=Playfair+Display&display=swap");
  /* font-family: 'Public Sans', sans-serif; */
  @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;700&display=swap');
  /* font-family: 'Lexend', sans-serif; */
  @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&display=swap');
  @font-face {
    font-family: 'KannadaMN';
    src: url('https://spectator-fonts.s3.amazonaws.com/KannadaMN.ttf') format('truetype');
  }
  @font-face {
      font-family: 'Neue Haas Unica W06 Regular'; 
      src: url('https://spectator-fonts.s3.amazonaws.com/Neue+Haas+Unica+W06+Regular.ttf') format('truetype');
  }
  @font-face {
      font-family: 'Neue Haas Unica W06 Heavy'; 
      src: url('https://spectator-fonts.s3.amazonaws.com/Neue+Haas+Unica+W06+Heavy.ttf') format('truetype');
      font-weight: heavy;
  }
  @font-face {
    font-family: 'PlayfairDisplay-Black'; 
    src: url('https://spectator-fonts.s3.amazonaws.com/PlayfairDisplay-Black.otf') format('truetype');
}
  @font-face {
      font-family: 'Neue Haas Unica W06 Light'; 
      src: url('https://spectator-fonts.s3.amazonaws.com/Neue+Haas+Unica+W06+Light.ttf') format('truetype');
      font-weight: light;
  }
  @font-face {
      font-family: 'PlayfairDisplay-Regular'; 
      src: url('https://spectator-fonts.s3.amazonaws.com/PlayfairDisplay-Regular.ttf') format('truetype');
}
  @font-face {
      font-family: 'PlayfairDisplay-Bold'; 
      src: url('https://spectator-fonts.s3.amazonaws.com/PlayfairDisplay-Bold.ttf') format('truetype');
      font-weight: bold;
}
  @font-face {
      font-family: 'PlayfairDisplay-BoldItalic'; 
      src: url('https://spectator-fonts.s3.amazonaws.com/PlayfairDisplay-BoldItalic.ttf') format('truetype');
}
`;