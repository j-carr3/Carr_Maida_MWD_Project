// TODO: Add CSS to each child component in order
//       to make site look more official/ less like it's from the 90's

/*
   Note: ToPurchaseForm and PurchasedForm are very similar right now,
         once we have a backend server the functionalities will be 
         different. ToPurchaseForm adds an item to the ToPurchase list,
         PurchaseForm moves an item from the ToPurchaseList to the PurchasedList

         Down the road the two functionalities will include conditional logic to render
         the correct components and PurchasedList will also show which user bought the item
         ToPurchaseList will show which user requested the item to be purhcased. 
*/

import {
  html,
  useEffect,
  useState
} from "https://unpkg.com/htm/preact/standalone.module.js";
import { getAllPurchases } from "../../Services/Purchases.js";
import PurchasedList from "./PurchasedList.js";
import ToPurchaseForm from "./ToPurchaseForm.js";
import PurchasedForm from "./PurchasedForm.js";

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
      <${PurchasedList} purchases=${purchases} />
      <${ToPurchaseForm} />
      <${PurchasedForm} />
    </div>
  `;
};

export default Purchased;
