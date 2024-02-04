import { titleStyle } from '@/shared/styles/primitives';
import { Divider } from '@nextui-org/react';
import payment from '@/assets/images/payment.png';

import PaymentList from './components/PaymentList';
import { IPaymentCard } from './components/PaymentCard';

export interface IPaymentMethodProps {}

export default function PaymentMethod(props: IPaymentMethodProps) {
  const paymentList: IPaymentCard[] = [
    {
      image: payment,
      name: 'Payment method 1',
      day: '1 day',
      price: 'free',
      isSelected: true,
    },
    {
      image: payment,
      name: 'Payment method 2',
      day: '2 day',
      price: 100,
      isSelected: false,
    },
  ];

  return (
    <div className="card-main flex flex-col gap-main">
      <h2 className={titleStyle()}>2. Shipping method</h2>
      <Divider orientation="horizontal" />
      <h3 className={titleStyle({ size: 'sm' })}>Availeble Shipping method</h3>
      <PaymentList paymentList={paymentList} />
    </div>
  );
}
