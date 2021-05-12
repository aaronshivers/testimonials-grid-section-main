// Note for text colors:
// 1. "Verified Graduate" has the same color as the person's name with 50% opacity
// 2. Review paragraphs inside the quotations have the same color as well, but are at 70% opacity

const styleSettings = {
  colors: {
    moderateViolet: 'hsl(263, 55%, 52%)',
    veryDarkGrayishBlue: 'hsl(217, 19%, 35%)',
    veryDarkBlackishBlue: 'hsl(219, 29%, 14%)',
    white: 'hsl(0, 0%, 100%)',
    lightGray: 'hsl(0, 0%, 81%)',
    lightGrayishBlue: 'hsl(210, 46%, 95%)',
  },
  sizes: {
    small: '1.2rem',
    medium: '1.3rem',
    large: '2rem',
    extraLarge: '2.8rem',
  },
  weights: {
    medium: 500,
    semiBold: 600,
  },
  breakPoints: {
    desktop: '1440px',
    mobile: '375px',
  },
};

export default styleSettings;
