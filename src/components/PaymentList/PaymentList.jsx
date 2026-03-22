import PaymentCard from "../PaymentCard/PaymentCard.jsx";
import css from "./PaymentList.module.css";

export default function PaymentList({ payments }) {
  return (
    <ul className={css.list}>
      {payments.map((payment) => (
        <li key={payment.id} className={css.listItem}>
          <PaymentCard payment={payment} />
        </li>
      ))}
    </ul>
  );
}

  // <div>
    //   {payments.map((payment) => (
    //     <PaymentCard key={payment.id} payment={payment} />
    //   ))}
    // </div>
