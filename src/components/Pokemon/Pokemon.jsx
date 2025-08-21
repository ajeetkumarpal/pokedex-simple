import { Link } from "react-router-dom";
import "./Pokemon.css"
function Pokemon({ name, image, id }) {

    return (
        <Link className="pokemon-wrapper" to={`/pokemon/${id}`} >
            <h2 className="pokemon-heading">{name}</h2>
            <img className="pokemon-img" src={image} alt="" />
        </Link>
    )
}
export default Pokemon;