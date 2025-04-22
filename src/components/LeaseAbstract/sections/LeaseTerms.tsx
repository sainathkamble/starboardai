'use client';

import { LeaseTerm } from '@/types/lease';
import { formatDate, calculateMonthsBetween } from '@/utils/date';

interface LeaseTermsProps {
  leaseTerm: LeaseTerm;
}

export default function LeaseTerms({ leaseTerm }: LeaseTermsProps) {
  const leaseDuration = calculateMonthsBetween(leaseTerm.startDate, leaseTerm.endDate);

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Lease Terms</h2>
        
        {/* Lease Duration */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 p-4 rounded-lg">
            <dt className="text-sm font-medium text-blue-800">Lease Start</dt>
            <dd className="mt-1 text-lg font-semibold text-blue-900">
              {formatDate(leaseTerm.startDate)}
            </dd>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <dt className="text-sm font-medium text-blue-800">Lease End</dt>
            <dd className="mt-1 text-lg font-semibold text-blue-900">
              {formatDate(leaseTerm.endDate)}
            </dd>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <dt className="text-sm font-medium text-blue-800">Duration</dt>
            <dd className="mt-1 text-lg font-semibold text-blue-900">
              {Math.floor(leaseDuration / 12)} years, {leaseDuration % 12} months
            </dd>
          </div>
        </div>

        {/* Renewal Options */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Renewal Options</h3>
          <div className="space-y-4">
            {leaseTerm.renewalOptions.map((option, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 transition-colors"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Term</dt>
                    <dd className="mt-1 text-sm text-gray-900">{option.term} months</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Notice Period</dt>
                    <dd className="mt-1 text-sm text-gray-900">{option.noticePeriod} months</dd>
                  </div>
                  {option.rentAdjustment && (
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Rent Adjustment</dt>
                      <dd className="mt-1 text-sm text-gray-900">{option.rentAdjustment}</dd>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 