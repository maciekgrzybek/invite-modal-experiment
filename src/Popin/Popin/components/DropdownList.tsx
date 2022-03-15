import { Flex, List, ListItem, Text } from '@chakra-ui/react';

import type { EnhancedUser } from '../types';
import { UserItem } from './UserItem';

type Props = {
  users: EnhancedUser[];
  handleListItemClick: (user: EnhancedUser) => void;
};

export const DropdownList = ({ users, handleListItemClick }: Props) => {
  console.log(users.length, 'l');
  return (
    <Flex
      padding="1rem"
      position="absolute"
      left="0px"
      borderRadius="10px"
      top="calc(100% + 0.5rem)"
      bg="bgDark.200"
      w="100%"
    >
      {Boolean(users.length) ? (
        <List spacing={2} w="100%">
          {users.map((user) => {
            return (
              <ListItem
                key={user.id}
                onClick={() => handleListItemClick(user)}
                cursor="pointer"
                padding="0.7rem"
                borderRadius="6px"
                title="Select user"
                _hover={{
                  backgroundColor: 'bgDark.300',
                }}
              >
                <UserItem {...user} />
              </ListItem>
            );
          })}
        </List>
      ) : (
        <Text as="span" fontSize="11px">
          No matched matched members, sorry. <br />
          Try with a different phrase.
        </Text>
      )}
    </Flex>
  );
};
