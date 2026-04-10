const Customer = require("../model/customer.model");

const createCustomer = async (data) => {
  return await Customer.create(data);
};

const getCustomers = async () => {
  return await Customer.find();
};

module.exports = {
  createCustomer,
  getCustomers,
};