'use client';

import { Tenant } from '@/types/lease';
import { formatDate } from '@/utils/date';

interface TenantInfoProps {
  tenant: Tenant;
}

export default function TenantInfo({ tenant }: TenantInfoProps) {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Basic Info */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Tenant Information</h2>
            <dl className="space-y-4">
              <div>
                <dt className="text-sm font-medium text-gray-500">Name</dt>
                <dd className="mt-1 text-sm text-gray-900">{tenant.name}</dd>
              </div>
              {tenant.industry && (
                <div>
                  <dt className="text-sm font-medium text-gray-500">Industry</dt>
                  <dd className="mt-1 text-sm text-gray-900">{tenant.industry}</dd>
                </div>
              )}
              {tenant.creditRating && (
                <div>
                  <dt className="text-sm font-medium text-gray-500">Credit Rating</dt>
                  <dd className="mt-1 text-sm text-gray-900">{tenant.creditRating}</dd>
                </div>
              )}
            </dl>
          </div>

          {/* News Section */}
          {tenant.news && tenant.news.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent News</h2>
              <div className="space-y-4">
                {tenant.news.map((news, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <p className="text-sm text-gray-900 font-medium">{news.title}</p>
                    <div className="mt-1 flex items-center text-sm text-gray-500">
                      <span>{formatDate(news.date)}</span>
                      <span className="mx-2">•</span>
                      <span>{news.source}</span>
                    </div>
                    <a
                      href={news.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 text-sm text-blue-600 hover:text-blue-800"
                    >
                      Read more →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 