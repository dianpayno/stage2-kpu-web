type VotebarProps = {
    dataPaslon:{
        id:number,
        nama:string,
        vote:number,
        image:string,
      
    }

}

const VoteBar = (props:VotebarProps) => {
    const {dataPaslon} = props

    const bgColorPaslon1 = "bg-[#FF6384]"
    const bgcolorPaslon2 = "bg-[#FFCD56]"
    const bgcolorPaslon3 = "bg-[#36A2EB]"

  return (
    
                   <div 
                   className={`${dataPaslon.id === 1 ? bgColorPaslon1 : dataPaslon.id === 2 ? bgcolorPaslon2 : bgcolorPaslon3} w-full flex justify-start items-center gap-3 ps-4 pe-8 py-2 mb-4 rounded-md
                   hover:scale-105 cursor-pointer trasition duration-300`}>
                    <div className="border border-white border-3 rounded-lg overflow-hidden my-1">
                    <img className="w-[70px] h-[90px] object-cover" src={dataPaslon.image} alt="" />
                    </div>
                    <div className="uppercase text-2xl font-bold text-[#5E0000]">
                        <p className="text-[#5E0000]">{dataPaslon.nama}</p>
                        <p>{(dataPaslon.vote/1000)*100} %</p>
                    </div>
                    </div>
  )
}

export default VoteBar