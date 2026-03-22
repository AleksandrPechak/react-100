import PaymentList from "./PaymentList";
import PageTitle from "./PageTitle";
import initialPayments from "../payments.json";

console.log(initialPayments);

export default function App() {
  return (
    <>
      <PageTitle text="Payments" />
      <PaymentList payments={initialPayments} />
    </>
  );
}

{
  /* Умовний рендеринг */
}
{
  /* {5 > 8 ? <div>HELLO A</div> : <p>HELLO B</p>} різні теги, використовуємо такий тернарний оператор */
}
{
  /* <p>{5 < 8 ? "HELLO A" : "HELLO B"}</p>
    <p>HELLO {5 > 8 ? "A" : "B"}</p> 

    {a && b}
    {a ? b : c} */
}
