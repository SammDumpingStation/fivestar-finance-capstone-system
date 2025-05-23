import React from 'react'
import RegularLoanCalculator from '@/features/loan-calculators/components/regular/RegularLoanCalculator'
import { ContentLayout } from '@/components/admin-panel/content-layout'
import BreadcrumbPages from '@/components/BreadcrumbPages'

export default function Reloan() {
  return (
    <ContentLayout title="Reloan Computation">
      <BreadcrumbPages
        links={[
          { href: "/", label: "Home" },
          { href: "/loan-computations/reloan", label: "Loan Computations" },
          { href: "/loan-computations", label: "Reloan" },
        ]}
      />
      <RegularLoanCalculator clientType="Reloan" />
    </ContentLayout>
  );
}