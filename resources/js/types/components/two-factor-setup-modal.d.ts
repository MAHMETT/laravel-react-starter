export interface TwoFactorSetupModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  user: {
    id: number;
    name: string;
    email: string;
    two_factor_enabled: boolean;
  };
  qrCode: string;
  secret: string;
  recoveryCodes: string[];
}