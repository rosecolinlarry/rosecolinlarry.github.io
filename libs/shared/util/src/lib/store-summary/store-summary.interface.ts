// Copied from https://github.com/adudecoder/angular-store-admin-ecommerce/blob/main/src/app/services/store-summary/store-summary.service.ts

export interface StoreSummary {
  title: string;
  value: string;
  isIncrease: boolean;
  color: string;
  percentValue: string;
  icon: string;
  isCurrency: boolean;
}
