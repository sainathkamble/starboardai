import React from 'react';

interface RenewalOption {
  term: string;
  noticePeriod: string;
  rentAdjustment: string;
  conditions?: string[];
}

interface RenewalOptionsProps {
  options?: RenewalOption[];
  currentRent?: number;
}

export const RenewalOptions: React.FC<RenewalOptionsProps> = ({
  options = [
    {
      term: '5 years',
      noticePeriod: '12 months',
      rentAdjustment: 'Market Rate',
      conditions: [
        'Tenant must be in good standing',
        'No uncured defaults',
        'Written notice required',
      ],
    },
    {
      term: '3 years',
      noticePeriod: '9 months',
      rentAdjustment: '3% annual increase',
      conditions: [
        'Tenant must be in good standing',
        'No uncured defaults',
        'Written notice required',
      ],
    },
  ],
  currentRent = 127500,
}) => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Renewal Options</h2>
        <div className="space-y-6">
          {options.map((option, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Term</h3>
                  <p className="text-sm text-gray-900">{option.term}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Notice Period</h3>
                  <p className="text-sm text-gray-900">{option.noticePeriod}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Rent Adjustment</h3>
                  <p className="text-sm text-gray-900">{option.rentAdjustment}</p>
                </div>
              </div>

              {option.conditions && option.conditions.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Conditions</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {option.conditions.map((condition, idx) => (
                      <li key={idx} className="text-sm text-gray-600">{condition}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Renewal Timeline</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-900">Current Lease Expiry</span>
            </div>
            <span className="text-sm text-gray-500">December 31, 2028</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-900">Earliest Renewal Notice</span>
            </div>
            <span className="text-sm text-gray-500">January 1, 2028</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-900">Latest Renewal Notice</span>
            </div>
            <span className="text-sm text-gray-500">March 31, 2028</span>
          </div>
        </div>
      </div>
    </div>
  );
}; 