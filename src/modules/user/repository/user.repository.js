const User = require("../model/user.model");

const create = (data) => User.create(data);
const findByEmail = (email) => User.findOne({ email });
const findAll = () => User.find();

module.exports = {
  create,
  findByEmail,
  findAll,
};