import { Center, Flex } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';

import type { EnhancedUser } from '../types';

type Props = EnhancedUser & {
  size?: 'small' | 'large';
};

export const UserItem = ({
  email,
  firstName,
  lastName,
  matchType,
  size = 'large',
}: Props) => {
  const isEmailType = matchType === 'email';
  return (
    <Flex
      alignItems="center"
      fontSize={size === 'small' ? '0.6875rem' : '0.8rem'}
    >
      {isEmailType ? (
        <EmailIcon
          color="secondary"
          marginRight="0.625rem"
          w="1.4em"
          h="1.4em"
        />
      ) : (
        <Center
          bg="secondary"
          w="1.55em"
          h="1.55em"
          as="span"
          borderRadius="9999px"
          marginRight="0.625rem"
          color="white"
        >
          {firstName[0].toUpperCase()}
        </Center>
      )}

<Flex alignItems="center" as="span">
        {isEmailType ? email : `${firstName} ${lastName}`}
      </Flex>
    </Flex>
  );
};
