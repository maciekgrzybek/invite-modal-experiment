import { useState } from 'react';
import { EnhancedUser } from '../types';

export const useSelectUsers = () => {
  const [selectedUsers, setSelectedUsers] = useState<EnhancedUser[]>([]);

  const addToSelectedUsers = (user: EnhancedUser) =>
    setSelectedUsers((prevUsers) => [...prevUsers, user]);

  const removeFromSelectedUsers = (id: string) =>
    setSelectedUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));

  const clearSelectedUsers = () => setSelectedUsers([]);

  return { selectedUsers, removeFromSelectedUsers, addToSelectedUsers, clearSelectedUsers };
};
