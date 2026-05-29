import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack, useRouter, useSegments } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Provider } from "react-redux";
import "react-native-reanimated";

import MainLayout from "@/components/ui/layout";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { store } from "@/store";
import { useAppSelector } from "@/store/hooks";

/**
 * Auth gate — redirects to (auth) or (tabs) based on authentication state.
 */
function AuthGate({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";

    if (!isAuthenticated && !inAuthGroup) {
      // Not signed in, redirect to login
      router.replace("/login");
    } else if (isAuthenticated && inAuthGroup) {
      // Signed in, redirect to main app
      router.replace("/");
    }
  }, [isAuthenticated, segments, router]);

  return <>{children}</>;
}

/**
 * Inner layout — needs to be inside Redux Provider to use useAppSelector.
 */
function InnerLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <MainLayout>
        <AuthGate>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(auth)" />
            <Stack.Screen name="(tabs)" />
          </Stack>
        </AuthGate>
      </MainLayout>
    </ThemeProvider>
  );
}

/**
 * Root layout — wraps the entire app in Redux Provider.
 */
export default function RootLayout() {
  return (
    <Provider store={store}>
      <InnerLayout />
    </Provider>
  );
}
