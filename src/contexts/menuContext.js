import { createContext, useState } from 'react';

const MenuContext = createContext({ bool: true, func: function () {} });

export const MenuProvider = ({ children }) => {
  const [open, setOpen] = useState(true);
  const updateOpen = () => setOpen(!open);
  return (
    <MenuContext.Provider value={{ bool: open, func: updateOpen }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
