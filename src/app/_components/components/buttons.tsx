export const TextButton = ({ text }: { text: string }) => {
  return (
    <div className="min-h-[26px] min-w-[99px] box-border">
      <div className="text-gray-400 font-[18px] cursor-pointer flex flex-row justify-center align-center ">
        {text}
      </div>
    </div>
  );
};
