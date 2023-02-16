import { FC, useEffect, useState } from "react";

type Props = {
  setText: (value?: string) => void;
  labelText: string;
  className?: string;
};
const TextSearchInput: FC<Props> = ({ setText, labelText, className }) => {
  const [value, setValue] = useState<string>();
  const [firstTime, setFirstTime] = useState<boolean>(true);
  useEffect(() => {
    if (firstTime) {
      setFirstTime(false);
      return;
    }
    const timer = setTimeout(() => {
      setText(value);
    }, 500);
    return () => clearTimeout(timer);
  }, [value]);
  return (
    <div className="flex flex-col space-y-1">
      <h1 className="text-gray-700 font-medium">{labelText}</h1>
      <input
        value={value || ""}
        onChange={(e) => setValue(e.target.value)}
        type={"text"}
        className={
          "bg-slate-200 border border-slate-200 text-zinc-700-100 placeholder-slate-100 text-sm rounded-lg focus:ring-slate-100 focus:border-slate-300 block w-50 max-w-xs p-2.5 dark:bg-green-100 dark:border-green-400" +
            className || ""
        }
      ></input>
    </div>
  );
};
export default TextSearchInput;
