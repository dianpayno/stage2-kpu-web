import { Link } from "react-router-dom";

type BigCardprops = {
    dataTrending: {
        id: number,
        title: string,
        author: string,
        tanggal: string,
        image: string,
        text: string
    },
    index: number
}

const BigCard = (props:BigCardprops) => {
    const { index, dataTrending} = props
    const cardKondisi = index == 0 || index == 3;
    const bigCard = ` col-span-2 bg-cover bg-center`;
    const smallCrad=`col-span-1 `;
    const text1 = dataTrending.title;

  return (
    
    
    <div style={{backgroundImage: `url(${cardKondisi ? dataTrending.image : null})`}}
    className={`bg-white h-[250px] ${cardKondisi ? bigCard : smallCrad} shadow-lg overflow-hidden
     relative transition ease-in-out duration-150 hover:scale-95 hover:cursor-pointer rounded-md
    `}>  
    {
        cardKondisi&& (
        <div className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-t from-black from-3% to-transparent "></div>
        )
    }
    {
        !cardKondisi&& (
            <div>
                <img className="w-full object-cover object-center h-[150px]"  
                src={dataTrending.image} alt="kpu"/>
            </div>
        )
    }
    <div className={`${cardKondisi ? 'text-white' : 'text-black'} absolute top-[65%] left-2 px-2`}>
        <Link to={`/detailnews/${dataTrending.id}`}>
        <span className="uppercase text-white font-semibold bg-red-500 px-3 py-2 rounded-md">
        {dataTrending.tanggal}
        </span>
        <p className={`text-lg font-bold uppercase mt-2`}>
        {
        cardKondisi ? text1 : text1.substring(0, 25)+"..."
        }
        </p>
        </Link>
        <p className="text-xs capitalize">
         penulis berita : {dataTrending.author}
        </p>
    </div>
    </div>
   
  )
}

export default BigCard