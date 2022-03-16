import {
  Box,
  Button,
  Flex,
  Grid,
  Input,
  Spinner,
  useOutsideClick,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { RefObject, useRef, useState } from 'react';

import { EnhancedUser } from '../types';
import { DropdownList } from './DropdownList';
import { UserItem } from './UserItem';
import { useForm } from '../hooks/useForm';

type Props = {
  onSubmit: (users: EnhancedUser[]) => void;
  initialRef: RefObject<HTMLInputElement>;
};

export const Form = ({ onSubmit, initialRef }: Props) => {
  const areaRef = useRef<HTMLDivElement>(null);
  const [shouldShowList, setShouldShowList] = useState(true);
  useOutsideClick({ ref: areaRef, handler: () => setShouldShowList(false) });

  const {
    addToSelectedUsers,
    error,
    filteredUsers,
    handleSubmit,
    inputValue,
    isFetching,
    isSuccess,
    removeFromSelectedUsers,
    selectedUsers,
    setInputValue,
  } = useForm(onSubmit);

  console.log({ isFetching });

  return (
    <form onSubmit={handleSubmit}>
      <Grid templateColumns="auto min-content" gap="1rem" alignItems="center">
        <Flex
          alignItems="center"
          bg="bgDark.200"
          borderColor="gray.400"
          borderRadius="10px"
          flexWrap="wrap"
          gap="0.6rem"
          h="100%"
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

              <Flex alignItems="center" as="span" title="Remove user">
                <CloseIcon
                  w="9px"
                  marginLeft="0.625rem"
                  cursor="pointer"
                  onClick={() => removeFromSelectedUsers(user.id)}
                />
              </Flex>
            </Flex>
          ))}

          <Flex
            position="relative"
            w="100%"
            flex="1"
            alignItems="center"
            paddingRight="0.5rem"
          >
            <Input
              borderRadius={10}
              type="text"
              value={inputValue}
              variant="outline"
              bg="bgDark.200"
              onFocus={() => setShouldShowList(true)}
              flex={1}
              h="auto"
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
              minWidth="100px"
              fontSize="0.85rem"
              ref={initialRef}
            />
            {isFetching && <Spinner color="white" size="sm" />}
          </Flex>

          {filteredUsers && isSuccess && shouldShowList && (
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
        {error && (
          <Box color="red.500" fontSize="sm" role="alert" paddingLeft="1rem">
            Oops... something went wrong. Please try again
          </Box>
        )}
      </Grid>
    </form>
  );
};
