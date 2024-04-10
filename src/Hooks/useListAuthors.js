import handleError from "@/Helpers/handleError";
import { axiosInstance } from "@/Services/axiosIG";
import { END_POINT } from "@/Services/constants";
import { useState } from "react";
import { useQuery } from "react-query";

const request = async () => {
  const { data } = await axiosInstance.request({
    method: "GET",
    url: END_POINT.authors + "?limit=9999&maxLength=9999",
  });
  return data?.results || [];
};

const useListAuthors = () => {
  console.log("coming here authors");
  const [error, setError] = useState(null);

  const { isError, data, isFetching, refetch, isLoading } = useQuery({
    queryKey: ["get-useListAuthors"],
    queryFn: () => request(),
    onSuccess: (result) => {
      console.log(result);
    },
    onError: (err) => {
      const { message } = handleError(err);
      setError(message || "Something went wrong");
    },
    enabled: false,
  });
  return { isError, isFetching, data, error, refetch, setError, isLoading };
};

export { useListAuthors };
