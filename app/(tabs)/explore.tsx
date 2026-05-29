import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Colors } from '@/constants/theme';
import { STRINGS } from '@/constants/strings';
import { useColorScheme } from '@/hooks/use-color-scheme';

/** Placeholder explore items */
const EXPLORE_ITEMS = [
  { id: '1', title: 'Analytics', icon: 'bar-chart-outline', color: '#6366F1' },
  { id: '2', title: 'Messages', icon: 'chatbubble-outline', color: '#EC4899' },
  { id: '3', title: 'Calendar', icon: 'calendar-outline', color: '#F59E0B' },
  { id: '4', title: 'Documents', icon: 'document-text-outline', color: '#10B981' },
  { id: '5', title: 'Settings', icon: 'settings-outline', color: '#8B5CF6' },
  { id: '6', title: 'Help', icon: 'help-circle-outline', color: '#06B6D4' },
];

export default function ExploreScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];

  return (
    <ScrollView
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>
          {STRINGS.exploreTitle}
        </Text>
        <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
          {STRINGS.exploreSubtitle}
        </Text>
      </View>

      {/* Grid */}
      <View style={styles.grid}>
        {EXPLORE_ITEMS.map((item) => (
          <View
            key={item.id}
            style={[styles.gridItem, { backgroundColor: colors.card, borderColor: colors.border }]}
          >
            <View style={[styles.iconBg, { backgroundColor: item.color + '18' }]}>
              <Ionicons
                name={item.icon as keyof typeof Ionicons.glyphMap}
                size={28}
                color={item.color}
              />
            </View>
            <Text style={[styles.itemTitle, { color: colors.text }]}>
              {item.title}
            </Text>
          </View>
        ))}
      </View>

      {/* Featured Section */}
      <View style={styles.featured}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          Featured
        </Text>
        <View
          style={[
            styles.featuredCard,
            { backgroundColor: colors.primary, borderColor: colors.border },
          ]}
        >
          <View style={styles.featuredContent}>
            <Text style={styles.featuredTitle}>Upgrade to Pro</Text>
            <Text style={styles.featuredDescription}>
              Unlock all features and get priority support
            </Text>
          </View>
          <Ionicons name="arrow-forward-circle" size={36} color="#FFFFFF" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 32,
  },
  header: {
    marginBottom: 28,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: -0.5,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 21,
  },
  // Grid
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 32,
  },
  gridItem: {
    width: '47%',
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 24,
    borderRadius: 16,
    borderWidth: 1,
  },
  iconBg: {
    width: 56,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  itemTitle: {
    fontSize: 15,
    fontWeight: '600',
  },
  // Featured
  featured: {},
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 14,
  },
  featuredCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 20,
  },
  featuredContent: {
    flex: 1,
    marginRight: 12,
  },
  featuredTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 6,
  },
  featuredDescription: {
    fontSize: 14,
    color: '#FFFFFFCC',
    lineHeight: 20,
  },
});
