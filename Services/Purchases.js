const axios = window.axios;
const url =
  "https://my-json-server.typicode.com/kellybuchanan/WebDev-Spring2021";

export const createUser = (
  itemNumber,
  itemName,
  quantity,
  pricePerUnit,
  purchased
) => {
  return axios({
    method: "post",
    url: `${url}/users`,
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

export const getAllPurchases = () => {
  return axios
    .get(`${url}/purchases`)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((err) => {
      console.log("GET Error: ", err);
    });
};
