import handleError from "@/Helpers/handleError";
import { axiosInstance } from "@/Services/axiosIG";
import { END_POINT } from "@/Services/constants";
import { useState } from "react";
import { useQuery } from "react-query";

const request = async (tag) => {
  const { data } = await axiosInstance.request({
    method: "GET",
    url: END_POINT.quotes + "?tags=" + tag + "&limit=9999&maxLength=9999",
  });
  return data?.results || [];
};

const useListQuoteByTag = (tag) => {
  const [error, setError] = useState(null);

  const { isError, data, isFetching, refetch } = useQuery({
    queryKey: ["get-useListQuoteByTag"],
    queryFn: () => request(tag),
    onSuccess: (result) => {},
    onError: (err) => {
      const { message } = handleError(err);
      setError(message || "Something went wrong");
    },
    enabled: true,
  });
  return { isError, isFetching, data, error, refetch, setError };
};

export { useListQuoteByTag };
