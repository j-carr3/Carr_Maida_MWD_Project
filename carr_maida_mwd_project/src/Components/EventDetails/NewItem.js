import React, { useEffect, useState } from "react";
import { createItem } from "../../Services/ItemsService";
import ItemForm from "./CreateItemForm";
import { useNavigate, useParams } from "react-router-dom";

const ItemCreation = () => {
	const navigate = useNavigate();
    const { eventId } = useParams();

	const [newItem, setNewItem] = useState({
		item_name: "",
		price_per_unit: "",
		quantity: "",
        event_id: eventId
	});

	const [add, setAdd] = useState(false);

	useEffect(() => {
		if (newItem && add) {
			createItem(newItem).then((itemCreated) => {
				if (itemCreated) {
					alert(
						`${itemCreated.get("item_name")} created!`
					);
					navigate("/");
				}
				setAdd(false);
			});
		}
	}, [navigate, newItem, add]);

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

