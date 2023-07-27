export default function Modal ({open, onClose, children, image}) {
  return (
    <div 
      onClick={onClose} 
      className={`
      absolute h-[400px] w-full inset-0 flex justify-center items-center
      transition-colors z-index
      ${open ? "visible bg-black/20" : "invisible"}
    `}>
      <div
        onClick={(e)=>e.stopPropagation()}
        className={`
          relative h-[400px] border-gradient-to-r from-green-400 to-blue-500
          bg-[#085eff] rounded-xl shadow p-6 transition-all
          ${open ? "absolute w-full h-full opacity-100" : "scale-125 opacity-0"}
        `}
      >
        <div 
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-full 
          test-gray-400 bg-[#00205e] hover:bg-gradient-to-r flex justify-center items-center
          from-pink-500 to-yellow-500 hover:text-white h-[25px] w-[25px]
        ">
          <p>x</p>
        </div>
        {children}
      </div>
    </div>
  )
}