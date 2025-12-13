function Card({ data, isFlipped, onClick }) {
  return (
    <div 
      className="w-20 h-20 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative w-full h-full transition-all duration-300 ">
        {/* پشت کارت */}
        <div 
          className={`absolute w-full h-full bg-gradient-to-r from-blue-400 to-purple-500    rounded-full flex items-center justify-center transition-opacity duration-300 ${
            isFlipped ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <span className="text-white text-2xl">?</span>
        </div>
        
        {/* جلوی کارت */}
        <div 
          className={`absolute w-full h-full bg-white rounded-full flex items-center justify-center p-2 transition-opacity duration-300 ${
            isFlipped ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={data.image} 
            alt={data.name}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
export default Card;
