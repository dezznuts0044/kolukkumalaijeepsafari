import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        {/* <ThemedText type="title">Welcome!</ThemedText>
        <ThemedText>Your Expo Boilerplate is ready.</ThemedText> */}
      </ThemedView>
      <ThemedView style={styles.content}>
        {/* <ThemedText type="subtitle">Get Started</ThemedText> */}
        <WebView source={{ uri: 'https://jeepsafarikolukkumalai.com/admin/jeep-owner-login' }}  style={styles.webview} enableApplePay={true} showsVerticalScrollIndicator={false} paymentRequestEnabled={true}/>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    gap: 8,
    marginBottom: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    gap: 8,
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});
