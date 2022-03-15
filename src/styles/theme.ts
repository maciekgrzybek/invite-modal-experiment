import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    heading: 'Lato, sans-serif',
    body: 'Lato, sans-serif',
  },
  colors: {
    main: '#2C54EA',
    secondary: '#EE748F',
    bgDark: {
      100: '#272D45',
      200: '#202437',
      300: '#181a25',
    },
    textGrey: {
      100: '#DBE1E6',
      200: '#8C9DB5',
    },
    gray: {
      400: '#383C56',
    },
  },
  components: {
    Button: {
      variants: {
        main: {
          bg: 'main',
          color: 'white',
          fontSize: '0.825rem',
          padding: '0.625rem 1.375rem',
          fontWeight: 700,
          borderRadius: '10px',
        },
      },
    },
    Input: {
      borderRadius: '10px',
    },
  },
});
