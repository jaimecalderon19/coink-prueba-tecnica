import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.coink.starter',
  appName: 'Coink',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
