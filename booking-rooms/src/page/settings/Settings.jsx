import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { fetchSettings, updateSettings } from "../../service/booking";

const settingsSchema = z.object({
  minimum_stay: z.number().min(1, "Minimum stay must be at least 1 night"),
  breakfast: z.number(),
});

const Settings = () => {
  const [settings, setSettings] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(settingsSchema),
  });

  useEffect(() => {
    fetchSettings().then((res) => {
      setSettings(res[0]);
    });
  }, []);

  const onSubmit = (data) => {
    updateSettings(data).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="w-full">
      <h1 className="text-center text-3xl mt-6 font-bold text-gray-700">
        Settings
      </h1>
      <div className="flex justify-center items-center">
        <form className="w-[500px] mt-[30px]" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block">Minimum Stay</label>
            <input
              className="input"
              type="number"
              defaultValue={settings?.minimum_stay}
              {...register("minimum_stay", { valueAsNumber: true })}
            />
            {errors.minimum_stay && <p>{errors.minimum_stay.message}</p>}
          </div>
          <div>
            <label className="block">Breakfast</label>
            <input
              className="input"
              type="number"
              defaultValue={settings?.breakfast}
              {...register("breakfast", { valueAsNumber: true })}
            />
            {errors.breakfast && <p>{errors.breakfast.message}</p>}
          </div>
          <button className="btn-submit" type="submit">
            Change Settings
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
