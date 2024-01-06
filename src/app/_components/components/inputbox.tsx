export const Input = ({
  placeholder,
  label,
  className,
  type,
  value,
  onChange,
}: {
  placeholder?: string;
  label: string;
  className?: string;
  type?: "text" | "password" | "email";
  value: string; // 입력 필드의 값
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // 변경 이벤트 핸들러
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label className="text-[18px]">{label}</label>
      <input
        type={type}
        value={value} // 외부에서 받은 값
        onChange={onChange} // 외부에서 받은 onChange 핸들러
        placeholder={placeholder}
        className="border rounded pl-[9px] py-[10px] box-border placeholder:font-[18px] w-[404px]"
      />
    </div>
  );
};
