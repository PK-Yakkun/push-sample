import React, { createContext, useContext, useState, useEffect } from "react";

interface TokenContextType {
  token: string | null;
  setToken: (token: string | null) => void;
}

const TokenContext = createContext<TokenContextType>({
  token: null,
  setToken: () => {},
});

export const useToken = () => useContext(TokenContext);

export const TokenProvider = (children: React.ReactNode) => {
  const [token, setToken] = useState<string | null>(null);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};
