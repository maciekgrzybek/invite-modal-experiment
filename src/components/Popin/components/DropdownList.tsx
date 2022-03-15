import { List, ListItem } from '@chakra-ui/react';

import type { EnhancedUser } from '../types';
import { UserItem } from './UserItem';

type Props = {
  users: EnhancedUser[];
  handleListItemClick: (user: EnhancedUser) => void;
};

export const DropdownList = ({ users, handleListItemClick }: Props) => {
  return (
    <List spacing={3}>
      {users.map((user) => {
        return (
          <ListItem key={user.id} onClick={() => handleListItemClick(user)}>
            <UserItem {...user} />
          </ListItem>
        );
      })}
    </List>
  );
};
