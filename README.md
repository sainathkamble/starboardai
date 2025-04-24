# Lease Abstract Dashboard

A modern, responsive lease abstract dashboard built with Next.js, TypeScript, and Tailwind CSS. This application provides investors with a comprehensive view of lease terms, financial data, and risk factors for commercial real estate properties.

## Features

- **Comprehensive Lease Overview**
  - Tenant information and lease terms
  - Financial terms and rent structure
  - Recovery terms (CAM, insurance, taxes)
  - Renewal options and timeline
  - Risk assessment and mitigation strategies

- **Interactive Data Visualization**
  - Rent escalation charts
  - Risk factor analysis
  - Timeline visualization

- **Modern UI/UX**
  - Clean, intuitive interface
  - Responsive design
  - Tabbed navigation
  - Color-coded risk indicators

## Tech Stack

- **Frontend Framework**: Next.js 13.5.6
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd lease-abstract-new
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
# or
yarn build
```

## Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/          # React components
│   └── LeaseAbstract/  # Lease abstract components
│       └── sections/   # Individual section components
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
```

## Key Components

- **LeaseSummary**: Overview of tenant and lease information
- **FinancialTerms**: Rent structure and escalation details
- **RecoveryTerms**: CAM, insurance, and tax recovery information
- **RenewalOptions**: Renewal terms and timeline
- **RiskFactors**: Risk assessment and mitigation strategies

## Additional Features

- **Risk Highlighting**: Automatic highlighting of lease roll within 12 months
- **Responsive Design**: Optimized for all device sizes
- **Export Capabilities**: PDF export functionality (coming soon)
- **Market Data Integration**: Integration with rent benchmarking APIs (coming soon)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Recharts for the charting library
