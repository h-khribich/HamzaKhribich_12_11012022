import { useEffect, useState } from "react";

const useFetch1 = (userId) => {
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

export default useFetch1;
