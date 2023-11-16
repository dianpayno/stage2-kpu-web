import { dataLogin } from "../../data"

const Footer = () => {
  return (
    <div className=" bg-black">
        <div className="flex justify-start items-center px-20 py-7 gap-7 mb-2 border-b-[1px] border-white">
            <img src="../../public/logo.png" alt="kpu" className="w-[50px]"  />
            <div>
                <p className="uppercase text-white font-bold">dumbways.id</p>
                <p className="text-white text-xs ">Jl. Elang IV, Sawah Lama, Kec. Ciputat, <br/> Kota Tangerang Selatan, Banten 15413</p>
            </div>
        </div>
        <div>
            <p className="text-white text-center text-xs py-1 capitalize">
              Komisi Pemilihan Umum DumbWays.ID | <span>
                 {
                dataLogin.isLogin?`${dataLogin.username} 2023` :" 2023"
                }
              </span>
             </p>
        </div>
    </div>
  )
}

export default Footer