'use client';

import { RecoveryTerms as RecoveryTermsType } from '@/types/lease';

interface RecoveryTermsProps {
  recoveryTerms: RecoveryTermsType;
}

export default function RecoveryTerms({ recoveryTerms }: RecoveryTermsProps) {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Recovery Terms</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* CAM */}
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-purple-900 mb-4">CAM</h3>
            <dl className="space-y-2">
              <div>
                <dt className="text-sm font-medium text-purple-800">Type</dt>
                <dd className="mt-1 text-sm text-purple-900 capitalize">
                  {recoveryTerms.cam.type.replace('-', ' ')}
                </dd>
              </div>
              {recoveryTerms.cam.baseYear && (
                <div>
                  <dt className="text-sm font-medium text-purple-800">Base Year</dt>
                  <dd className="mt-1 text-sm text-purple-900">
                    {recoveryTerms.cam.baseYear}
                  </dd>
                </div>
              )}
              {recoveryTerms.cam.cap && (
                <div>
                  <dt className="text-sm font-medium text-purple-800">Cap</dt>
                  <dd className="mt-1 text-sm text-purple-900">
                    {recoveryTerms.cam.cap}%
                  </dd>
                </div>
              )}
            </dl>
          </div>

          {/* Insurance */}
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-purple-900 mb-4">Insurance</h3>
            <dl className="space-y-2">
              <div>
                <dt className="text-sm font-medium text-purple-800">Type</dt>
                <dd className="mt-1 text-sm text-purple-900 capitalize">
                  {recoveryTerms.insurance.type}
                </dd>
              </div>
              {recoveryTerms.insurance.amount && (
                <div>
                  <dt className="text-sm font-medium text-purple-800">Amount</dt>
                  <dd className="mt-1 text-sm text-purple-900">
                    ${recoveryTerms.insurance.amount.toLocaleString()}
                  </dd>
                </div>
              )}
            </dl>
          </div>

          {/* Taxes */}
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-purple-900 mb-4">Taxes</h3>
            <dl className="space-y-2">
              <div>
                <dt className="text-sm font-medium text-purple-800">Type</dt>
                <dd className="mt-1 text-sm text-purple-900 capitalize">
                  {recoveryTerms.taxes.type}
                </dd>
              </div>
              {recoveryTerms.taxes.baseYear && (
                <div>
                  <dt className="text-sm font-medium text-purple-800">Base Year</dt>
                  <dd className="mt-1 text-sm text-purple-900">
                    {recoveryTerms.taxes.baseYear}
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
} 