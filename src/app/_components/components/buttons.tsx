export const TextButton = ({
  text,
  className,
  onClick,
}: {
  text: string;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      className={`min-h-[26px] min-w-[99px] box-border ${className}`}
      onClick={onClick}
    >
      <div className="text-[#999] font-[18px] cursor-pointer flex flex-row justify-center items-center ">
        {text}
      </div>
    </div>
  );
};

export const NextButton = ({
  text,
  className,
  onClick,
  textColor,
}: {
  text: string;
  className?: string;
  onClick?: () => void;
  textColor?: string;
}) => {
  return (
    <div
      className={`cursor-pointer min-h-[26px] min-w-[99px] w-[404px] box-border py-[10px] rounded ${className}`}
      onClick={onClick}
    >
      <div
        className={`font-[18px] cursor-pointer flex flex-row justify-center items-center ${textColor}`}
      >
        {text}
      </div>
    </div>
  );
};
