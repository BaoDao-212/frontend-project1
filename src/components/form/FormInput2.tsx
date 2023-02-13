import { FC, HTMLInputTypeAttribute } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export type FormInputProps = {
  id: string;
  labelText?: string;
  type?: HTMLInputTypeAttribute;
  errorMessage?: string;
  registerReturn?: UseFormRegisterReturn;
  defaultValue?: any;
};

export const FormInput2: FC<FormInputProps> = ({
  labelText,
  id,
  type,
  errorMessage,
  registerReturn,
  defaultValue,
}) => {
  return (
    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
      <label htmlFor={id} className="text-gray-700 font-medium sm:text-sm">
        {labelText}
      </label>
      <div className="mt-1 sm:mt-0 sm:col-span-2">
        <input
          {...registerReturn}
          defaultValue={defaultValue}
          id={id}
          type={type}
          className="max-w-lg rounded appearance-none w-full p-2 h-full border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-semibold"
        />
        <p className="text-xs text-red-500 pt-[2px] h-3">{errorMessage}</p>
      </div>
    </div>
  );
};
