import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import './Charts.css';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const data = [
  {
    name: "Dessert",
    uv: 30,
  },
  {
    name: "Pizza",
    uv: 35,
  },
  {
    name: "Salad",
    uv: 20,
  },
  {
    name: "Soup",
    uv: 25,
  },
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function Charts() {
  return (
  <div>
      <div className='hidden md:block'>
      <ResponsiveContainer width="50%"  height={300}>
    
    <BarChart 
     // width={500}
     // height={300}
     data={data}
     margin={{
       top: 30,
       // right: 30,
       // left: 20,
       bottom: 5,
     }}
    >
     <CartesianGrid strokeDasharray="3 3" />
     <XAxis dataKey="name" />
     <YAxis />
     <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
       {data.map((entry, index) => (
         <Cell key={`cell-${index}`} fill={colors[index % 20]} />
       ))}
     </Bar>
    </BarChart>
    </ResponsiveContainer>
      </div>
  <div className='block md:hidden'>
  <ResponsiveContainer width="100%"  height={300}>
    
    <BarChart 
     // width={500}
     // height={300}
     data={data}
     margin={{
       top: 30,
       // right: 30,
       // left: 20,
       bottom: 5,
     }}
    >
     <CartesianGrid strokeDasharray="3 3" />
     <XAxis dataKey="name" />
     <YAxis />
     <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
       {data.map((entry, index) => (
         <Cell key={`cell-${index}`} fill={colors[index % 20]} />
       ))}
     </Bar>
    </BarChart>
    </ResponsiveContainer>
  </div>
  </div>
  );
}
