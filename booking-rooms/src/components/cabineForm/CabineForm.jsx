import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { addEditCabine } from "../../service/cabine";
import { useDispatch } from "react-redux";
import { createCabine, editCabine } from "../../store/cabineSlice";

const schema = z.object({
  name: z.string().nonempty("Name is required"),
  maxCapabilites: z.string().nonempty("Max Capabilities is required"),
  regularPrice: z.string().nonempty("Regular Price is required"),
  discount: z.string().nonempty("Discount is required"),
  description: z.string().nonempty("Description is required"),
  image: z.string().nonempty("Image is required"),
});

const CabineForm = ({ cabineToEdit, id, closeModal }) => {
  console.log(cabineToEdit);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const isEdit = cabineToEdit ? true : false;

  const onSubmit = (data) => {
    if (isEdit) {
      addEditCabine(id, data).then((res) => {
        dispatch(editCabine({ id: id, updatedCabine: res[0] }));
        closeModal();
      });
    } else {
      addEditCabine(null, data).then((res) => {
        dispatch(createCabine(res[0]));
        closeModal();
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 p-4 w-[300px] mx-auto"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          defaultValue={cabineToEdit?.name || ""}
          {...register("name")}
          className="input"
        />
        {errors.name && (
          <p className="text-red-500 text-xs">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Max Capabilities
        </label>
        <input
          defaultValue={cabineToEdit?.maxCapabilites || ""}
          {...register("maxCapabilites")}
          className="input"
        />
        {errors.maxCapabilites && (
          <p className="text-red-500 text-xs">
            {errors.maxCapabilites.message}
          </p>
        )}
      </div>

      <div>
        <label className="label">Regular Price</label>
        <input
          defaultValue={cabineToEdit?.regularPrice || ""}
          {...register("regularPrice")}
          className="input"
        />
        {errors.regularPrice && (
          <p className="error-input">{errors.regularPrice.message}</p>
        )}
      </div>

      <div>
        <label className="label">Discount</label>
        <input
          defaultValue={cabineToEdit?.discount || ""}
          {...register("discount")}
          className="input"
        />
        {errors.discount && (
          <p className="error-input">{errors.discount.message}</p>
        )}
      </div>

      <div>
        <label className="label">Description</label>
        <textarea
          defaultValue={cabineToEdit?.description || ""}
          {...register("description")}
          className="input"
        />
        {errors.description && (
          <p className="error-input">{errors.description.message}</p>
        )}
      </div>

      <div>
        <label className="label">Image</label>
        <input
          defaultValue={cabineToEdit?.image || ""}
          {...register("image")}
          className="input"
        />
        {errors.image && <p className="error-input">{errors.image.message}</p>}
      </div>

      <div>
        <button type="submit" className="btn-submit">
          {cabineToEdit ? "Edit" : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default CabineForm;
