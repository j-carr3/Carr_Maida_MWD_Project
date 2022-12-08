import React, { useEffect, useState } from "react";
import { getItems } from "../../Services/ItemsService";
import { useParams } from "react-router-dom";

function ItemsData() {
	const { eventId } = useParams();
	const [items, setItems] = useState([]);
	const [load, setLoad] = useState(true);

	useEffect(() => {
		if(load){
		getItems().then((result) => {
			let resultList = result.filter((resultItems) => resultItems.get("event_id").id === eventId);

			setItems(resultList);
			setLoad(false);
		});
	}
	}, [eventId, load]);

	return (
		<div>
			<h5>Items for the Event: {eventId}</h5>
			
			{items.length > 0 && (
				<ol>
					{items.map((item) => (
						<li key={item.id}>
							{item.get("item_name")} | price per unit(in $): {item.get("price_per_unit")} | quantity: {item.get("quantity")} 
						</li>
					))}
				</ol>
			)}
		</div>
	);
}

export default ItemsData;
