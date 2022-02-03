import React from "react";

import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

import "./styles/squid-form.pcss";
import { ApiClient } from "../../backend/ApiClient";

export const SquidForm = ({ specialPowers }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate } = useMutation((reqSquid) =>
    ApiClient.post("/squids", reqSquid).then((res) => res.data)
  );

  return (
    <form onSubmit={handleSubmit(mutate)} className="squid-form">
      <h4 className="squid-form__header">Create a new squid:</h4>
      <label htmlFor="name" className="squid-form__text">
        <span>Name: </span>
        <input {...register("name", { required: "name is required" })} type="text" />
        <p>{errors.name?.message}</p>
      </label>
      <label htmlFor="species" className="squid-form__text">
        <span>Species: </span>
        <input {...register("species", { required: "species is required" })} type="text" />
        <p>{errors.species?.message}</p>
      </label>
      <fieldset id="specialPower" className="squid-form__fieldset">
        <legend>Special Powers:</legend>
        <div className="squid-form__radio-buttons">
          {specialPowers.map((power) => (
            <label htmlFor={power}>
              <input
                {...register("specialPower")}
                className="squid-form__radio-button"
                type="radio"
                name="specialPower"
                value={power}
              />
              {power}
            </label>
          ))}
        </div>
      </fieldset>
      <input type="submit" className="squid-form__submit" value="Submit Squid" />
    </form>
  );
};
