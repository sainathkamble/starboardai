'use client';

import { RentStructure } from '@/types/lease';
import { formatCurrency } from '@/utils/currency';

interface FinancialsProps {
  rentStructure: RentStructure;
}

export default function Financials({ rentStructure }: FinancialsProps) {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Financial Overview</h2>

        {/* Base Rent Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-green-50 p-4 rounded-lg">
            <dt className="text-sm font-medium text-green-800">Base Rent</dt>
            <dd className="mt-1 text-lg font-semibold text-green-900">
              {formatCurrency(rentStructure.baseRent)}
            </dd>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <dt className="text-sm font-medium text-green-800">Base Rent PSF</dt>
            <dd className="mt-1 text-lg font-semibold text-green-900">
              {formatCurrency(rentStructure.baseRentPSF)}/sq ft
            </dd>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <dt className="text-sm font-medium text-green-800">Total Rent PSF</dt>
            <dd className="mt-1 text-lg font-semibold text-green-900">
              {formatCurrency(rentStructure.totalRentPSF)}/sq ft
            </dd>
          </div>
        </div>

        {/* Escalations */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Escalations</h3>
          <div className="space-y-4">
            {rentStructure.escalations.map((escalation, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 hover:border-green-500 transition-colors"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Type</dt>
                    <dd className="mt-1 text-sm text-gray-900 capitalize">{escalation.type}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Frequency</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      Every {escalation.frequency} months
                    </dd>
                  </div>
                  {escalation.percentage && (
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Percentage</dt>
                      <dd className="mt-1 text-sm text-gray-900">{escalation.percentage}%</dd>
                    </div>
                  )}
                </div>
                {escalation.description && (
                  <div className="mt-2">
                    <dt className="text-sm font-medium text-gray-500">Description</dt>
                    <dd className="mt-1 text-sm text-gray-900">{escalation.description}</dd>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 