import handleError from "@/Helpers/handleError";
import { axiosInstance } from "@/Services/axiosIG";
import { END_POINT } from "@/Services/constants";
import { useState } from "react";
import { useQuery } from "react-query";

const request = async () => {
  const { data } = await axiosInstance.request({
    method: "GET",
    url: END_POINT.random,
  });
  return data || {};
};

const useRandomQuote = () => {
  const [error, setError] = useState(null);

  const { isError, data, isFetching, refetch } = useQuery({
    queryKey: ["get-useRandomQuote"],
    queryFn: () => request(),
    onSuccess: (result) => {},
    onError: (err) => {
      const { message } = handleError(err);
      setError(message || "Something went wrong");
    },
    enabled: false,
  });
  return { isError, isFetching, data, error, refetch, setError };
};

export { useRandomQuote };
