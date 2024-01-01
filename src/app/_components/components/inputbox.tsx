export const Input = ({
  placeholder,
  label,
  className,
}: {
  placeholder: string;
  label: string;
  className?: string;
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {" "}
      <label className="text-[18px]">{label}</label>
      <input
        placeholder={placeholder}
        className="border rounded pl-[9px] py-[10px] box-border placeholder:font-[18px] w-[404px]"
      ></input>
    </div>
  );
};
