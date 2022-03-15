import {
  Center,
  ChakraProvider,
  extendTheme,
  useDisclosure,
} from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Popin } from './components/Popin';

const queryClient = new QueryClient();

const theme = extendTheme({
  fontSizes: {
    lg: '18px',
  },
  colors: {
    gray: {
      100: '#fafafa',
      200: '#f7f7f7',
    },
  },
});

export const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure({ id: 'popin-modal' });
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Center h="100vh">
          <Button onClick={onOpen}>Invite teammates</Button>
          <Popin isOpen={isOpen} onClose={onClose} />
        </Center>
      </QueryClientProvider>
    </ChakraProvider>
  );
};
