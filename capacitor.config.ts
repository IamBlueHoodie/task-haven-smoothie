
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.a2cf1764343c423294bd1d5af0052eaa',
  appName: 'task-haven-smoothie',
  webDir: 'dist',
  server: {
    url: 'https://a2cf1764-343c-4232-94bd-1d5af0052eaa.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  android: {
    buildOptions: {
      keystorePath: 'release-key.keystore',
      keystoreAlias: 'key0',
      keystorePassword: 'password',
      keyPassword: 'password',
    },
  },
};

export default config;
