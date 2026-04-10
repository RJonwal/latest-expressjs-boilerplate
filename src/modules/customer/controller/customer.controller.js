const service = require("../service/customer.service");

exports.createCustomer = async (req, res) => {
  const data = await service.createCustomer(req.body);
  res.json({ success: true, data });
};

exports.getCustomers = async (req, res) => {
  const data = await service.getCustomers();
  res.json({ success: true, data });
};