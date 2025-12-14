function Footer() {
  return (
    <footer className=" py-2  text-center   overflow-hidden relative border-t-2 border-purple-300">
      {/* گرادیانت هماهنگ */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-purple-200 to-pink-100 "></div>

      <div className="relative z-10">
        <p className="text-lg font-semibold mb-2">بازی حافظه</p>
        <p className="text-sm opacity-90 mb-3">پروژه تستی شرکت وصل </p>

        <div className="flex justify-center gap-4 text-sm">
          <span>🎮 سرگرمی آموزشی</span>
          <span>•</span>
          <span>🧠 تمرین ذهن</span>
          <span>•</span>
          <span>🏆 چالش روزانه</span>
        </div>

        <p className="mt-4 text-xs opacity-80">CssTailwind | React.js | Vite</p>
      </div>
    </footer>
  );
}
export default Footer;
