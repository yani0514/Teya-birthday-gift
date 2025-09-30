import { Link } from "react-router-dom";

export default function HappyBirthday() {
  return (
    <div
      className="w-screen h-screen flex justify-center items-end bg-center"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}assets/photos/version6.png)`,
      }}
    >
      <div className="w-[80%] md:w-[60%] mb-8 p-8 bg-[rgba(255,255,255,0.75)] text-gray-800 text-center flex flex-col justify-center items-center backdrop-blur rounded-3xl shadow-2xl">
        {/* Заглавие */}
        <h1 className="text-4xl font-bold text-pink-600 mb-4">
          🎂 Честит 18-ти рожден ден, Тея! 🎂
        </h1>

        {/* Описание */}
        <p className="text-xl mb-6">
          💌 Това е твоето специално място, където винаги можеш да намериш
          усмивка. 💌
          <br />✨ Натисни бутона по-долу, за да получиш произволно пожелание,
          снимка или видео от своите близки. ✨
        </p>

        {/* Бутон */}
        <Link className="" to={"wishes"}>
          <button className="bg-pink-600 hover:bg-pink-700 text-white text-xl font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-110 transition duration-300 ease-in-out cursor-pointer">
            Покажи ми любов 💗
          </button>
        </Link>
      </div>
    </div>
  );
}
