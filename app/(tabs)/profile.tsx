import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function ProfileScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Profile</ThemedText>
        {/* <ThemedText>Your profile screen.</ThemedText> */}
      </ThemedView>
      <ThemedView style={styles.content}>
        {/* <ThemedText type="subtitle">About</ThemedText>
        <ThemedText>
          This is your profile screen. Navigate between tabs to explore
          different sections.
        </ThemedText> */}
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titleContainer: {
    gap: 8,
    marginBottom: 24,
  },
  content: {
    gap: 8,
  },
});
