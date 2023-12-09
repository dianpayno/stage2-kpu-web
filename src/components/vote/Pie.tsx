
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Pie } from "react-chartjs-2";

type PieChartProps = {
  dataResult:any
}

const PieChart = (props:PieChartProps) => {
  const {dataResult} = props
ChartJS.register(ArcElement, Tooltip, Legend);
const data = {
    labels: dataResult?.map((item:any) => item.paslon_name),
    datasets: [
      {
        data: dataResult?.map((item:any) => item.jml_pemilih),
        backgroundColor: ['#FFCD56','#FF6384','#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#FFCD56', '#36A2EB'],
      
      }
    ],
  }
  return (
  
        <div className="relative">
          <Pie data={data}  />
          </div>

   
  )
}

export default PieChart