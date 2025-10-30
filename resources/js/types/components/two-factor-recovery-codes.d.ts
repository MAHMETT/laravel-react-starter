export interface TwoFactorRecoveryCodesProps {
  codes: string[];
  onRefresh: () => void;
}