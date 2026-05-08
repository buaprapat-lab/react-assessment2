import { useState, useEffect } from "react";
import MemberTable from "../components/MemberTable";
import AdminForm from "../components/Admin/AdminForm";

const Home = () => {
  const [sector, setSector] = useState("");
  // state เก็บข้อมูลสมาชิกเริ่มต้นเป็น arr
  const [members, setMembers] = useState([]);
  // สร้าง func ดึงข้อมูล GET Request
  const getData = async () => {
    try {
      const response = await fetch(
        "https://67eca027aa794fb3222e43e2.mockapi.io/members",
      );

      if (!response.ok) {
        throw new Error("Error! ดึงข้อมูลไม่สำเร็จ");
      }

      const data = await response.json();
      setMembers(data); // เอาข้อมูลเก็บใน state
      console.log("ข้อมูลที่ดึงมา:", data);
    } catch (error) {
      console.error("เกิดข้อผิดพลาด:", error);
    }
  };

  //สร้าง POST Request

  const createData = async (newData) => {
    try {
      const response = await fetch(
        "https://67eca027aa794fb3222e43e2.mockapi.io/members",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newData), // แปลงข้อมูลเป็น JSON
        },
      );

      if (response.ok) {
        getData();
      }
    } catch (error) {
      console.error("เกิดข้อมูลผิดพลาดในการบันทึกข้อมูล:", error);
    }
  };

  // ใช้ useEffect เพื่อเรียก function getData

  useEffect(() => {
    getData();
  }, []); // ทำแค่ครั้งเดียวตอนโหลดหน้าเว็ป

  // DELETE
  const deleteData = async (id) => {
    try {
      const response = await fetch(
        `https://67eca027aa794fb3222e43e2.mockapi.io/members/${id}`,
        {
          method: "DELETE",
        },
      );
      if (response.ok) {
        getData();
      }
    } catch (error) {
      console.error("เกิดข้อผิดพลาดในการลบข้อมูล", error);
    }
  };

  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-5xl font-bold mb-4">Generation Thailand</h1>

      <h2 className="text-4xl font-bold mb-16">
        {sector === ""
          ? "React - Assessment"
          : sector === "user"
            ? "Home - User Section"
            : "Home - Admin Section"}
      </h2>

      <div className="flex space-x-10 mb-16">
        <button
          onClick={() => setSector("user")} // เวลากดเปลี่ยนค่าเป็ณ user
          className="bg-white px-8 py-3 rounded-md shadow text-lg font-bold hover:bg-gray-50 transition-colors"
        >
          User Home Section
        </button>

        <button
          onClick={() => setSector("admin")} // กดแล้วเปลี่ยนค่าเป็น admin
          className="bg-white px-8 py-4 rounded-md shadow text-lg font-bold hover:bg-gray-50 transition-colors"
        >
          Admin home Section
        </button>
      </div>

      <div className="w-full max-w-4xl">
        {/* เรีียกใช้ membertable โหมด user ส่ง isAdmin = false*/}
        {sector === "user" && <MemberTable members={members} isAdmin={false} />}

        {/* เรีียกใช้ membertable โหมด Admin ส่ง isAdmin = true*/}
        {sector === "admin" && (
          <div>
            <div className="mb-8 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <AdminForm onCreate={createData} />
            </div>

            <MemberTable
              members={members}
              isAdmin={true}
              onDelete={deleteData}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
