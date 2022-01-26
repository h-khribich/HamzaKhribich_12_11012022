import { useEffect, useState } from "react";

export const useFetch = (userId) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserData = async () => {
      const response = await fetch(`http://localhost:3000/user/${userId}`);
      const data = await response.json();
      setUserData(data);
      setLoading(false);
    };
    getUserData();
  }, [userId]);

  return { userData, loading };
};
