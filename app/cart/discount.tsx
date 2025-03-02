import { AiOutlinePercentage } from "react-icons/ai";

export const Discount = () => {
  return (
    <div
      className="flex text-[#17183B] items-center border-[#3AA39F] border-2 rounded-md p-2 w-[700px] h-[60px] ml-[40px]"
      style={{ backgroundColor: "rgba(58, 163, 159, 0.1)" }} // Custom greenish color with 10% opacity
    >
      <AiOutlinePercentage className="text-[#3AA39F]" />
      <p className="ml-2">
        10% Instant Discount with Federal Bank Debit Cards on a min spend of
        $150. TCA
      </p>
    </div>
  );
};
