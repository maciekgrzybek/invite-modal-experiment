import { Center, ListIcon } from '@chakra-ui/react';
import { FaEnvelope } from 'react-icons/fa';

import type { EnhancedUser } from '../types';

type Props = EnhancedUser;

export const UserItem = ({ email, firstName, lastName, matchType }: Props) => {
  const isEmailType = matchType === 'email';
  return (
    <>
      {isEmailType ? (
        <ListIcon as={FaEnvelope} />
      ) : (
        <Center bg="pink.400" w="26px" h="26px" borderRadius="9999px" as="span">
          {firstName[0].toUpperCase()}
        </Center>
      )}
      {isEmailType ? email : `${firstName} ${lastName}`}
    </>
  );
};
