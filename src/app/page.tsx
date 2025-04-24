'use client';

import { LeaseAbstract } from '@/components/LeaseAbstract/LeaseAbstract';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <LeaseAbstract />
      </div>
    </main>
  );
}
