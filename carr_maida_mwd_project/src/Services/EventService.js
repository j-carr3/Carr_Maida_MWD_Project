import Parse from "parse";

export default function getEvents() {
  const data = Parse.Object.extend("events");
  const query = new Parse.Query(data);

  return query.find().then((result) => {
    return result;
  });
}
