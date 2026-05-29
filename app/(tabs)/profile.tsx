import React from 'react';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Button } from '@/components/ui/button';
import { Colors } from '@/constants/theme';
import { STRINGS } from '@/constants/strings';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { logout } from '@/store/auth-slice';

export default function ProfileScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const colors = Colors[colorScheme];
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  const handleLogout = () => {
    Alert.alert(STRINGS.logout, 'Are you sure you want to log out?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: STRINGS.logout,
        style: 'destructive',
        onPress: () => dispatch(logout()),
      },
    ]);
  };

  const memberDate = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
      })
    : 'N/A';

  return (
    <ScrollView
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Avatar Section */}
      <View style={styles.avatarSection}>
        <View
          style={[styles.avatar, { backgroundColor: colors.primaryLight }]}
        >
          <Text style={[styles.avatarText, { color: colors.primary }]}>
            {user?.name
              ? user.name
                  .split(' ')
                  .map((w) => w[0])
                  .join('')
                  .toUpperCase()
                  .slice(0, 2)
              : '?'}
          </Text>
        </View>
        <Text style={[styles.name, { color: colors.text }]}>
          {user?.name ?? 'User'}
        </Text>
        <Text style={[styles.email, { color: colors.textSecondary }]}>
          {user?.email ?? '—'}
        </Text>
        <Text style={[styles.memberSince, { color: colors.placeholder }]}>
          {STRINGS.memberSince} {memberDate}
        </Text>
      </View>

      {/* Menu Items */}
      <View style={styles.menuSection}>
        {[
          { label: 'Edit Profile', icon: 'person-outline' },
          { label: 'Notifications', icon: 'notifications-outline' },
          { label: 'Appearance', icon: 'color-palette-outline' },
          { label: 'Privacy & Security', icon: 'shield-checkmark-outline' },
          { label: 'Help & Support', icon: 'help-circle-outline' },
        ].map((item, index) => (
          <View
            key={item.label}
            style={[
              styles.menuItem,
              { borderBottomColor: colors.border },
              index === 4 && styles.menuItemLast,
            ]}
          >
            <View style={[styles.menuIconBg, { backgroundColor: colors.card }]}>
              <Ionicons
                name={item.icon as keyof typeof Ionicons.glyphMap}
                size={20}
                color={colors.primary}
              />
            </View>
            <Text style={[styles.menuLabel, { color: colors.text }]}>
              {item.label}
            </Text>
            <Ionicons name="chevron-forward" size={18} color={colors.placeholder} />
          </View>
        ))}
      </View>

      {/* Logout */}
      <View style={styles.logoutSection}>
        <Button
          title={STRINGS.logout}
          onPress={handleLogout}
          variant="outline"
          style={styles.logoutButton}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 40,
  },
  // Avatar
  avatarSection: {
    alignItems: 'center',
    marginBottom: 36,
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarText: {
    fontSize: 32,
    fontWeight: '700',
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 4,
  },
  email: {
    fontSize: 15,
    marginBottom: 4,
  },
  memberSince: {
    fontSize: 13,
  },
  // Menu
  menuSection: {
    marginBottom: 32,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 0.5,
  },
  menuItemLast: {
    borderBottomWidth: 0,
  },
  menuIconBg: {
    width: 36,
    height: 36,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  menuLabel: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
  },
  // Logout
  logoutSection: {
    paddingTop: 8,
  },
  logoutButton: {
    borderColor: '#EF4444',
  },
});
