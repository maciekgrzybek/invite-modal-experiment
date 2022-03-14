import { Center, ChakraProvider, theme, useDisclosure } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Popin } from './components/Popin';

export const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure({ id: 'popin-modal' });
  return (
    <ChakraProvider theme={theme}>
      <Center h="100vh">
        <Button onClick={onOpen}>Invite teammates</Button>
        <Popin isOpen={isOpen} onClose={onClose} />
      </Center>
    </ChakraProvider>
  );
};
