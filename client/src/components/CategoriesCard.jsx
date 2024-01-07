
const CategoriesCard = ({ imgURL, equ, label, subtext}) => {
  return (

    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[10px] shadow-3xl px-6 py-6">
      <div className="w-full h-30 flex justify-center items-center">
        <img src={imgURL} alt={label} className="w-full"/>
      </div>
      <div className="w-full flex justify-center mt-4">
        <img src={equ} alt={label} className="w-full"/>
      </div>
      <h3 className='mt-5 font-poppins text-3xl leading-normal font-bold'>
        {label}
      </h3>
      <p className='mt-2 break-words font-montserrat font-poppins text-[#63706d] text-lg leading-normal'>
        {subtext}
      </p>
    </div>
    
  )
}

export default CategoriesCard