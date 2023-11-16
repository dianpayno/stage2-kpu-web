type PaslonCardprops = {
    paslonPresiden: {
     id: number,
     nama: string,
     image: string,
     vote: number   
     akumulasi: number
    }
  result:boolean
}

const PaslonCard = (props:PaslonCardprops) => {
    const {paslonPresiden, result} = props
  

  return (
    <div>
         <div className={`relative flex justify-center hover:scale-95 transition ease-in-out duration-300 `}>
           
              <img className={`${result?"w-[250px]" :"w-[320px]"} h-[250px] object-cover`}
                src={paslonPresiden.image} alt="kpu"/>  
           
                    <div className={`${result?"w-[200px]" :"w-[250px]"} absolute bg-gradient-to-l from-[#5C0303] from-50% to-[#7506068A]
                    bottom-[-54px] px-3 py-2 
                    `}>
                            <p className="text-white uppercase text-md font-bold text-center">{paslonPresiden.nama}</p>
                            <p className="text-white uppercase text-xs font-bold text-center">capres dumbways<br/> 2024-2029</p>
                        {
                          !result?(
                            <div>

                              <p className="text-white uppercase text-xs font-bold text-center">Vote : {paslonPresiden.vote} suara</p>
                              <p className="text-white uppercase text-xs font-bold text-center">akumulasi : {paslonPresiden.akumulasi}%</p>
                            </div>
                          ):null
                        }
                            
                        
                    </div>
                
                <div className="border rounded-full border-[#5C0303] bg-white mb-8 absolute
                bottom-2 left-1/2 -translate-x-1/2 text-[#5C0303]
                ">
                    <span className="w-[40px] h-[40px] text-2xl font-bold  rounded-full flex justify-center items-center">{paslonPresiden.id}</span>
                </div>
             </div>
           
    </div>
  )
}

export default PaslonCard