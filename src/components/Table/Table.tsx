
  import {
    
    Typography,
    Button,
    CardBody,

    Avatar,
    IconButton,
   
  } from "@material-tailwind/react";
   
 
  const TABLE_HEAD = ["Nomor", "Nama", "alamat", "jenis kelamin", "pilihan"];
   
  const TABLE_ROWS = [
    {
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
      name: "John Michael",
      email: "john@mail.com",
      job: "Manager",
      org: "Organization",
      online: true,
      date: "23/04/18",
      alamat:"Jl. Cempedak No. 10 Bandung",
      vote:"anis baswedan",
      gender:"laki-laki"
    },
    {
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
      name: "Alexa Liras",
      email: "alexa@mail.com",
      job: "Programator",
      org: "Developer",
      online: false,
      date: "23/04/18",
      alamat:"Jl. banda  No. 10 Bandung",
      vote:"prabowo subianto",
      gender:"perempuan"
    },
    {
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
      name: "Laurent Perrier",
      email: "laurent@mail.com",
      job: "Executive",
      org: "Projects",
      online: false,
      date: "19/09/17",
      alamat:"Jl. pegangsaan timur No. 10 jakata barat",
      vote:"prabowo subianto",
      gender:"laki-laki"
    },
    {
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
      name: "Michael Levi",
      email: "michael@mail.com",
      job: "Programator",
      org: "Developer",
      online: true,
      date: "24/12/08",
      alamat:"Jl. hj angung tirtayasa No. 10 jakata utara",
      vote:"anis baswedan",
      gender:"laki-laki"
    },
    {
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
      name: "Richard Gran",
      email: "richard@mail.com",
      job: "Manager",
      org: "Executive",
      online: false,
      date: "04/10/21",
      alamat:"Jl. kute simaungun No. 10 ubud bali",
      vote:"prabowo subianto",
      gender:"laki-laki"
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
        name: "Richard Gran",
        email: "richard@mail.com",
        job: "Manager",
        org: "Executive",
        online: false,
        date: "04/10/21",
        alamat:"Jl. kute simaungun No. 10 ubud bali",
        vote:"prabowo subianto",
        gender:"laki-laki"
      },
  ];

const Table = () => {
  return (
    <div className="container px-10 mb-7 shadow bg-[ #F8F7F3] rounded">
    
     
          <div className="pt-9">
            <p className="uppercase text-xl font-bold">daftar nama pemilih pemilu presiden dumbways.id 2024-2029</p>
            <p className="text-sm capitalize">total suara terkumpul : 1000 suara</p> 
          </div> 
      

        
    
      <CardBody>
        <table className="mt-4 w-full min-w-max table-auto text-left">

          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                  <p className="flex items-center capitalize font-semibold justify-center gap-2 leading-none opacity-70">{head}</p>
                </th>
              ))}
            </tr>
          </thead>


          <tbody>
            {TABLE_ROWS.map(
              ({ img, name, email, alamat, gender, vote }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
 
                return (
                  <tr key={name} className="transition-colors hover:bg-blue-gray-50/50 text-black">
                     <td className={classes}>
                        <IconButton variant="text">
                         {index+1}
                        </IconButton>  
                    </td>

                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar src={img} alt={name} size="sm" />
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            className="font-normal"
                          >
                            {name}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {email}
                          </Typography>
                        </div>
                      </div>
                    </td>


                    <td className={classes}>
                        <p className="capitalize text-sm text-center font-base">
                          {alamat}
                        </p>
                    </td>

                    <td className={classes}>
                      <p className="capitalize text-sm font-base">
                        {gender}
                      </p>
                    </td>

                    <td className={classes}>
                      <p className="capitalize text-sm font-base">
                        {vote}
                      </p>
                    </td>
                   
                  </tr>
                );
              },
            )}
          </tbody>
        </table>

      </CardBody>
      <div className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm">
            sebelumnya
          </Button>
          <Button variant="outlined" size="sm">
            selanjutnya
          </Button>
        </div>
      </div>
   
    </div>
  )
}

export default Table