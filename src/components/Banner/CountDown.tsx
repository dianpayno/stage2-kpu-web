import { useState, useEffect } from "react"

type CountDownProps = {
    duration: number
}


const CountDown = (props: CountDownProps) => {

  const { duration } = props
  const [time, setTime]= useState(duration)
  useEffect(() => {
      setTimeout(() => {
          setTime(time-1000)
      },1000)
  }, [time])

const getFormatedTime = (time: number) => {

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const formatDays = days < 10 ? `0${days}` : days
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const formatHours = hours < 10 ? `0${hours}` : hours
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
   const  formatMinutes = minutes < 10 ? `0${minutes}` : minutes
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    const formatSeconds =seconds < 10 ? `0${seconds}` : seconds


    return (
        <div>
            <div className="flex justify-center items-center gap-1">
            {/* <div className="flex items-center bg-[#5E0000] text-white px-2 py-1 rounded">
                      <p className="text-lg font-extrabold">
                        {formatDays} : {formatHours} : {formatMinutes} : {formatSeconds}
                    </p> *
            </div> */}
{/* 
            <div>
            <p className="text-lg font-extrabold">:</p>
            </div> */}
            <div className="flex flex-col items-center bg-[#5E0000] text-white px-3 py-1 rounded">
                <p className="text-lg font-extrabold">{formatDays}</p>
                <p className="text-[8px] capitalize">hari</p>
            </div>
            <div>
            <p className="text-2xl text-[#5E0000] font-extrabold">:</p>
            </div> 

            <div className="flex flex-col items-center bg-[#5E0000] text-white px-3 py-1 rounded">
                <p className="text-lg font-extrabold">{formatHours}</p>
                <p className="text-[8px] capitalize">jam</p>
            </div>
            <div>
            <p className="text-2xl text-[#5E0000] font-extrabold">:</p>
            </div>
            <div className="flex flex-col items-center bg-[#5E0000] text-white px-3 py-1 rounded">
                <p className="text-lg font-extrabold">{formatMinutes}</p>
                <p className="text-[8px] capitalize">menit</p>
            </div>
            <div>
            <p className="text-2xl text-[#5E0000] font-extrabold">:</p>
            </div>
            <div className="flex flex-col items-center bg-[#5E0000] text-white px-3 py-1 rounded">
                <p className="text-lg font-extrabold">{formatSeconds}</p>
                <p className="text-[8px] capitalize">detik</p>
            </div>
            </div>

        </div>

        
    )
}



  return (
    <div>
        {getFormatedTime(time)}
    </div>
  )
}

export default CountDown