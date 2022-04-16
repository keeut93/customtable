import logo from './logo.svg';
import './App.css';
import Table from './Table';
import ProjectTableRow from './projectTableRow';
function App() {
  const header = [ //columnname
    {name:'A'},
    {name:'B'},
    {name:'C'},
    {name:'D'},
    {name:'E'},
  ] 
  const datas = [
    {A:1,B:2,C:3,D:4,E:5},
    {A:3,B:6,C:3,D:4,E:5},
    {A:4,B:7,C:3,D:4,E:5},
    {A:5,B:8,C:3,D:4,E:5},
    {A:6,B:9,C:3,D:4,E:5},
    {A:1,B:2,C:3,D:4,E:5},
    {A:1,B:2,C:3,D:4,E:5},
    {A:1,B:2,C:3,D:4,E:5},
    {A:1,B:2,C:3,D:4,E:5},
  ]
  const width = [10,20,30,40,50] //1열부터의 WIDTH
  const rows = [datas.map((data)=>(<ProjectTableRow data={data} width={width}/>))
  ]
  console.log(rows)

  return (
    <div>
      <Table 
      header={header} 
      width={width} 
      rows={rows}
      />

    </div>
  )
}

export default App;
