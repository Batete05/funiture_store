"use client";

const Address = ({ name, address, contact, onEdit, onRemove }) => {
  return (
    <div className=" p-6 space-y-4 text-[#17183B] w-[800px] ml-[30px] mt-[30px]">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">{name}</h1>
        <div className="space-x-2 flex">
          <button
            onClick={onEdit}
            className="text-[#17183B] px-3 py-1 rounded hover:underline font-bold"
          >
            Edit
          </button>
          <div className="text-gray-400 h-[20px]">|</div>
          <button
            onClick={onRemove}
            className="text-[#E14B4B] px-3 py-1 rounded hover:underline"
          >
            Remove
          </button>
        </div>
      </div>

      {/* Address */}
      <div className="space-y-1">
        <p className="text-[#17183B]">{address}</p>
        <p className="text-[#17183B] flex space-x-2">
          {" "}
          <p className="font-bold">Contact:</p> {contact}
        </p>
      </div>
    </div>
  );
};

export const AddressCard = () => {
  function handleEdit() {
    console.log("Edit clicked");
  }
  function handleRemove() {
    console.log("Remove clicked");
  }

  return (
    <>
      <Address
        name="Huzefa Bagwala"
        address="1131 Dusty Townline, Jacksonville, TX 40322"
        contact="(936) 361-0310"
        onEdit={handleEdit}
        onRemove={handleRemove}
      />
      <div className="border mt-[20px]  ml-[50px]"></div>
      <Address
        name="Huzefa Bagwala"
        address="1131 Dusty Townline, Jacksonville, TX 40322"
        contact="(936) 361-0310"
        onEdit={handleEdit}
        onRemove={handleRemove}
      />
    </>
  );
};
