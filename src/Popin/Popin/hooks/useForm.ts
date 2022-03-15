import { FormEvent, useState } from 'react';
import { useDebounce } from '../../../hooks/useDebouncedValue';
import { EnhancedUser } from '../types';
import { useSearchUsers } from './useSearchUsers';
import { useSelectUsers } from './useSelectUsers';

export const useForm = (onSubmit: (users: EnhancedUser[]) => void) => {
  const [inputValue, setInputValue] = useState('');
  const debouncedInputValue = useDebounce(inputValue);
  const { data } = useSearchUsers(debouncedInputValue);
  const {
    selectedUsers,
    addToSelectedUsers,
    removeFromSelectedUsers,
    clearSelectedUsers,
  } = useSelectUsers();

  const filteredUsers = data?.filter(
    (user) =>
      selectedUsers.find((_user) => _user.id === user.id)?.id !== user.id
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    clearSelectedUsers();
    setInputValue('');
    onSubmit(selectedUsers);
  };

  return {
    addToSelectedUsers,
    filteredUsers,
    handleSubmit,
    inputValue,
    removeFromSelectedUsers,
    selectedUsers,
    setInputValue,
  };
};
