import React from "react";

/* STATELESS CHILD COMPONENT */
const ItemForm = ({ item, onChange, onSubmit }) => {
  return (
    <div>
    	<hr />
      	This is the form for creating a new item
      	<form onSubmit={onSubmit} autoComplete="off">
			<div className="form-group">
				<label>Item Name: </label>
				<br />
				<input
					type="text"
					className="form-control"
					id="item-name-input"
					value={item.item_name}
					onChange={onChange}
					name="item_name"
					placeholder="item name"
					required
				/>
			</div>
			<div className="form-group">
				<label>Estimated Price/Unit: </label>
				<br />
				<input
					type="number"
					className="form-control"
					id="item-ppu-input"
					value={item.price_per_unit}
					onChange={onChange}
					name="price_per_unit"
					placeholder="0"
					required
				/>
			</div>
			<div className="form-group">
				<label>Quantity: </label>
				<br />
				<input 
					type="number"
					className="form-control"
					id="item-quantity"
					value={item.quantity}
					onChange={onChange}
					name="quantity"
					placeholder="0"
					required
				/>
			</div>
			<div className="form-group">
				<button type="submit" className="btn btn-primary" onSubmit={onSubmit}>
					Submit
				</button>
			</div>
		</form>
	</div>
	);
};

export default ItemForm;



