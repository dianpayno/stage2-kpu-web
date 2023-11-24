
import Vote from "../vote/Vote"
import PaslonCarousel from "../Carousel/PaslonCarousel"


const VotingLayout = () => {
  return (
    <div>
        <div className='flex justify-center items-center pt-24 bg-white'>
           <Vote/>
        </div>
        <div className=" py-7 mt-7 bg-gradient-to-r from-[#5E0000] from-10% to-[#7506068A] rounded-t-lg">
        <PaslonCarousel/>
        </div>
        
    </div>
  )
}

export default VotingLayout