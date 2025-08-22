import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  firstName: Yup.string().required("Please Enter a Name"),
  lastName: Yup.string().required("Please Enter Your Last Name"),
  email: Yup.string()
    .email("Please Enter a Valid Email")
    .required("Email is Rquired"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "password must be at least 6 characters")
    .max(12, "password must not be more than 12 characters"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
  terms: Yup.boolean()
    .oneOf([true], "Please accept terms and policies")
    .required("Please accept terms and policies"),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter an email"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "password must be at least 6 characters")
    .max(12, "password must not be more than 12 characters"),
});
