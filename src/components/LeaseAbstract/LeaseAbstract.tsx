'use client';

import { useState } from 'react';
import { LeaseAbstract as LeaseAbstractType } from '@/types/lease';
import TenantInfo from './sections/TenantInfo';
import LeaseTerms from './sections/LeaseTerms';
import Financials from './sections/Financials';
import RecoveryTerms from './sections/RecoveryTerms';
import RiskFactors from './sections/RiskFactors';

interface LeaseAbstractProps {
  data: LeaseAbstractType;
}

export default function LeaseAbstract({ data }: LeaseAbstractProps) {
  const [activeTab, setActiveTab] = useState('tenant');

  const tabs = [
    { id: 'tenant', label: 'Tenant Info' },
    { id: 'terms', label: 'Lease Terms' },
    { id: 'financials', label: 'Financials' },
    { id: 'recovery', label: 'Recovery Terms' },
    { id: 'risks', label: 'Risk Factors' },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{data.tenant.name}</h1>
        <p className="text-gray-600 mt-2">Lease Abstract</p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                py-4 px-1 border-b-2 font-medium text-sm
                ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      <div className="mt-6">
        {activeTab === 'tenant' && <TenantInfo tenant={data.tenant} />}
        {activeTab === 'terms' && <LeaseTerms leaseTerm={data.leaseTerm} />}
        {activeTab === 'financials' && <Financials rentStructure={data.rentStructure} />}
        {activeTab === 'recovery' && <RecoveryTerms recoveryTerms={data.recoveryTerms} />}
        {activeTab === 'risks' && <RiskFactors riskFactors={data.riskFactors} />}
      </div>
    </div>
  );
} 