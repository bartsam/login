"use client";

import { PropsWithChildren, createContext, useContext, useState } from "react";

type LoginContextType = {
  email: string | null;
  setEmail: (status: string | null) => void;
};

const LoginContext = createContext<LoginContextType>({
  email: null,
  setEmail: () => {},
});

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [email, setEmail] = useState<string | null>(null);

  return (
    <LoginContext.Provider value={{ email, setEmail }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLoginContext = () => useContext(LoginContext);
