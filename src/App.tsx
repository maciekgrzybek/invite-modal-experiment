import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';

import { Center, ChakraProvider, useDisclosure, Text } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Popin } from './Popin/Popin';
import { theme } from './styles/theme';
import { EnhancedUser } from './Popin/Popin/types';
import { useState } from 'react';

const queryClient = new QueryClient();

export const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [sentUsers, setSentUsers] = useState<EnhancedUser[]>([]);

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Center
          h="100vh"
          bgGradient="linear(to-b, gray.700, gray.600)"
          flexDirection="column"
        >
          <Button onClick={onOpen} variant="main">
            Invite members
          </Button>
          {sentUsers.map((user) => (
            <Text color="white">
              Name: {user.firstName} {user.lastName}
            </Text>
          ))}
          <Popin isOpen={isOpen} onClose={onClose} onSend={setSentUsers} />
        </Center>
      </QueryClientProvider>
    </ChakraProvider>
  );
};
