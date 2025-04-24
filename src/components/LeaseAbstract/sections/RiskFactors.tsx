import React from 'react';

interface RiskFactor {
  category: string;
  description: string;
  severity: 'low' | 'medium' | 'high';
  impact: string;
  mitigation?: string;
}

interface RiskFactorsProps {
  risks?: RiskFactor[];
}

export const RiskFactors: React.FC<RiskFactorsProps> = ({
  risks = [
    {
      category: 'Lease Roll',
      description: 'Lease expires within 12 months',
      severity: 'high',
      impact: 'Potential vacancy risk and re-leasing costs',
      mitigation: 'Early renewal discussions initiated',
    },
    {
      category: 'Market Conditions',
      description: 'Declining market rents in the area',
      severity: 'medium',
      impact: 'Potential below-market renewal rates',
      mitigation: 'Regular market analysis and tenant relationship management',
    },
    {
      category: 'Tenant Financials',
      description: 'Tenant showing strong financial performance',
      severity: 'low',
      impact: 'Low risk of default',
      mitigation: 'Regular financial statement review',
    },
  ],
}) => {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Risk Assessment</h2>
        <div className="space-y-6">
          {risks.map((risk, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">{risk.category}</h3>
                  <p className="text-sm text-gray-500 mt-1">{risk.description}</p>
                </div>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getSeverityColor(risk.severity)}`}>
                  {risk.severity.charAt(0).toUpperCase() + risk.severity.slice(1)}
                </span>
              </div>

              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-500">Impact</h4>
                <p className="text-sm text-gray-900 mt-1">{risk.impact}</p>
              </div>

              {risk.mitigation && (
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-500">Mitigation Strategy</h4>
                  <p className="text-sm text-gray-900 mt-1">{risk.mitigation}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Risk Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-red-800">High Risk Items</h3>
            <p className="text-2xl font-semibold text-red-800 mt-2">
              {risks.filter(r => r.severity === 'high').length}
            </p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-yellow-800">Medium Risk Items</h3>
            <p className="text-2xl font-semibold text-yellow-800 mt-2">
              {risks.filter(r => r.severity === 'medium').length}
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-green-800">Low Risk Items</h3>
            <p className="text-2xl font-semibold text-green-800 mt-2">
              {risks.filter(r => r.severity === 'low').length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}; 