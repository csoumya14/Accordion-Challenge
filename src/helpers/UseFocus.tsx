import React from 'react';

const useFocus = (isActive: boolean) => {
  const itemRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    isActive && itemRef && itemRef.current && itemRef.current.focus();
  }, [isActive]);

  return itemRef;
};

export default useFocus;
