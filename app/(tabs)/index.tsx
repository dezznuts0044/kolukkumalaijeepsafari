import { useRef, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

import { ThemedView } from "@/components/themed-view";

export default function Home() {
  const webRef = useRef(null);
  const [canGoBack, setCanGoBack] = useState(false);

  return (
    <ThemedView style={styles.container}>
      {/* Back Button Row */}
      {canGoBack && (
        <View style={styles.backRow}>
          <Pressable onPress={() => webRef.current?.goBack()}>
            <Text style={styles.backText}>{"< Back"}</Text>
          </Pressable>
        </View>
      )}

      {/* WebView */}
      <View style={styles.webviewContainer}>
        <WebView
          ref={webRef}
          source={{
            uri: "https://jeepsafarikolukkumalai.com/admin/jeep-owner-login",
          }}
          onNavigationStateChange={(state) => setCanGoBack(state.canGoBack)}
          showsVerticalScrollIndicator={false}
          style={styles.webview}
        />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  backRow: {
    padding: 12,
    backgroundColor: "transparent",
    position: "absolute",
    top: 16,
    left: 16,
    zIndex: 1,
  },
  backText: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
  },
  webviewContainer: { flex: 1 },
  webview: { flex: 1 },
});
