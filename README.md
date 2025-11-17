# Expo Boilerplate

A production-ready Expo app boilerplate with TypeScript, Expo Router, and a clean architecture.

## Features

- 📱 File-based routing with Expo Router
- 🎨 Dark/Light mode support with themed components
- 🧭 Tab navigation setup
- 🎯 TypeScript for type safety
- 🎨 Custom themed components
- 🔧 Organized folder structure

## Project Structure

```
├── app/                    # Main app directory with file-based routing
│   ├── _layout.tsx        # Root layout with theme provider
│   └── (tabs)/            # Tab group
│       ├── _layout.tsx    # Tab navigation layout
│       ├── index.tsx      # Home screen
│       └── profile.tsx    # Profile screen
├── components/            # Reusable components
│   ├── themed-text.tsx   # Themed text component
│   ├── themed-view.tsx   # Themed view component
│   └── ui/               # UI components
│       └── icon-symbol.tsx
├── constants/            # Constants and configs
│   └── theme.ts         # Theme colors and fonts
├── hooks/               # Custom React hooks
│   ├── use-color-scheme.ts
│   └── use-theme-color.ts
├── assets/              # Static assets
└── package.json
```

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Usage

### Adding New Screens
Create new files in the `app` directory:
- `app/new-screen.tsx` - Creates a new screen
- `app/(tabs)/new-tab.tsx` - Adds a new tab screen

### Using Themed Components
```tsx
import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';

export default function MyScreen() {
  return (
    <ThemedView style={{ flex: 1, padding: 20 }}>
      <ThemedText type="title">Hello World</ThemedText>
      <ThemedText>This adapts to light/dark mode automatically</ThemedText>
    </ThemedView>
  );
}
```

### Navigation
Use Expo Router's `Link` component or `router.push()`:
```tsx
import { Link } from 'expo-router';

<Link href="/profile">Go to Profile</Link>
```

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
