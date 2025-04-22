'use client';

import { RiskFactor } from '@/types/lease';
import { formatDate } from '@/utils/date';

interface RiskFactorsProps {
  riskFactors?: RiskFactor[];
}

export default function RiskFactors({ riskFactors }: RiskFactorsProps) {
  if (!riskFactors || riskFactors.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Risk Factors</h2>
        <p className="text-gray-500">No risk factors identified.</p>
      </div>
    );
  }

  const getSeverityColor = (severity: RiskFactor['severity']) => {
    switch (severity) {
      case 'high':
        return 'bg-red-50 text-red-800 border-red-200';
      case 'medium':
        return 'bg-yellow-50 text-yellow-800 border-yellow-200';
      case 'low':
        return 'bg-green-50 text-green-800 border-green-200';
      default:
        return 'bg-gray-50 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Risk Factors</h2>
        <div className="space-y-4">
          {riskFactors.map((risk, index) => (
            <div
              key={index}
              className={`border rounded-lg p-4 ${getSeverityColor(risk.severity)}`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-medium capitalize">{risk.type.replace('-', ' ')}</h3>
                  <p className="mt-1 text-sm">{risk.description}</p>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize">
                  {risk.severity}
                </span>
              </div>
              {risk.dueDate && (
                <div className="mt-2 text-sm">
                  <span className="font-medium">Due Date:</span>{' '}
                  {formatDate(risk.dueDate)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 