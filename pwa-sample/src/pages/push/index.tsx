// components/Home.tsx
import React, { useEffect } from "react";
import { fetchToken } from "../../api/firebase";
import { useToken } from "../../hooks/useToken";

const Home: React.FC = () => {
  const { setToken } = useToken();

  useEffect(() => {
    fetchToken(setToken);
    console.log(setToken);
  }, []);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
