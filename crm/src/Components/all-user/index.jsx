import React from "react";

const AllUser = () => {
  return (
    <div className="pl-15 pt-9">
      <div className="text-2xl pb-[15%]">
        <h2>Bütün Müştərilər</h2>
      </div>

      <div>
        <form>
          <input
            className="border  border-gray-400 outline-none py-2 pl-3 rounded-lg w-[70vh]"
            type="text"
            placeholder="Ad, Soyad və Telefon üzrə axtar..."
          />
        </form>
      </div>
    </div>
  );
};

export default AllUser;
