const express = require("express");
const router = express.Router();

const ctrl = require("../controller/customer.controller");
const validate = require("../../../middlewares/validation/validate.middleware");

const {
  createCustomerSchema,
} = require("../validation/customer.validation");

router.post("/", validate(createCustomerSchema), ctrl.createCustomer);
router.get("/", ctrl.getCustomers);

module.exports = router;