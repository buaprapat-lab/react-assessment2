import { useState } from "react";

const AdminForm = ({ onCreate }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); //

    if (!name || !lastName || !position) {
      alert("กรุณากรอกข้อมูลให้ครบทุกช่อง");
      return;
    }

    //มัดรวมเป็น Obj ส่งกลับไปให้ func onCreate ที่หน้า Home
    onCreate({
      name: name,
      lastName: lastName,
      position: position,
    });

    setName("");
    setLastName("");
    setPosition("");
  };

  return (
    <div className="w-full">
      <h3 className="text-xl font-bold mb-4">Create User Here</h3>

      <form onSubmit={handleSubmit} className="flex gap-4 items-center">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded focus-ring-2 focus:ring-purple-400 bg-gray-50"
        />

        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded focus-ring2 focus:ring-purple-400 bg-gray-50"
        />

        <input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400 bg-gray-50"
        />

        <button
          type="submit"
          className="bg-purple-600 text-white px-8 py-2 rounded-md font-semibold hover:bg-purple-700 transition-colors shadow-sm"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default AdminForm;
