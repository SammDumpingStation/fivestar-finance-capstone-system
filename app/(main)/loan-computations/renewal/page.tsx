import RegularLoanCalculator from '@/features/loan-calculators/components/regular/RegularLoanCalculator'
import { ContentLayout } from '@/components/admin-panel/content-layout'
import BreadcrumbPages from '@/components/BreadcrumbPages'

export default function Renewal() {
  return (
    <ContentLayout title="Renewal Computation">
      <BreadcrumbPages
        links={[
          { href: "/", label: "Home" },
          { href: "/loan-computations/renewal", label: "Loan Computations" },
          { href: "/loan-computations", label: "Renewal" },
        ]}
      />
      <RegularLoanCalculator clientType="Renewal" />
    </ContentLayout>
  );
}