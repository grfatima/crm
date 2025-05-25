import React from "react";

const Archive = () => {
  return (
    <div className="pl-15 pt-9">
      <div className="text-2xl pb-[15%]">
        <h2>Arxivlənmiş Müştərilər</h2>
      </div>

      <div>
        <form>
          <input
            className="border  border-gray-200 outline-none py-2 pl-3 rounded-lg w-[70vh]"
            type="text"
            placeholder="Ad, Soyad və Telefon üzrə axtar..."
          />
        </form>
      </div>
    </div>
  );
};

export default Archive;
