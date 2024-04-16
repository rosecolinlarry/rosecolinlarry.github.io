import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run redemption-arc:serve:development',
        production: 'nx run redemption-arc:serve:production',
      },
      ciWebServerCommand: 'nx run redemption-arc:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
