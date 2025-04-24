import React, { useState } from 'react';
import { LeaseSummary } from './sections/LeaseSummary';
import { FinancialTerms } from './sections/FinancialTerms';
import { RecoveryTerms } from './sections/RecoveryTerms';
import { RenewalOptions } from './sections/RenewalOptions';
import { RiskFactors } from './sections/RiskFactors';

type TabType = 'summary' | 'financial' | 'recovery' | 'renewal' | 'risks';

export const LeaseAbstract: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('summary');

  const tabs = [
    { id: 'summary', label: 'Summary' },
    { id: 'financial', label: 'Financial Terms' },
    { id: 'recovery', label: 'Recovery Terms' },
    { id: 'renewal', label: 'Renewal Options' },
    { id: 'risks', label: 'Risk Factors' },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Lease Abstract</h1>
        <p className="text-sm text-gray-500">Detailed overview of lease terms and conditions</p>
      </div>

      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`
                whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
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

      <div className="mt-6">
        {activeTab === 'summary' && <LeaseSummary />}
        {activeTab === 'financial' && <FinancialTerms />}
        {activeTab === 'recovery' && <RecoveryTerms />}
        {activeTab === 'renewal' && <RenewalOptions />}
        {activeTab === 'risks' && <RiskFactors />}
      </div>
    </div>
  );
}; 