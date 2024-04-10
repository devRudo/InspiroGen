import { useCallback, useEffect, useRef, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

export function useRefreshOnFocus(refetch, canRefetch = true) {
  const [isScreenFocused, setIsScreenFocused] = useState(false);

  useFocusEffect(() => {
    setIsScreenFocused(true);
    return () => setIsScreenFocused(false);
  });

  useEffect(() => {
    if (isScreenFocused && canRefetch) {
      refetch();
    }
  }, [canRefetch, isScreenFocused, refetch]);
}
