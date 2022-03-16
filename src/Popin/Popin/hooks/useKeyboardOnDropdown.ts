import { createRef, RefObject, useEffect, useState } from 'react';
import { EnhancedUser } from '../types';

export const useKeyboardOnDropdown = (users: EnhancedUser[]) => {
  const [focusedUser, setFocusedUser] = useState<number | null>(null);
  const refs = users.reduce((acc, _, index) => {
    acc[index] = createRef<HTMLButtonElement>();
    return acc;
  }, {} as Record<string, RefObject<HTMLButtonElement>>);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        setFocusedUser((prev) => {
          if (prev === null || prev === users.length - 1) {
            return 0;
          } else {
            return prev + 1;
          }
        });
      }
      if (e.key === 'ArrowUp') {
        setFocusedUser((prev) => {
          if (prev === null) {
            return null;
          } else if (prev === 0) {
            return users.length - 1;
          } else {
            return prev - 1;
          }
        });
      }
    };

    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [refs, users.length]);

  useEffect(() => {
    if (focusedUser !== null) {
      refs[focusedUser]?.current?.focus();
    }
  }, [focusedUser, refs]);

  const handleSelecting = () => {
    setFocusedUser((prev) => {
      if (prev === null) {
        return null;
      } else if (prev === 0) {
        return 0;
      } else {
        return prev - 1;
      }
    });
  };

  return { refs, handleSelecting };
};
