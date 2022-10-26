import Parse from "parse";

export default function getItems() {
	const Item = Parse.Object.extend("items");
	const query = new Parse.Query(Item);

	return query.find().then((result) => {
		return result;
	});
}
