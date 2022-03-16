import { Button, Flex, List, ListItem, Text } from '@chakra-ui/react';
import { useKeyboardOnDropdown } from '../hooks/useKeyboardOnDropdown';

import type { EnhancedUser } from '../types';
import { UserItem } from './UserItem';

type Props = {
  users: EnhancedUser[];
  handleListItemClick: (user: EnhancedUser) => void;
};

export const DropdownList = ({ users, handleListItemClick }: Props) => {
  const { refs, handleSelecting } = useKeyboardOnDropdown(users);
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
          {users.map((user, index) => {
            return (
              <ListItem key={user.id} title="Select user">
                <Button
                  ref={refs[index]}
                  variant="unstyled"
                  cursor="pointer"
                  padding="0.7rem"
                  borderRadius="6px"
                  w="100%"
                  onClick={() => {
                    handleSelecting();
                    handleListItemClick(user);
                  }}
                  _focus={{
                    backgroundColor: 'bgDark.300',
                  }}
                  _hover={{
                    backgroundColor: 'bgDark.300',
                  }}
                >
                  <UserItem {...user} />
                </Button>
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
