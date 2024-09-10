import { environment } from './src/environments/environment';
import { NgxsModuleOptions } from '@ngxs/store';

export const ngxsConfig: NgxsModuleOptions = {
  developmentMode: !environment.production,
  selectorOptions: {
    suppressErrors: false
  },
  compatibility: {
    strictContentSecurityPolicy: true
  },
};
