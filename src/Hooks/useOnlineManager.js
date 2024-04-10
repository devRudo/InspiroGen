import { useEffect } from "react";
import NetInfo from "@react-native-community/netinfo";
import { onlineManager } from "react-query";
import { isWeb } from "@/Utils/common";

export function useOnlineManager() {
  useEffect(() => {
    if (!isWeb) {
      return NetInfo.addEventListener((state) => {
        onlineManager.setOnline(
          state.isConnected != null &&
            state.isConnected &&
            Boolean(state.isInternetReachable)
        );
      });
    }
  }, []);
}
