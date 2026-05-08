| STEP 1 |
วางโครงสร้าง components / pages

components/
admin
AdminForm.jsx | input รับค่า 3 ช่อง Name, Last Name, Position + Save btn
HomeLayout.jsx
MemberTable.jsx | ใช้ร่วมกัน แล้วใช้ Props บอกว่าเป็น Admin? if Admin = true -> แสดงคอลัม Action และปุ่ม DELETE : ซ่อนคอลัมนั้นไว้
Navbar.jsx | ใช้ร่วมกัน
OwnerProfile.jsx | แสดงรูปและข้อความหน้า Owner

pages/ ควบคุม logic + ดึงข้อมูลจาก API
Home.jsx
Owner.jsx

src/
App.jsx

|STEP 2|
เขียนโค้ดโดยเริ่มจาก

src/
App.jsx
set up BrowserRouter และ Routes ให้กด Navbar แล้วสลับหน้า Home - Owner ได้

    Coding:
    1. เอา Navbar.jsx มาไว้บนสุด
    	<NavLink> ของ react-router เปลี่ยนหน้าโดยไม่ refresh มันมีความสามารถพิเศษคือรู้ว่าเราอยู่หน้าไหนอยู่
    	isActive เงื่อนไขให้เช็คว่า true -> text-black : flase -> ไม่ได้อยู่หน้านั้น text-gray เพื่อให้ user รุู้ว่าอยูหน้าไหน

    2. ควบคุม HomeLayout.jsx
    3. จัดการ routing คอยเช็คว่า URL เป็นอะไร
    	/	--> ไปหน้า Home
    	/owner	--> ไปหน้่า Owner
    	* install react-router-dom *

    	BrowserRouter
    	Routes
    	Route
    	Path="/" และ Path="/owner"

pages/
Owner.jsx
ทำให้เสร็จก่อนเพราะง่ายสุด เพื่อเช็คว่า css/layout ทำงานปกติ

pages/
Home.jsx
สร้าง State เก็บข้อมูลสมาชิก (Mock data ไว้ก่อน) และ State สำหรับเช็คว่าตอนนี้เป็น User OR Admin

components/
MemberTable.jsx
เอา data จาก Home.jsx มาแสดงผล
