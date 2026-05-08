const OwnerProfile = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 text-center pb-20">
      {/* name */}
      <h1 className="text-4xl font-bold mb-10 text-gray-800 leading-tight">
        {" "}
        MISSION:
        <br />
        <span className="text-blue-600">THE INFINITE LOOP WORLD TOUR 2026</span>
      </h1>

      {/* photo box */}
      <img
        src="/summer-yay.png"
        alt="K.K and K.N profile picture"
        className="w-72 h-72 object-cover mb-10 rounded-2xl shadow-lg border-4 border-white"
      />

      <div className="max-w-2xl mx-auto bg-white border-2 border-dashed border-blue-300 rounded-2xl shadow-md p-8 relative">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-20 h-8 bg-blue-100/80 rotate-2 rounded shadow-sm"></div>

        <h2 className="text-2xl font-bold mb-6 text-blue-900 mt-2">
          🎢 ภารกิจหยุดรันโค้ด แล้วไปรันบนราง! 🎢
        </h2>

        <div className="text-gray-600 leading-relaxed text-left">
          {/* บทนำ */}
          <p className="mb-8 text-center text-sm md:text-base">
            ร้อนนี้ เมื่อ Logic ในหัวเริ่มตีกันจนเป็นเส้นสปาเก็ตตี้
            <br />
            สองปรมาจารย์แห่ง JSD-12 จึงขอประกาศยุติการดีบักชั่วคราว
            <br />
            แล้วหันไป{" "}
            <span className="font-bold text-blue-500">
              "ดีบักแรงโน้มถ่วง"
            </span>{" "}
            แทน
            <br />
            <br />
            <span className="inline-block bg-blue-50 text-blue-800 px-6 py-3 rounded-xl font-medium border border-blue-100 shadow-sm">
              ขอเชิญทุกท่านร่วมเป็นสักขีพยานในมหากาพย์การเดินทาง
              <br />
              ที่เสียวไส้กว่าการลืมใส่ Dependency Array ใน useEffect!
            </span>
          </p>

          <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100 shadow-inner mb-8">
            <h3 className="font-bold text-gray-800 text-lg mb-4 text-center border-b border-blue-200 pb-2">
              โฉมหน้า Chief Thrill Officers (CTOs)
            </h3>

            <ul className="space-y-4">
              <li>
                <strong className="text-blue-900 text-base italic">
                  Mr. N (The Gravity Debugger):
                </strong>
                <p className="text-sm mt-1">
                  คุณนิติ ผู้ที่เชื่อว่าถ้าเราหมุนตัวครบ 360 องศาบนรถไฟเหาะ
                  สมองจะ Re-render ใหม่จนฉลาดขึ้น!
                </p>
              </li>
              <li>
                <strong className="text-blue-900 text-base italic">
                  Mr. K (The High-Speed Logic Master):
                </strong>
                <p className="text-sm mt-1">
                  คุณกัน ผู้คอยคุมจังหวะ Drop ให้เป๊ะเหมือนเขียนโค้ด Clean
                  Architecture แต่เสียงกรี๊ดอาจจะไม่ Clean เท่าไหร่
                </p>
              </li>
            </ul>
          </div>

          {/* Guidelines inside the card for better look */}
          <div className="space-y-6 text-sm md:text-base">
            <p>
              <strong className="text-gray-800">DRESS CODE:</strong> anything
              but nude
            </p>

            <div>
              <h3 className="font-bold text-gray-800 text-lg mb-2">
                ข้อควรระวังก่อน Join Trip:
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>ห้ามส่ง pull request ขณะอยู่บนจุดสูงสุดของรถไฟเหาะ</li>
                <li>
                  ใครกรี๊ดเป็นเสียง Syntax Error จะต้องเลี้ยงข้าวเย็นเพื่อนๆ
                </li>
                <li>
                  ห้ามถามหา Responsiveness เพราะรถไฟเหาะมันจะส่ายตามใจมันเอง!
                </li>
              </ul>
            </div>
          </div>

          {/* Final Quote */}
          <blockquote className="italic text-center mt-10 border-t border-dashed border-gray-200 pt-6 text-gray-500">
            "ชีวิตก็เหมือนรถไฟเหาะ... มีขึ้นมีลง
            <br />
            แต่ถ้าอยู่กับพวกผม รับรองว่าไม่มีหลุดพ้นจาก Infinite Loop"
            <br />
            <span className="font-bold text-gray-800 mt-2 inline-block">
              — Mr. N & Mr. K
            </span>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default OwnerProfile;
