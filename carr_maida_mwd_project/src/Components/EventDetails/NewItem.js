import React, { useEffect, useState } from "react";
import { createItem, getItems, removeItem } from "../../Services/ItemsService";
import ItemForm from "./CreateItemForm";
import { useParams } from "react-router-dom";
import { getAllEvents } from "../../Services/EventService.js";


const ItemCreation = () => {
    const { eventId } = useParams();
	const [add, setAdd] = useState(false);
	const [load, setLoad] = useState(true);
	const [items, setItems] = useState([]);
	const [remove, setRemove] = useState("");
	
    const [newItem, setNewItem] = useState({
		item_name: "",
		price_per_unit: "",
		quantity: "",
        event_id: ""
	});

    useEffect(() => {
		if (load) {

			getItems().then((result) => {
				let resultList = result.filter((resultItems) => resultItems.get("event_id").id === eventId);
				setItems(resultList);
		
			})

        	getAllEvents().then((result) => {
				let resultEvent = {}
		    	resultEvent = result.find((resultItem) => resultItem.id === eventId);

            	setNewItem({
                	...newItem,
                	event_id: resultEvent
            	});
				setLoad(false);


	    }, (error) => {
            // Execute any logic that should take place if the save fails.
            // error is a Parse.Error with an error code and message.
            alert('Error: ' + error.message);
          });
		}
    }, [newItem, eventId, load, items, remove]);

	useEffect(() => {
		if (remove.length > 0) {
				//Filter the old lessons list to take out selected lesson
				const newItems = items.filter((item) => item.id !== remove);
				setItems(newItems);
		  
				removeItem(remove).then(() => {
				  console.log("Removed lesson with ID: ", remove);
				});
				// Reset remove state variable
				setRemove("");
		}
	}, [items, remove]);

	useEffect(() => {
		if (newItem && add) {
			createItem(newItem).then(() => {

				setLoad(true);
				setAdd(false);
			});
		}
	}, [newItem, add]);

	const onChangeHandler = (e) => {
		e.preventDefault();
		const { name, value: newValue } = e.target;

		setNewItem({
			...newItem,
			[name]: newValue
		});
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();
		console.log("submitted: ", e.target);
		setAdd(true);
	};

	return (
		<div>
			<div>
			{items.length > 0 && (
				<h5>Item List</h5>

			)}

			{items.length > 0 && (
				<ol>
					{items.map((item) => (
						<li key={item.id}>
							{item.get("item_name")} | price per unit(in $): {item.get("price_per_unit")} | quantity: {item.get("quantity")} 
						<button
						onClick={(e) => {
						  // Set remove variable and trigger re-render
						  setRemove(item.id);
						}}
					  >
						Delete
					  </button>
					  </li>
					))}
				</ol>
			)}
		</div>
			<ItemForm
				item={newItem}
				onChange={onChangeHandler}
				onSubmit={onSubmitHandler}
			/>
		</div>
	);
};

export default ItemCreation;

