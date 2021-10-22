import { useState, useEffect } from 'react';

const useKeyboardNavigation = (size: number) => {
  const [activeCursor, setActiveCursor] = useState<number>(-1);

  const handleKeyPress = (event: { key: string }) => {
    const { key } = event;

    if (key === 'ArrowDown' || key === 'Tab') {
      setActiveCursor(prev => (prev < size ? prev + 1 : 0));
    } else if (key === 'ArrowUp') {
      setActiveCursor(prev => (prev > 0 ? prev - 1 : size));
    }
  };

  // Reset when size changes
  useEffect(() => setActiveCursor(0), [size]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [size, activeCursor]);

  return [activeCursor];
};

export default useKeyboardNavigation;
