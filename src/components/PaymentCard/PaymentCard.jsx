import clsx from "clsx";
import css from "./PaymentCard.module.css";

export default function PaymentCard({
  payment: {
    amount,
    description,
    cardNumber,
    cardType,
    cardOwner,
    date,
    isPaid,
  },
}) {

  // console.log(clsx("a", null && "b", false && "c"));

  // console.log(
  //   clsx(css.text, {
  //     [css.isPayd]: isPaid,
  //     [css.isPanding]: !isPaid,
  //   })
  // );

 const amountClassNames = clsx(css.text, isPaid ? css.isPaid : css.isPending);

  // const textClasses = [css.text];

  // if (isPaid) {
  //   textClasses.push(css.isPaid);
  // }else {
  //   textClasses.push(css.isPending);
  // }

  // console.log(textClasses.join(" "));

  return (
    <>
      <div className={css.container}>
        <p className={css.text}>Amount: {amount}</p>
        <p className={amountClassNames}>Status {isPaid ? "Paid" : "Pending"}</p>
        <p className={css.text}>Description: {description}</p>
        <p className={css.text}>Card Number: {cardNumber}</p>
        <p className={css.text}>Card Type: {cardType}</p>
        <p className={css.text}>Card Holder Name: {cardOwner}</p>
        <p className={css.text}>Payment Date:{date}</p>
      </div>
    </>
  );
}

// Другий варіант, якщо не хочемо використовувати деструктуризацію в параметрах функції

// export default function PaymentCard({ payment }) {
//   const {
//     amount,
//     description,
//     cardNumber,
//     cardType,
//     cardOwner,
//     date,
//     isPaid,
//   } = payment;

//   return (
//     <div>
//       <p>Amount: {amount}</p>
//       <p>Status: {isPaid ? "Paid" : "Pending"}</p>
//       <p>Description: {description}</p>
//       <p>Card Number: {cardNumber}</p>
//       <p>Card Type: {cardType}</p>
//       <p>Card Holder Name: {cardOwner}</p>
//       <p>Payment Date: {date}</p>
//       <hr />
//     </div>
//   );
// }

{
  /* {isPaid ? <p>Status: Paid</p> : <p>Status: Pending</p>} */
}
{
  /* <p>{isPaid ? "Status: Paid" : "Status: Pending"}</p> */
}
{
  /* <p>Status:{" "} {isPaid ? (<div>1<span>Paid</span></div>) : ("Pending")}</p> */
}
