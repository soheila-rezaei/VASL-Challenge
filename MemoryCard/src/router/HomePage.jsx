import { useEffect, useState } from "react";
import items from "../constant/dataInfo";
import Card from "./Card";

function HomePage(){
  
  //  لیست کارت‌های بازی (ترتیب شانسی)
  const [cards, setCards] = useState([]);
  
  //  ایندکس کارت‌هایی که الان برگشته‌اند (حداکثر ۲ تا)
  const [flipped, setFlipped] = useState([]);
  
  //  ایندکس کارت‌هایی که جفت شده‌اند
  const [matched, setMatched] = useState([]);
  
  //  آیا کاربر می‌تواند کلیک کنه؟
  const [canClick, setCanClick] = useState(true);


  // وقتی صفحه لود شد
  useEffect(() => {
    shuffleCards();
  }, []);


  const shuffleCards = () => {
    // 1. هر میوه را دو بار کپی کن (یک جفت)
    const pairs = [...items, ...items];
    
    // 2. بهم بزن (shuffle)
    const shuffled = [...pairs];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      // جابجایی دو عنصر
      [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
    }
    
    // 3. ذخیره در state
    setCards(shuffled);
    setFlipped([]);
    setMatched([]);
    setCanClick(true);
  };

  const handleCardClick = (index) => {
    // شرط ۱: اگر کلیک قفل شده، برگرد
    if (!canClick) return;
    
    // شرط ۲: اگر این کارت قبلاً برگشته، برگرد
    if (flipped.includes(index)) return;
    
    // شرط ۳: اگر این کارت قبلاً جفت شده، برگرد
    if (matched.includes(index)) return;
    
    // شرط ۴: اگر ۲ کارت برگشته داریم، برگرد
    if (flipped.length >= 2) return;

    // کارت جدید را به لیست برگشته‌ها اضافه کن
    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    // اگر الان ۲ کارت برگشته داریم...
    if (newFlipped.length === 2) {
      // 1. کلیک را قفل کن (کاربر نتواند کارت سوم را برگرداند)
      setCanClick(false);
      
      const [firstIndex, secondIndex] = newFlipped;
      const firstCard = cards[firstIndex];
      const secondCard = cards[secondIndex];
      
      // 2. بررسی کن آیا کارت‌ها جور هستند؟
      if (firstCard.id === secondCard.id) {
               // یکم صبر کن 
        setTimeout(() => {
          // این دو کارت را به لیست جفت‌شده‌ها اضافه کن
          setMatched([...matched, firstIndex, secondIndex]);
          // کارت‌های برگشته را خالی کن (مثل اینکه بسته شدند)
          setFlipped([]);
          // کلیک را آزاد کن
          setCanClick(true);
        }, 500);
      } else {
       //برابر نبودند
        setTimeout(() => {
          // فقط کارت‌های برگشته را خالی کن (یعنی بسته شوند)
          setFlipped([]);
          // کلیک را آزاد کن
          setCanClick(true);
        }, 1000);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center bg-gradient-to-r from-blue-100 via-purple-200 to-pink-100 
                animate-gradient-x p-4 ">
      <div className="max-w-3xl  p-5 flex flex-col rounded-2xl justify-center items-center mx-auto bg-gradient-to-r from-pink-200 to-purple-500">
      {/* صفحه بازی */}
        <div className="grid grid-cols-2  p-4 md:grid-cols-3 lg:grid-cols-4 gap-3 ">
          {cards.map((card, index) => (
            <Card
              key={index} // ایندکس به عنوان key (در بازی‌های ساده قابل قبول است)
              data={card}
              // کارت برگشته است اگر:
              // 1. الان در flipped باشد (کاربر کلیک کرده)
              // 2. یا قبلاً جفت شده باشد (در matched باشد)
              isFlipped={flipped.includes(index) || matched.includes(index)}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>
{/* اطلاعات تکمیلی */}
        <div className="mt-3 opacity-60 font-bold  p-2 ">
          <p>کارت‌های جفت شده: {matched.length / 2} از {items.length}</p>
          <p >کارت‌های برگشته: {flipped.length}</p>
          {/* امتیاز دادن */}
        <p> امتیاز: {matched.length > 0 ? matched.length * 5 : 0}</p>
        {/* وقتی که بازی به اتمام رسید یه مودال نمایش داده میشه  */}
        {matched.length === 16 && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-white rounded-xl shadow-lg text-center">
      <p className="text-2xl font-bold mb-4">آفرین!</p>
      <p className="text-gray-700 mb-6">بازی به اتمام رسید</p>
      <button
        onClick={shuffleCards}
        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        بازی جدید
      </button>
    </div>
  </div>
)}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
