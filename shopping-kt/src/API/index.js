export const getOrders = () => {
  return fetch("https://dummyjson.com/carts/1").then((res) => res.json());
};

export const getRevenue = () => {
  return fetch("https://dummyjson.com/carts").then((res) => res.json());
};

export const getInventory = () => {
  return fetch("https://dummyjson.com/products").then((res) => res.json());
};

export const getCustomers = () => {
  return fetch("https://dummyjson.com/users").then((res) => res.json());
};
export const getComments = () => {
  return fetch("https://dummyjson.com/comments").then((res) => res.json());
};

export const getCategories = () => {
  return fetch(" https://api.escuelajs.co/api/v1/categories").then((res) => res.json())
  // .then(json=>console.log(json));this will not work cause your logging it and not returning it 
};

export const postCategories = () => {
  return fetch(" https://api.escuelajs.co/api/v1/categories").then((res) => res.json())
  // .then(json=>console.log(json));this will not work cause your logging it and not returning it 
};