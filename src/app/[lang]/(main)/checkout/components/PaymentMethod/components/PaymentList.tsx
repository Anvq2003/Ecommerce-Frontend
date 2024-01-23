import * as React from 'react';
import PaymentCard, { IPaymentCard } from './PaymentCard';

export interface IPaymentListProps {
  paymentList: IPaymentCard[];
}

export default function PaymentList({ paymentList }: IPaymentListProps) {
  return (
    <div className="flex flex-col gap-main">
      {paymentList.map((payment, index) => (
        <PaymentCard key={index} data={payment} />
      ))}
    </div>
  );
}
