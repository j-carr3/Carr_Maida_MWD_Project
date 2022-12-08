import React, { useEffect, useState } from "react";
import { createItem } from "../../Services/ItemsService";
import ItemForm from "./CreateItemForm";
import { useNavigate, useParams } from "react-router-dom";
import { getAllEvents } from "../../Services/EventService.js";

const ItemCreation = () => {
	const navigate = useNavigate();
    const { eventId } = useParams();
	const [add, setAdd] = useState(false);
	const [load, setLoad] = useState(true);
	
    const [newItem, setNewItem] = useState({
		item_name: "",
		price_per_unit: "",
		quantity: "",
        event_id: ""
	});

    useEffect(() => {
		if (newItem && load) {

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
            alert('Frick: ' + error.message);
          });
		}
    }, [newItem, eventId, load]);

	useEffect(() => {
		if (newItem && add) {
			createItem(newItem).then((itemCreated) => {
				if (itemCreated) {
					alert(
						`${itemCreated.get("item_name")} created!`
					);
				}
				setAdd(false);
				setLoad(true);
			});
		}
	}, [navigate, newItem, add, load]);

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
			<ItemForm
				item={newItem}
				onChange={onChangeHandler}
				onSubmit={onSubmitHandler}
			/>
		</div>
	);
};

export default ItemCreation;

