import React, { useEffect, useState } from "react";
import { getItems } from "../../Services/ItemsService";
import { useParams } from "react-router-dom";

function ItemsData() {
	const { eventId } = useParams();
	const [items, setItems] = useState([]);

	useEffect(() => {
		getItems().then((result) => {
			setItems(result);
		});
	}, []);

	//display all the items for now
	//in the future, we will display only the ones for the current event	
	return (
		<div>
			<h5>Items for the Event: {eventId}</h5>
		
			
			{items.length > 0 && (
				<ol>
					{items.map((item) => (
						<li key={item.objectId}>
							{item.get("item_name")} | price per unit(in $): {item.get("price_per_unit")} | quantity: {item.get("quantity")} 
						</li>
					))}
				</ol>
			)}
		</div>
	);
}

export default ItemsData;
