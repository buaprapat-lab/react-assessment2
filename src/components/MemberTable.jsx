const Membertable = ({ members, isAdmin, onDelete }) => {
  return (
    <div vlassName="w-full mt-8 overflow-hidden rounded-lg shadow-sm border border-gray-200">
      <table className="w-full text-left bg-white">
        <thead className="bg-gray-100 border-b border-gray-200">
          <tr>
            <th className="py-3 px-6 font-bold text-gray-700">Name</th>
            <th className="py-3 px-6 font-bold text-gray-700">Last Name</th>
            <th className="py-3 px-6 font-bold text-gray-700">Position</th>
            {/* เงืิอนไข Admin ถึงจะแาดง col*/}
            {isAdmin && (
              <th className="py-3 px-6 font-bold text-gray-700 text-center">
                Action
              </th>
            )}
          </tr>
        </thead>

        {/*ส่วนเนื้อหาตาราง*/}
        <tbody>
          {/*เช็คว่ามีข้อมูลมั้ย ถ้าไม่มีโชว์ว่างๆ*/}
          {members.length === 0 ? (
            <tr>
              <td
                colSpan={isAdmin ? 4 : 3}
                className="py-8 text-center text-gray-500"
              >
                ไม่มีข้อมูลสมาชิก
              </td>
            </tr>
          ) : (
            /* ถ้ามีข้อมูล ใช้ map() วนลูปสร้างแถว (tr) ตามจำนวนข้อมูลที่มี */
            members.map((member) => (
              <tr
                key={member.id}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <td className="py-3 px-6 text-gray-600">{member.name}</td>
                <td className="py-3 px-6 text-gray-600">{member.lastName}</td>
                <td className="py-3 px-6 text-gray-600">{member.position}</td>

                {/* ถ้าเป้น admin ถึงจะแสดงปุ่ม delete */}
                {isAdmin && (
                  <td className="py-3 px-6 text-center">
                    <button
                      onClick={() => onDelete(member.id)}
                      className="text-red-500 hover:text-red-700 font-semicold transition-colors"
                    >
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Membertable;
