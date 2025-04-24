import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface RentComponent {
  name: string;
  amount: number;
  percentage: number;
}

interface Escalation {
  year: number;
  rate: number;
}

interface FinancialTermsProps {
  baseRent?: number;
  rentComponents?: RentComponent[];
  escalations?: Escalation[];
}

export const FinancialTerms: React.FC<FinancialTermsProps> = ({
  baseRent = 127500,
  rentComponents = [
    { name: 'Base Rent', amount: 100000, percentage: 78.4 },
    { name: 'Storage', amount: 15000, percentage: 11.8 },
    { name: 'Parking', amount: 12500, percentage: 9.8 },
  ],
  escalations = [
    { year: 1, rate: 0 },
    { year: 2, rate: 2.5 },
    { year: 3, rate: 2.5 },
    { year: 4, rate: 2.5 },
    { year: 5, rate: 2.5 },
  ],
}) => {
  const escalationData = escalations.map((escalation, index) => ({
    year: `Year ${escalation.year}`,
    rate: index === 0 ? 0 : escalation.rate,
    cumulative: index === 0 ? 0 : escalations.slice(0, index + 1).reduce((acc, curr) => acc + curr.rate, 0),
  }));

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Rent Components</h2>
          <div className="space-y-4">
            {rentComponents.map((component) => (
              <div key={component.name} className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-gray-900">{component.name}</p>
                  <p className="text-sm text-gray-500">${component.amount.toLocaleString()}/month</p>
                </div>
                <div className="text-sm font-medium text-gray-900">
                  {component.percentage}%
                </div>
              </div>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium text-gray-900">Total Monthly Rent</p>
                <p className="text-sm font-medium text-gray-900">${baseRent.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Rent Escalation Schedule</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={escalationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis label={{ value: '%', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Line type="monotone" dataKey="cumulative" stroke="#3B82F6" name="Cumulative Escalation" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Year</th>
                  <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase">Rate</th>
                  <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase">Cumulative</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {escalationData.map((data) => (
                  <tr key={data.year}>
                    <td className="px-4 py-2 text-sm text-gray-900">{data.year}</td>
                    <td className="px-4 py-2 text-sm text-gray-900 text-right">{data.rate}%</td>
                    <td className="px-4 py-2 text-sm text-gray-900 text-right">{data.cumulative}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}; 