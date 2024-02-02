import { useEffect,useState } from "react";
import SelectionGrotte from "../Components/SelectionGrotte";
import Filter from "../Components/Filter";
import "../styles/Home.css"
function Home() {
    const [caves, setCaves] = useState([])
    const [filterType, setFilterType] = useState([]);
    const handleFilterClick = (type) => {
        console.log("poulet",caves.grottes[0].type,type)
        const filteredGrottes = caves.grottes.filter(element => element.type === type);
      setFilterType(filteredGrottes);
      console.log(filteredGrottes);
  };
  const handleFilterClickPiscine = (type) => {
    console.log("poulet",caves.grottes[0].type,type)
    const filteredGrottes = caves.grottes.filter(element => element.type1 === type);
  setFilterType(filteredGrottes);
  console.log(filteredGrottes);
  };
    useEffect(()=> {
        fetch("http://localhost:4875/cave/all").then(
            (res) => res.json()
        ).then((data)=> {
             setCaves(data);
             setFilterType(data.grottes);
        })
    }, [])
    return (
    <div>
          <Filter handleFilterClick={handleFilterClick} handleFilterClickPiscine={handleFilterClickPiscine}/>
        <ul className="cave-list" id="cave-list">
  {Array.isArray(filterType) &&
    filterType.map((cave) => (
      <li key={cave.id} className="cave-item">
          <SelectionGrotte data={cave} />
      </li>
    ))}
</ul>
    </div>
)
}
export default Home;