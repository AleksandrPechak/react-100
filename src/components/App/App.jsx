import PaymentList from "../PaymentList/PaymentList";
import PageTitle from "../PageTitle/PageTitle";
import initialPayments from "../../payments.json";
import css from "./App.module.css";
import Button from "../Button/Button";

export default function App() {
  return (
    <div className={css.container}>
      <PageTitle>Styling React Components</PageTitle>
      <Button variant="primary">
        First
      </Button>
      <Button variant="secondary" type="submit">
        Second
      </Button>
      <PaymentList payments={initialPayments} />
    </div>
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

// const Panel = ({ title, children }) => {
//   return (
//     <section>
//       <h2>{title}</h2>
//       {children}
//     </section>
//   );
// };

{
  /* <PageTitle>Styling React Components</PageTitle>

      <Panel title="Рейтинг">
        <div>First panel content</div>
      </Panel>

      <Panel title="Что это за очки опыта и уровни?
">
        <div>Second panel content</div>
      </Panel>

      <Panel title="Как получить больше очков опыта?">
        <div>Therd panel content</div>
      </Panel> */
}
