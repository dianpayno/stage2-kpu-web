type PaslonCardprops = {
    paslonPresiden: {
     id: number,
     nama: string,
     image: string,
     vote: number   
     akumulasi: number
    }
    
}

const PaslonCard = (props:PaslonCardprops) => {
    const {paslonPresiden} = props
  return (
    <div>
         <div className="relative flex justify-center hover:scale-95 transition ease-in-out duration-300">
            <div className="overflow-hidden">
                <img className="w-full h-[250px] object-cover"
                src={paslonPresiden.image} alt="kpu"/>  
            </div>
                    <div className="absolute w-[300px] bg-gradient-to-l from-[#5C0303] from-50% to-[#7506068A]
                    bottom-[-70px] px-3 py-2 
                    ">
                            <p className="text-white uppercase text-xl font-bold text-center">{paslonPresiden.nama}</p>
                            <p className="text-white uppercase text-md font-bold text-center">capres dumbways 2024-2029</p>
                        
                            <p className="text-white uppercase text-xs font-bold text-center">Vote : {paslonPresiden.vote} suara</p>
                            <p className="text-white uppercase text-xs font-bold text-center">akumulasi : {paslonPresiden.akumulasi}%</p>
                        
                    </div>
                
                <div className="border rounded-full border-[#5C0303] bg-white mb-8 absolute
                bottom-[-1.5rem] left-3 text-[#5C0303]
                ">
                    <span className="w-[40px] h-[40px] text-2xl font-bold  rounded-full flex justify-center items-center">{paslonPresiden.id}</span>
                </div>
             </div>
           
    </div>
  )
}

export default PaslonCard