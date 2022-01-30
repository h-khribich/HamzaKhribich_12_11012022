import { useEffect, useState } from "react";

/**
 * Use fetch component to which several endpoints can accessed by concatenating userId param and string endpoint, the loading state enables to ensure data is accessible
 * @param {string} userId - User id.
 * @async - Asynchronous function
 * @returns {Object} User data for the specified endpoint (key data is returned if no other endpoints are provided)
 * @example `http://localhost:3000/user/${userId}/performance`
 */
export const useFetch = (userId) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /**
     * Fetch user data in API
     */
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
