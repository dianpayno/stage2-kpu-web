
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Pie } from "react-chartjs-2";
import { paslonPresiden } from "../../data/index"

const PieChart = () => {
ChartJS.register(ArcElement, Tooltip, Legend);
const data = {
    labels: paslonPresiden.map((item) => item.nama),
    datasets: [
      {
        data: paslonPresiden.map((item) => (item.vote/1000)*100),
        backgroundColor: ['#FF6384', '#FFCD56', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#FFCD56', '#36A2EB'],
      
      }
    ],
  }
  return (
  
        <div className="w-full">
          <Pie data={data} />
          </div>

   
  )
}

export default PieChart