import {
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

import { useDebounce } from '../../hooks/useDebouncedValue';
import { DropdownList } from './components/DropdownList';
import { Form } from './components/Form';
import { useSearchUsers } from './hooks/useSearchUsers';
import { EnhancedUser } from './types';

type Props = {
  isOpen: boolean;
  onClose: VoidFunction;
};

export const Popin = ({ isOpen, onClose }: Props) => {
  const [inputValue, setInputValue] = useState('');
  const debouncedInputValue = useDebounce(inputValue);
  const { data } = useSearchUsers(debouncedInputValue);
  const [selectedUsers, setSelectedUsers] = useState<EnhancedUser[]>([]);

  const addToSelectedUsers = (user: EnhancedUser) =>
    setSelectedUsers((prevUsers) => [...prevUsers, user]);

  const removeFromSelectedUsers = (id: string) =>
    setSelectedUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));

  const filteredUsers = data?.filter(
    (user) =>
      selectedUsers.find((_user) => _user.id === user.id)?.id !== user.id
  );

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
          <Form
            inputValue={inputValue}
            handleOnChange={setInputValue}
            selectedUsers={selectedUsers}
            handleRemove={removeFromSelectedUsers}
          />
          {filteredUsers && (
            <DropdownList
              users={filteredUsers}
              handleListItemClick={addToSelectedUsers}
            />
          )}
        </ModalBody>

        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};
