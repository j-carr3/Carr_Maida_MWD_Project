// TODO: Add CSS to each child component in order
//       to make site look more official/ less like it's from the 90's

import {
  html,
  useEffect,
  useState
} from "https://unpkg.com/htm/preact/standalone.module.js";
import { getAllPurchases } from "../../Services/Purchases.js";
import PurchasedList from "./PurchasedList.js";
import PurchaseForm from "./PurchaseForm.js";

const Purchased = () => {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    getAllPurchases().then((purchases) => {
      setPurchases(purchases);
    });
  }, []);

  return html`
    <div>
      <h1>Taylor and Johnny's Feature 3</h1>
      This is the stateful parent component.
      <${PurchasedList} purchases=${purchases} />
      <${PurchaseForm} />
    </div>
  `;
};

export default Purchased;
