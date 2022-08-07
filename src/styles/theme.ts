import { extendTheme } from '@chakra-ui/react';

export const Theme = extendTheme({
  colors: {
    gray: {
      yellow_medium: '#FFBA08',
      gray_dark: '#47585B',
      gray_ligth: '#999999',
      black_dark: '#000000',
    },
  },

  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },

  styles: {
    global: {
      body: {
        color: 'gray_dark',
      },
    },
  },
  swiper: {
    width: '100%',
    height: '100%',
  },
  breakpoints: {
    sm: '20em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
    '3xl': '129em',
  },
});
