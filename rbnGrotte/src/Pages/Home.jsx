import { useEffect,useState } from "react";
import SelectionGrotte from "../Components/SelectionGrotte"
import "../styles/Home.css"
function Home() {
    const [caves, setCaves] = useState([])
    useEffect(()=> {
        fetch("http://localhost:4875/cave/all").then(
            (res) => res.json()
        ).then((data)=> {
             setCaves(data.grottes);
        })
    }, [])
    return (
    <div>
        <ul className="cave-list" id="cave-list">
  {Array.isArray(caves) &&
    caves.map((cave) => (
      <li key={cave.id} className="cave-item">
          <SelectionGrotte data={cave} />
      </li>
    ))}
</ul>
    </div>
)
}
export default Home;