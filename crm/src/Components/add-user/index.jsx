import React from "react";

const AddUser = () => {
  return (
    <div className="pl-15 pt-9">
      <div className="text-2xl pb-[9%]">
        <h2>Yeni Müştəri Əlavə Et</h2>
      </div>

      <div className="bg-white shadow-2xl w-[100vh]  p-5 rounded-2xl">
        <form>
          <div className="flex justify-between flex-row  ">
            <div>
              <label className="flex flex-col">
                Ad
                <input
                  type="text"
                  placeholder="Adınızı daxil edin"
                  className="border  border-gray-200 outline-none rounded-lg pl-3 py-2"
                />
              </label>

              <label className="flex flex-col pt-10">
                Telefon nömrəsi
                <input
                  type="number"
                  placeholder="+994 xx xxx xx xx"
                  className="border border-gray-200 outline-none rounded-lg pl-3 py-2"
                />
              </label>
            </div>

            <div>
              <label className="flex flex-col">
                Soyad
                <input
                  type="text"
                  placeholder="Soyadınızı daxil edin"
                  className="border border-gray-200 outline-none rounded-lg pl-3 py-2"
                />
              </label>

              <label className="flex flex-col pt-10">
                Şöbə
                <input
                  type="text"
                  placeholder="Daxil edin"
                  className="border border-gray-200 outline-none rounded-lg pl-3 py-2"
                />
              </label>
            </div>
          </div>

          <label className="flex flex-col pt-8">
            Qeyd
            <textarea
              placeholder="Əlavə məlumat"
              className="border border-gray-200 outline-none rounded-lg p-3 h-36 "
            />
          </label>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
