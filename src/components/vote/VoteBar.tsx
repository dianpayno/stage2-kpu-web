type VotebarProps = {
    dataPaslon:any
}

const VoteBar = (props:VotebarProps) => {
    const {dataPaslon} = props

    const bgColorPaslon1 = "bg-[#FF6384]"
    const bgcolorPaslon2 = "bg-[#FFCD56]"
    const bgcolorPaslon3 = "bg-[#36A2EB]"

  return (
    
                   <div 
                   className={`${dataPaslon.nomer_urut === "1" ? bgColorPaslon1 : dataPaslon.nomer_urut == "2"  ? bgcolorPaslon2 : bgcolorPaslon3} w-full flex justify-start items-center gap-3 ps-4 pe-8 py-2 mb-4 rounded-md
                   hover:scale-105 cursor-pointer trasition duration-300`}>
                    <div className="border border-white border-3 rounded-lg overflow-hidden my-1">
                    <img className="w-[70px] h-[90px] object-cover" src={dataPaslon.image} alt={dataPaslon.paslon_name} />
                    </div>
                    <div className="uppercase text-2xl font-bold text-[#5E0000]">
                        <p className="text-[#5E0000]">{dataPaslon.paslon_name}</p>
                        <span>{dataPaslon.presentase}</span>
                        <span
                        className="ms-3 text-sm"
                        >{dataPaslon.jml_pemilih} suara</span>
                    </div>
                    </div>
  )
}

export default VoteBar