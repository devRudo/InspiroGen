import handleError from "@/Helpers/handleError";
import { axiosInstance } from "@/Services/axiosIG";
import { END_POINT } from "@/Services/constants";
import { useState } from "react";
import { useQuery } from "react-query";

const request = async (tag) => {
  const { data } = await axiosInstance.request({
    method: "GET",
    url: END_POINT.tags,
  });
  return data || [];
};

const useListTags = (tag) => {
  console.log("coming here tags");
  const [error, setError] = useState(null);

  const { isError, data, isFetching, refetch, isLoading } = useQuery({
    queryKey: ["get-useListTags"],
    queryFn: () => request(),
    onSuccess: (result) => {},
    onError: (err) => {
      const { message } = handleError(err);
      setError(message || "Something went wrong");
    },
    enabled: true,
  });
  return { isError, isFetching, data, error, refetch, setError, isLoading };
};

export { useListTags };
