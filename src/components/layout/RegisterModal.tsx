import InputElement from "../login/InputElement";
import ButtonElement from "../login/ButtonElement";
import {IoCloseCircle} from "react-icons/io5";

import {useState, useEffect} from "react"
import axios from "axios"

type RegisterProps ={
  handleModal : () => void;
}

const RegisterModal = (props: RegisterProps) => {

  const {handleModal} = props

  const [province, setProvince]=useState([])
  const [city, setCity]=useState([])
  const [kecamatan, setKecamatan]=useState([])
  const [kelurahan, setKelurahan]=useState([])
  const [selectedKelurahan, setSelectedKelurahan]=useState("")
  const [selectedKecamatan, setSelectedKecamatan]=useState("")
  const [selectedCity, setSelectedCity]=useState("")
  const [selectedProvince, setSelectedProvince]=useState("")

  const getDataProvince = async ()=>{
    const response = await axios.get("https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json")
   setProvince(response.data)
  }

  const getProvinsi = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProvince(event.target.value)
  }

  const getDataCity = async ()=>{
    const response = await axios.get(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${selectedProvince}.json`)
   setCity(response.data)
  }

  const getCity = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value)
  }

  const getDataKecamatan = async ()=>{
    const response = await axios.get(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${selectedCity}.json`)
    setKecamatan(response.data)
  }
  const getKecamatan = (event:React.ChangeEvent<HTMLSelectElement>)=>{
    setSelectedKecamatan(event.target.value)
  }

  const getDataKelurahan = async ()=>{
    const response = await axios.get(`https://www.emsifa.com/api-wilayah-indonesia/api/villages/${selectedKecamatan}.json`)
    setKelurahan(response.data)
  }

  const getKelurahan = (event:React.ChangeEvent<HTMLSelectElement>)=>{
    setSelectedKelurahan(event.target.value)
  }

useEffect (()=>{
  getDataProvince()
},[])

useEffect(()=>{
  getDataCity()
},[selectedProvince])

useEffect(()=>{
  getDataKecamatan()
},[selectedCity])

useEffect (()=>{
  getDataKelurahan()
},[selectedKecamatan])

  return (




<div className=" text-[#5C0303] lg:w-[50%] bg-white px-6 py-6 rounded relative z-20">
    <div>
        <p className="text-xl font-bold capitalize mb-5">register</p>
    </div>
    <form>
      <div className="grid grid-cols-2 gap-3 mb-2">
        <div className="">
              <InputElement type="text" name="nama lengkap"/>
            <label className="text-sm capitalize">jenis kelamin</label>
              <div className="flex items-center gap-2 mt-1 mb-3">
              <input type="radio" name="gender" value="male"/>
              <label htmlFor="male" className="text-xs">Pria</label>

              <input type="radio" name="gender" value="female"/>
              <label htmlFor="female" className="text-xs">Wanita</label>
              </div>
              
              <InputElement type="text" name="username"/>
              <InputElement type="password" name="password"/>
              <InputElement type="file" name="unggah foto profil"/>
        </div>

        <div>
        <InputElement type="text" name="detail alamat" placeholder="no rumah, jalan/gang"/>
          <div>
          <label className="text-sm capitalize">Provinsi</label>
          </div>

          <select value={selectedProvince} onChange={getProvinsi}  className="w-full border-none
          focus:outline focus:outline-[#5C0303] rounded p-1 mb-2 text-sm">
            <option value={""}></option>
            {province.map((data:any)=>{
              return(
                <option className="text-xs" key={data.id} value={data.id}>{data.name}</option>)
            })}

          </select>

          <div>
          <label className="text-sm capitalize">kabupaten/Kota</label>
          </div>
          <select value={selectedCity} onChange={getCity}  className="w-full border-none
          focus:outline focus:outline-[#5C0303] rounded p-1 mb-2 text-sm">
            <option value={""}></option>
            {city.map((data:any)=>{
              return(
                <option className="text-xs" key={data.id} value={data.id}>{data.name}</option>)
            })}
          </select>
          
          <div>
          <label className="text-sm capitalize">kecamatan</label>
          </div>
          <select value={selectedKecamatan} onChange={getKecamatan}  className="w-full border-none
          focus:outline focus:outline-[#5C0303] rounded p-1 mb-2 text-sm">
            <option value={""}></option>
            {kecamatan.map((data:any)=>{
              return(
                <option className="text-xs" key={data.id} value={data.id}>{data.name}</option>)
            })}
          </select>

          <div>
          <label className="text-sm capitalize">kelurahan</label>
          </div>
          <select value={selectedKelurahan} onChange={getKelurahan}  className="w-full border-none
          focus:outline focus:outline-[#5C0303] rounded p-1 mb-2 text-sm">
            <option value={""}></option>
            {kelurahan.map((data:any)=>{
              return(
                <option className="text-xs" key={data.id} value={data.id}>{data.name}</option>)
            })}
          
          </select>
          </div>

      </div>
   
   
    

   
    <ButtonElement text="register" type="button" style="secondary"/>
    </form>
    <div className="flex justify-center items-center mt-2 relative">
    <p className="text-xs capitalize">
    Dengan mendaftar, saya menyetujui
    Syarat dan Ketentuan serta Kebijakan Privasi
    </p>
    </div>
    <IoCloseCircle
        onClick={handleModal}
        className="
        absolute
        top-1
        right-1
        text-3xl
        text-[#5C0303]
        "/>
    
   
    

</div>



  )
}

export default RegisterModal


