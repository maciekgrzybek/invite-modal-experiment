import { Button, FormControl, Input, List, ListItem } from '@chakra-ui/react';
import { EnhancedUser } from '../types';
import { UserItem } from './UserItem';

type Props = {
  inputValue: string;
  handleOnChange: (value: string) => void;
  handleRemove: (value: string) => void;
  selectedUsers: EnhancedUser[];
};

export const Form = ({
  inputValue,
  handleOnChange,
  selectedUsers,
  handleRemove,
}: Props) => {
  return (
    <FormControl>
      <List>
        {selectedUsers.map((user) => (
          <ListItem key={user.id} onClick={() => handleRemove(user.id)}>
            <UserItem {...user} />
          </ListItem>
        ))}
      </List>
      <Input
        id="email"
        type="email"
        value={inputValue}
        onChange={(e) => handleOnChange(e.target.value)}
      />
      <Button>Invite</Button>
    </FormControl>
  );
};
