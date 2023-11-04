// WalletContext.js
import { createContext, useState } from 'react';

export const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [signed, setSigned] = useState(false);
  // ... other states and functions
console.log("signed ==", signed);
  return (
    <WalletContext.Provider value={{ signed, setSigned, /* ... other states and functions */ }}>
      {children}
    </WalletContext.Provider>
  );
};

