# Expo app for jeep drivers of Munnar

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

