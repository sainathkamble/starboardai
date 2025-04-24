import React from 'react';
import { Line } from 'recharts';

interface LeaseSummaryProps {
  tenantName?: string;
  leaseStart?: string;
  leaseExpiry?: string;
  rentPSF?: number;
  totalArea?: number;
}

export const LeaseSummary: React.FC<LeaseSummaryProps> = ({
  tenantName = 'Example Tenant Inc.',
  leaseStart = '2023-01-01',
  leaseExpiry = '2028-12-31',
  rentPSF = 25.50,
  totalArea = 5000,
}) => {
  const leaseDuration = new Date(leaseExpiry).getFullYear() - new Date(leaseStart).getFullYear();
  const totalRent = rentPSF * totalArea;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Tenant Information</h2>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-500">Tenant Name</label>
            <p className="mt-1 text-sm text-gray-900">{tenantName}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-500">Lease Term</label>
            <p className="mt-1 text-sm text-gray-900">
              {new Date(leaseStart).toLocaleDateString()} - {new Date(leaseExpiry).toLocaleDateString()}
              <span className="ml-2 text-gray-500">({leaseDuration} years)</span>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Financial Overview</h2>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-500">Rent PSF</label>
            <p className="mt-1 text-sm text-gray-900">${rentPSF.toFixed(2)}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-500">Total Area</label>
            <p className="mt-1 text-sm text-gray-900">{totalArea.toLocaleString()} sq ft</p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-500">Annual Base Rent</label>
            <p className="mt-1 text-sm text-gray-900">${(totalRent * 12).toLocaleString()}</p>
          </div>
        </div>
      </div>

      <div className="md:col-span-2 bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Lease Timeline</h2>
        <div className="h-64">
          {/* Placeholder for timeline visualization */}
          <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center">
            <p className="text-gray-500">Timeline visualization coming soon</p>
          </div>
        </div>
      </div>
    </div>
  );
}; 