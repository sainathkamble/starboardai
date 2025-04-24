'use client';

import React from 'react';

interface RecoveryTerm {
  name: string;
  amount: number;
  cap?: number;
  baseYear?: number;
  notes?: string;
}

interface RecoveryTermsProps {
  cam?: RecoveryTerm;
  insurance?: RecoveryTerm;
  taxes?: RecoveryTerm;
}

export const RecoveryTerms: React.FC<RecoveryTermsProps> = ({
  cam = {
    name: 'Common Area Maintenance',
    amount: 5.25,
    cap: 3.0,
    baseYear: 2023,
    notes: 'Capped at 3% annual increase',
  },
  insurance = {
    name: 'Insurance',
    amount: 1.75,
    baseYear: 2023,
    notes: 'Pass-through based on actual costs',
  },
  taxes = {
    name: 'Property Taxes',
    amount: 3.50,
    baseYear: 2023,
    notes: 'Pass-through based on actual costs',
  },
}) => {
  const totalRecovery = cam.amount + insurance.amount + taxes.amount;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recovery Terms</h2>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">CAM (Common Area Maintenance)</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Rate PSF</span>
                  <span className="text-sm font-medium text-gray-900">${cam.amount.toFixed(2)}</span>
                </div>
                {cam.cap && (
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Annual Cap</span>
                    <span className="text-sm font-medium text-gray-900">{cam.cap}%</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Base Year</span>
                  <span className="text-sm font-medium text-gray-900">{cam.baseYear}</span>
                </div>
                {cam.notes && (
                  <p className="text-sm text-gray-500 mt-2">{cam.notes}</p>
                )}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Insurance</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Rate PSF</span>
                  <span className="text-sm font-medium text-gray-900">${insurance.amount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Base Year</span>
                  <span className="text-sm font-medium text-gray-900">{insurance.baseYear}</span>
                </div>
                {insurance.notes && (
                  <p className="text-sm text-gray-500 mt-2">{insurance.notes}</p>
                )}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Property Taxes</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Rate PSF</span>
                  <span className="text-sm font-medium text-gray-900">${taxes.amount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Base Year</span>
                  <span className="text-sm font-medium text-gray-900">{taxes.baseYear}</span>
                </div>
                {taxes.notes && (
                  <p className="text-sm text-gray-500 mt-2">{taxes.notes}</p>
                )}
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Total Recovery</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Total Rate PSF</span>
                  <span className="text-sm font-medium text-gray-900">${totalRecovery.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Annual Recovery</span>
                  <span className="text-sm font-medium text-gray-900">${(totalRecovery * 5000 * 12).toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 