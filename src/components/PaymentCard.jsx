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

  return (
    <>
      <div>
        <p>Amount: {amount}</p>
        <p>Status {isPaid ? "Paid" : "Pending"}</p>
        <p>Description: {description}</p>
        <p>Card Number: {cardNumber}</p>
        <p>Card Type: {cardType}</p>
        <p>Card Holder Name: {cardOwner}</p>
        <p>Payment Date:{date}</p>
        <hr />
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
