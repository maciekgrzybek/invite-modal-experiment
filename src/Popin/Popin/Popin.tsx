import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { useRef } from 'react';

import { Form } from './components/Form';
import { EnhancedUser } from './types';

type Props = {
  isOpen: boolean;
  onClose: VoidFunction;
  onSend: (users: EnhancedUser[]) => void;
};

export const Popin = ({ isOpen, onClose, onSend }: Props) => {
  const initialRef = useRef<HTMLInputElement>(null);
  const onSubmit = (users: EnhancedUser[]) => {
    onSend(users);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
      initialFocusRef={initialRef}
    >
      <ModalOverlay />
      <ModalContent
        bg="bgDark.100"
        color="white"
        padding={['2rem', '4rem']}
        top="10vh"
      >
        <ModalHeader
          textAlign="center"
          color="textGrey.100"
          fontSize="2xl"
          fontWeight={400}
          marginBottom="2rem"
          padding="0"
        >
          Invite members
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody padding="0" position="relative">
          <Text fontSize="0.9375rem" color="textGrey.100" paddingBottom="1rem">
            Email Invite
          </Text>
          <Text
            fontSize="0.9375rem"
            color="textGrey.200"
            paddingBottom="1.5rem"
          >
            Send members an email invitation to join this workspace
          </Text>
          <Form onSubmit={onSubmit} initialRef={initialRef} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
