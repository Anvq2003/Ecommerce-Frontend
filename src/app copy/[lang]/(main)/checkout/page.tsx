import BubbleInformation from '@/components/BubbleInformation';
import WrapperPage from '@/components/WrapperPage';
import * as React from 'react';
import Shipping from './components/Shipping';
import PaymentMethod from './components/PaymentMethod';
import BreadcrumbComponent from '@/layout/Breadcrumb';

export interface ICheckoutPageProps {}

export default function CheckoutPage(props: ICheckoutPageProps) {
  return (
    <WrapperPage>
      <BreadcrumbComponent />
      <div className="mx-5 flex flex-col gap-5 lg:flex-row xl:mx-0 xl:gap-main">
        <div className="flex flex-1 flex-col gap-main">
          <Shipping />
          <PaymentMethod />
        </div>
        <BubbleInformation
          radius="sm"
          title="Payment Details"
          subtitle="Complete your purchase item by providing your payment details order."
          textButton="Pay $465.98"
        />
      </div>
    </WrapperPage>
  );
}
