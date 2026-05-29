import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Colors } from '@/constants/theme';
import { STRINGS } from '@/constants/strings';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useAppSelector } from '@/store/hooks';

/** Placeholder card data */
const CARDS = [
  {
    id: '1',
    title: 'Getting Started',
    description: 'Learn the basics of your new app',
    icon: 'rocket-outline' as const,
  },
  {
    id: '2',
    title: 'Customize Theme',
    description: 'Change colors, fonts, and layouts',
    icon: 'color-palette-outline' as const,
  },
  {
    id: '3',
    title: 'Add Features',
    description: 'Extend your app with new modules',
    icon: 'extension-puzzle-outline' as const,
  },
  {
    id: '4',
    title: 'Deploy',
    description: 'Ship your app to the stores',
    icon: 'cloud-upload-outline' as const,
  },
];

export default function HomeScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];
  const user = useAppSelector((state) => state.auth.user);

  return (
    <ScrollView
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Welcome Section */}
      <View style={styles.welcomeSection}>
        <Text style={[styles.greeting, { color: colors.textSecondary }]}>
          {STRINGS.welcomeUser}
        </Text>
        <Text style={[styles.userName, { color: colors.text }]}>
          {user?.name ?? 'there'} 👋
        </Text>
        <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
          {STRINGS.homeSubtitle}
        </Text>
      </View>

      {/* Quick Stats */}
      <View style={styles.statsRow}>
        {[
          { label: 'Active', value: '3', icon: 'pulse-outline' },
          { label: 'Tasks', value: '12', icon: 'checkmark-circle-outline' },
          { label: 'Alerts', value: '2', icon: 'notifications-outline' },
        ].map((stat) => (
          <View
            key={stat.label}
            style={[styles.statCard, { backgroundColor: colors.card, borderColor: colors.border }]}
          >
            <Ionicons
              name={stat.icon as keyof typeof Ionicons.glyphMap}
              size={22}
              color={colors.primary}
            />
            <Text style={[styles.statValue, { color: colors.text }]}>
              {stat.value}
            </Text>
            <Text style={[styles.statLabel, { color: colors.textSecondary }]}>
              {stat.label}
            </Text>
          </View>
        ))}
      </View>

      {/* Content Cards */}
      <View style={styles.cardsSection}>
        {CARDS.map((card) => (
          <View
            key={card.id}
            style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}
          >
            <View
              style={[styles.cardIconBg, { backgroundColor: colors.primaryLight }]}
            >
              <Ionicons name={card.icon} size={24} color={colors.primary} />
            </View>
            <View style={styles.cardContent}>
              <Text style={[styles.cardTitle, { color: colors.text }]}>
                {card.title}
              </Text>
              <Text style={[styles.cardDescription, { color: colors.textSecondary }]}>
                {card.description}
              </Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={colors.placeholder}
            />
          </View>
        ))}
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
  welcomeSection: {
    marginBottom: 28,
  },
  greeting: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  userName: {
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: -0.5,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 21,
  },
  // Stats
  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 28,
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 16,
    borderRadius: 16,
    borderWidth: 1,
  },
  statValue: {
    fontSize: 22,
    fontWeight: '700',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 2,
  },
  // Cards
  cardsSection: {
    gap: 12,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
  },
  cardIconBg: {
    width: 48,
    height: 48,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContent: {
    flex: 1,
    marginLeft: 14,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 3,
  },
  cardDescription: {
    fontSize: 13,
    lineHeight: 18,
  },
});
