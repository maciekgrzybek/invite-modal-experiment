export type User = {
  firstName: string;
  lastName: string;
  email: string;
  id: string;
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const ErrorRegex = /error/gi;

const Users = [
  {
    firstName: 'Tara',
    lastName: 'Halvik',
    id: '100',
    email: 'tara@claap.io',
  },
  {
    firstName: 'Tristan',
    lastName: 'Agosta',
    id: '101',
    email: 'tristan@claap.com',
  },
  {
    firstName: 'Tony',
    lastName: 'Soprano',
    id: '102',
    email: 'jersey@claap.com',
  },
];

const normalize = (input: string): string => {
  return input.trim().toLowerCase();
};

export const searchUser = async (input: string): Promise<User[]> => {
  const normalized = normalize(input);

  await delay(200 + Math.random() * 200);

  if (normalized.match(ErrorRegex)) {
    throw new Error('Backend failed for some reasons.');
  }

  if (!normalized) {
    return [];
  }

  return Users.filter(({ firstName, lastName, email }) => {
    if (email === normalized) {
      return true;
    }

    if (normalize(firstName).startsWith(normalized)) {
      return true;
    }

    if (normalize(lastName).startsWith(normalized)) {
      return true;
    }

    return false;
  });
};
