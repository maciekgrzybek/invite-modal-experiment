import { useQuery } from 'react-query';

import { EnhancedUser } from '../types';
import { User } from '../../../mocks/fakeApi';

export const useSearchUsers = (searchQuery: string) =>
  useQuery<User[], unknown, EnhancedUser[]>(
    ['repoData', searchQuery],
    () => fetch(`/search-users?q=${searchQuery}`).then((res) => res.json()),
    {
      enabled: Boolean(searchQuery),
      select: (users) =>
        users.map((user) => ({
          ...user,
          matchType: searchQuery.includes('@') ? 'email' : 'name',
        })),
    }
  );
