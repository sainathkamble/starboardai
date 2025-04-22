'use client';

import LeaseAbstract from '@/components/LeaseAbstract/LeaseAbstract';
import { LeaseAbstract as LeaseAbstractType } from '@/types/lease';

// Sample data for demonstration
const sampleLeaseData: LeaseAbstractType = {
  id: '1',
  tenant: {
    name: 'TechCorp Inc.',
    industry: 'Technology',
    creditRating: 'A+',
    news: [
      {
        date: '2024-03-15',
        title: 'TechCorp Reports Strong Q4 Earnings',
        source: 'Financial Times',
        url: 'https://example.com/news/1',
      },
      {
        date: '2024-02-28',
        title: 'TechCorp Expands Global Operations',
        source: 'Bloomberg',
        url: 'https://example.com/news/2',
      },
    ],
  },
  leaseTerm: {
    startDate: '2023-01-01',
    endDate: '2028-12-31',
    renewalOptions: [
      {
        term: 60,
        noticePeriod: 12,
        rentAdjustment: 'Market Rate',
      },
      {
        term: 60,
        noticePeriod: 12,
        rentAdjustment: '3% Annual Increase',
      },
    ],
  },
  rentStructure: {
    baseRent: 500000,
    baseRentPSF: 25,
    totalRentPSF: 35,
    escalations: [
      {
        type: 'fixed' as const,
        percentage: 3,
        frequency: 12,
        description: 'Annual fixed increase',
      },
      {
        type: 'cpi' as const,
        frequency: 12,
        description: 'Annual CPI adjustment, capped at 3%',
      },
    ],
  },
  recoveryTerms: {
    cam: {
      type: 'triple-net' as const,
      baseYear: 2023,
      cap: 5,
    },
    insurance: {
      type: 'tenant' as const,
      amount: 1000000,
    },
    taxes: {
      type: 'tenant' as const,
      baseYear: 2023,
    },
  },
  riskFactors: [
    {
      type: 'lease-roll' as const,
      severity: 'medium' as const,
      description: 'Lease expiration within 24 months',
      dueDate: '2028-12-31',
    },
    {
      type: 'financial' as const,
      severity: 'low' as const,
      description: 'Tenant credit rating downgrade risk',
    },
  ],
};

export default function LeaseAbstractPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <LeaseAbstract data={sampleLeaseData} />
    </main>
  );
} 