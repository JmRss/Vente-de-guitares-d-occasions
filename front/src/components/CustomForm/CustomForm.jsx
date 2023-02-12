import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export default function CustomForm() {
  const navigate = useNavigate();
  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("basket"))
  );

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .test(
        "no-numbers",
        "Le prénom ne peut pas contenir de chiffre",
        (value) => !/\d/.test(value)
      )
      .required("Le prénom est requis"),
    lastName: Yup.string()
      .test(
        "no-numbers",
        "Le nom ne peut pas contenir de chiffre",
        (value) => !/\d/.test(value)
      )
      .required("Le nom est requis"),
    address: Yup.string().required("L'adresse est requise"),
    city: Yup.string().required("La ville est requise"),
    email: Yup.string()
      .email("Veuillez saisir une adresse email valide")
      .required("L'email est requis"),
  });

  const fetchData = async (values) => {
    try {
      const res = await fetch("http://localhost:4000/api/order", {
        method: "POST",
        body: JSON.stringify({
          firstName: values.firstName,
          lastName: values.lastName,
          address: values.address,
          city: values.city,
          email: values.email,
          basket: basket,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await res.json();
      localStorage.clear();
      navigate("/order", { state: { response: json.orderId } });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        email: "",
      }}
      validationSchema={validationSchema}
      onSubmit={fetchData}
    >
      {({ handleSubmit, errors, touched }) => (
        <div className="cart__order">
          <Form
            method="get"
            className="cart__order__form"
            onSubmit={handleSubmit}
          >
            <div className="cart__order__form__question">
              <label htmlFor="firstName">Prénom: </label>
              <Field type="text" name="firstName" id="firstName" required />
            </div>
            {errors.firstName && touched.firstName && (
              <p id="firstNameErrorMsg">{errors.firstName}</p>
            )}
            <div className="cart__order__form__question">
              <label htmlFor="lastName">Nom: </label>
              <Field type="text" name="lastName" required />
            </div>
            {errors.lastName && touched.lastName && (
              <p id="lastNameErrorMsg">{errors.lastName}</p>
            )}
            <div className="cart__order__form__question">
              <label htmlFor="adress">Adresse: </label>
              <Field type="text" name="address" id="address" required />
            </div>
            {errors.address && touched.address && (
              <p id="adressErrorMsg">{errors.address}</p>
            )}
            <div className="cart__order__form__question">
              <label htmlFor="city">Ville: </label>
              <Field type="text" name="city" id="city" required />
            </div>
            {errors.city && touched.city && (
              <p id="cityErrorMsg">{errors.city}</p>
            )}
            <div className="cart__order__form__question">
              <label htmlFor="email">Email: </label>
              <Field type="email" name="email" id="email" required />
            </div>
            {errors.email && touched.email && (
              <p id="emailErrorMsg">{errors.email}</p>
            )}
            <button
              type="submit"
              className="button_addtocart "
              value="Commander !"
              id="order"
            >
              Commander !
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
}
