export const errors = [
  { name: "GENERIC_ERROR", message: "internal server error" },
  { name: "INVALID_EMAIL", message: "invalid email" },
  {
    name: "INPUT_CREATE_LEAD",
    message: "fullName, email and phone was required",
  },
  { name: "USER_EXISTING", message: "user already registered" },
  { name: "MISSING_REQUIRED_PARAMETER", message: "missing required parameter" },
  { name: "INVALID_PLAN", message: "invalid plan" },
  { name: "NOT_AUTHORIZED", message: "access not authorized" },
  { name: "PAYMENT", message: "error processing payment" },
  { name: "DATABASE", message: "internal error into database" },
  {
    name: "MAX_CUSTOMERS",
    message:
      "the number of customers on the list is greater than the maximum allowed",
  },
];
