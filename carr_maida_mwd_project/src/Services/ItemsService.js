import Parse from "parse";
//import { getById } from "../Components/CreateEvent/EventService.js";
/* SERVICE FOR PARSE SERVER OPERATIONS */

// READ OPERATION - Read all items
export const getItems = () => {
	const Item = Parse.Object.extend("items");
	const query = new Parse.Query(Item);

	return query.find().then((result) => {
		return result;
	});
}

// READ OPERATION - Read item based on ID
export const getItemById = (id) => {
	const Item = Parse.Object.extend("items");
	const query = new Parse.Query(Item);

	return query.find(id).then((result) => {
		return result;
	});
}

export const createItem = (newItem) => {
	const Item = Parse.Object.extend("items");
	const item = new Item();
	
	item.set("submitted_by", Parse.User.current());
	item.set("item_name", newItem.item_name);
	item.set("price_per_unit", parseInt(newItem.price_per_unit));
	item.set("quantity", parseInt(newItem.quantity));
	item.set("event_id", newItem.event_id);

  return item.save()
  .then((itemResult) => {
    // Execute any logic that should take place after the object is saved.
    alert('New item created with objectId: ' + itemResult.id);
  }, (error) => {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and message.
    alert('Failed to create new object, with error code: ' + error.message);
  });
};
