export interface Tenant {
  name: string;
  industry?: string;
  creditRating?: string;
  news?: TenantNews[];
}

export interface TenantNews {
  date: string;
  title: string;
  source: string;
  url: string;
}

export interface LeaseTerm {
  startDate: string;
  endDate: string;
  renewalOptions: RenewalOption[];
}

export interface RenewalOption {
  term: number; // in months
  noticePeriod: number; // in months
  rentAdjustment?: string;
}

export interface RentStructure {
  baseRent: number;
  baseRentPSF: number;
  escalations: Escalation[];
  totalRentPSF: number;
}

export interface Escalation {
  type: 'fixed' | 'cpi' | 'market';
  percentage?: number;
  frequency: number; // in months
  description: string;
}

export interface RecoveryTerms {
  cam: {
    type: 'triple-net' | 'modified-gross' | 'gross';
    baseYear?: number;
    cap?: number;
  };
  insurance: {
    type: 'tenant' | 'landlord';
    amount?: number;
  };
  taxes: {
    type: 'tenant' | 'landlord';
    baseYear?: number;
  };
}

export interface LeaseAbstract {
  id: string;
  tenant: Tenant;
  leaseTerm: LeaseTerm;
  rentStructure: RentStructure;
  recoveryTerms: RecoveryTerms;
  riskFactors?: RiskFactor[];
  sourceDocument?: string;
}

export interface RiskFactor {
  type: 'lease-roll' | 'financial' | 'market';
  severity: 'high' | 'medium' | 'low';
  description: string;
  dueDate?: string;
}