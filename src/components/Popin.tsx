import {
  Button,
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';

type Props = {
  isOpen: boolean;
  onClose: VoidFunction;
};

export const Popin = ({ isOpen, onClose }: Props) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Invite members</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontSize="md">Email Invite</Text>
          <Text fontSize="md">
            Send members an email invitation to join this workspace
          </Text>
          <FormControl>
            <Input
              id="email"
              type="email"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Button>Invite</Button>
          </FormControl>
        </ModalBody>

        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};
