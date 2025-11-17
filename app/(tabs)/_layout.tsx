// Import Stack navigation instead of Tabs
import { Stack } from "expo-router";

// Import theme colors for consistent styling
import { Colors } from "@/constants/theme";
// Import hook to detect color scheme (light/dark mode)
import { useColorScheme } from "@/hooks/use-color-scheme";

/**
 * Layout component for the app
 * Simplified from tab navigation to stack navigation with only index route
 */
export default function AppLayout() {
  // Get the current color scheme (light or dark mode)
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        // Set header tint color based on current theme
        headerTintColor: Colors[colorScheme ?? "light"].tint,
        // Hide header by default
        headerShown: false,
      }}
    >
      {/* Only index route is kept - tabs removed */}
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
    </Stack>
  );
}
