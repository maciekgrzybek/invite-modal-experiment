import { Button, Flex, Grid, Input, useOutsideClick } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { useRef, useState } from 'react';

import { EnhancedUser } from '../types';
import { DropdownList } from './DropdownList';
import { UserItem } from './UserItem';
import { useForm } from '../hooks/useForm';

type Props = {
  onSubmit: (users: EnhancedUser[]) => void;
};

export const Form = ({ onSubmit }: Props) => {
  const areaRef = useRef<HTMLDivElement>(null);
  const [shouldShowList, setShouldShowList] = useState(true);
  useOutsideClick({ ref: areaRef, handler: () => setShouldShowList(false) });

  const {
    filteredUsers,
    addToSelectedUsers,
    handleSubmit,
    inputValue,
    removeFromSelectedUsers,
    selectedUsers,
    setInputValue,
  } = useForm(onSubmit);

  return (
    <form onSubmit={handleSubmit}>
      <Grid templateColumns="auto min-content" gap="1rem" alignItems="center">
        <Flex
          alignItems="center"
          bg="bgDark.200"
          borderColor="gray.400"
          borderRadius="10px"
          flexWrap="wrap"
          gap="0.5rem"
          padding={selectedUsers.length ? '0.4rem' : 0}
          position="relative"
          ref={areaRef}
        >
          {selectedUsers.map((user) => (
            <Flex
              key={user.id}
              borderRadius="6px"
              alignItems="center"
              borderColor="secondary"
              borderWidth="1px"
              borderStyle="solid"
              padding="0.375rem 0.6rem"
              color="secondary"
            >
              <UserItem {...user} size="small" />
              <div title="Remove user">
                <CloseIcon
                  w="10px"
                  marginLeft="0.625rem"
                  cursor="pointer"
                  onClick={() => removeFromSelectedUsers(user.id)}
                />
              </div>
            </Flex>
          ))}
          <Input
            borderRadius={10}
            type="text"
            value={inputValue}
            variant="outline"
            bg="bgDark.200"
            onFocus={() => setShouldShowList(true)}
            flex={1}
            borderColor="transparent"
            focusBorderColor="transparent"
            _hover={{ borderColor: 'transparent' }}
            placeholder="Search names or emails..."
            _placeholder={{
              opacity: 0.3,
              color: 'white',
              fontSize: '0.825rem',
            }}
            onChange={(e) => setInputValue(e.target.value)}
            minWidth="150px"
          />
          {filteredUsers && filteredUsers?.length > 0 && shouldShowList && (
            <DropdownList
              users={filteredUsers}
              handleListItemClick={addToSelectedUsers}
            />
          )}
        </Flex>
        <Button
          variant="main"
          type="submit"
          isDisabled={!selectedUsers?.length}
        >
          Invite
        </Button>
      </Grid>
    </form>
  );
};
