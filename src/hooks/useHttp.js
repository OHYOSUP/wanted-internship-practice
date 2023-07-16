import { useState } from "react";
import { useNavigationType } from "react-router";

const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const setHttpError = (e) => {
    const { data, status } = e.response;
    const { message } = data;
    setError({ status, message });
  };

  return { loading, setLoading, error, setError, setHttpError };
};

export default useHttp;
