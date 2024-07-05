import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { addCabine } from "../../service/cabine";

const schema = z.object({
  name: z.string().nonempty("Name is required"),
  maxCapabilites: z.string().nonempty("Max Capabilities is required"),
  regularPrice: z.string().nonempty("Regular Price is required"),
  discount: z.string().nonempty("Discount is required"),
  description: z.string().nonempty("Description is required"),
  image: z.string().nonempty("Image is required"),
});

const CabineForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    if (data) {
      addCabine(data).then((res) => console.log(res));
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
          {...register("name")}
          className="mt-1 block w-full rounded-md h-[30px] border-gray-300 shadow-sm focus:border-orange-600 focus:ring focus:ring-orange-600  outline-none"
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
          {...register("maxCapabilites")}
          className="mt-1 block w-full rounded-md h-[30px] border-gray-300 shadow-smfocus:border-orange-600 focus:ring focus:ring-orange-600  outline-none"
        />
        {errors.maxCapabilites && (
          <p className="text-red-500 text-xs">
            {errors.maxCapabilites.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Regular Price
        </label>
        <input
          {...register("regularPrice")}
          className="mt-1 block w-full rounded-md h-[30px] border-gray-300 shadow-sm focus:border-orange-600 focus:ring focus:ring-orange-600  outline-none"
        />
        {errors.regularPrice && (
          <p className="text-red-500 text-xs">{errors.regularPrice.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Discount
        </label>
        <input
          s
          {...register("discount")}
          className="mt-1 block w-full rounded-md h-[30px] border-gray-300 shadow-sm focus:border-orange-600 focus:ring focus:ring-orange-600  outline-none"
        />
        {errors.discount && (
          <p className="text-red-500 text-xs">{errors.discount.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          {...register("description")}
          className="mt-1 block w-full rounded-md h-[30px] border-gray-300 shadow-sm focus:border-orange-600 focus:ring focus:ring-orange-600  outline-none"
        />
        {errors.description && (
          <p className="text-red-500 text-xs">{errors.description.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Image</label>
        <input
          {...register("image")}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-600 focus:ring focus:ring-orange-600  outline-none"
        />
        {errors.image && (
          <p className="text-red-500 text-xs">{errors.image.message}</p>
        )}
      </div>

      <div>
        <button
          type="submit"
          className=" py-2 px-4  text-white bg-orange-600 w-full rounded-lg"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CabineForm;
