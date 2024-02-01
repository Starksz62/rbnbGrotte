import { useEffect,useState } from "react";
import SelectionGrotte from "../Components/SelectionGrotte"
import { Link } from "react-router-dom";
function Home() {
    const [caves, setCaves] = useState([])
    useEffect(()=> {
        fetch("http://localhost:4875/cave/all").then(
            (res) => res.json()
        ).then((data)=> {
            console.log(data);
             setCaves(data);
        })
    }, [])
    return (
    <div>
        <ul className="cave-list" id="cave-list">
{caves.map((cave)=> (
    <li key={cave.id} className="cave-item">
<Link to={`/détails/${cave.id}`}>
    <SelectionGrotte data={cave}/>
            </Link>
    </li>
))}
     </ul>
<SelectionGrotte/>
    </div>
)
}
export default Home;