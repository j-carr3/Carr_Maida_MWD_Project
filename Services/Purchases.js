const axios = window.axios;

// TODO: Fix this function so that it adds to the json when called
export const createPurchase = (
  itemNumber,
  itemName,
  quantity,
  pricePerUnit,
  purchased
) => {
  return axios({
    method: "post",
    data: {
      itemNumber,
      itemName,
      quantity,
      pricePerUnit,
      purchased
    },
    headers: {
      "Content-Type": "application/json"
    },
    json: true
  })
    .then((response) => {
      console.log("POST response: ", response);
    })
    .catch((err) => {
      console.log("POST error: ", err);
    });
};

// This functions returns all purchases that are currently in the items.json
// file, should rename to purchased.json and toPurchase.json
export const getAllPurchases = () => {
  return axios
    .get("/../Data/items.json") // One issue encountered early was paths, make sure that we do it correctly here and in imports
    .then((response) => {
      console.log(response.data.data[1]); // Testing how to drill into data
      return response.data.data;
    })
    .catch((err) => {
      console.log("GET Error: ", err);
    });
};
