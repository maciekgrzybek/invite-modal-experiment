import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    heading: 'Lato, sans-serif',
    body: 'Lato, sans-serif',
  },
  colors: {
    main: {
      100: '#2C54EA',
      200: '#173ecd',
    },
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
          bg: 'main.100',
          color: 'white',
          fontSize: '0.825rem',
          padding: '0.625rem 1.375rem',
          fontWeight: 700,
          borderRadius: '10px',
          transition: '200ms',
          _hover: {
            backgroundColor: 'main.200',
          },
        },
      },
    },
    Input: {
      borderRadius: '10px',
    },
  },
});
