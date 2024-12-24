import { ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "src/config/queryClient";
import { Toasts } from "@backpackapp-io/react-native-toast";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AlertNotificationRoot } from "react-native-alert-notification";

interface AppProvidersProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProvidersProps) => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AlertNotificationRoot>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
        <Toasts />
        <StatusBar />
      </AlertNotificationRoot>
    </GestureHandlerRootView>
  );
};
