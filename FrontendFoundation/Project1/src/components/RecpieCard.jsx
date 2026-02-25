import { Link } from "react-router-dom";

const RecpieCard = ({ recipe }) => {

    const { img, title, category , desc } = recipe;

    return (
        <Link to="/recpies" className="block border p-3 w-64 bg-gray-700 rounded-lg">
            <img src={img} alt={title} className="w-full h-40 object-cover rounded"/>
            <h1 className="text-xl font-bold mt-2">{title}</h1>
            <p className="text-gray-300">{category}</p>
            <p className="text-gray-300">{desc}</p>
        </Link>
    )
}

export default RecpieCard;