
const Jumbotron = () => {


  return (
  
        <div className='w-full flex justify-center items-center pt-[5.3rem] pb-[1.3rem]
        bg-gradient-to-l from-[#fff] from-30% to-[#7506068A] rounded-b-xl
        '>
            <div className='relative bg-gradient-to-l from-[#5C0303] from-50% to-[#7506068A] container h-[400px] rounded-xl'>
                <img src="../../public/brandred.png" alt="kpu" className="w-[220px] opacity-20 absolute left-[-3px] top-[-3px]" />
            
            <div className="flex justify-around px-16 gap-7">
                <div className="mt-60 transition ease-in-out duration-300 hover:scale-105">
                    <p className="text-white uppercase text-5xl font-bold">selamat datang</p>
                    <p className="text-white uppercase text-xl font-bold pt-1"
                    >pemilu presiden dumbways.id yang jujur dipilih melalui sebuah arti nama</p>
                </div>
                <div>
                   <img src="../../public/kotaksuara.png" alt="kpu" className="w-[220px] mr-32 transition ease-in-out duration-300 hover:scale-95" />
                </div>

            </div>
            
            
            
            </div>
        </div>
    
  )
}

export default Jumbotron