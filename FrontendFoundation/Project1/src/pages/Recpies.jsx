import { useContext } from "react"
import { recpiecontext } from '../context/RecpieContext'
import RecpieCard from "../components/RecpieCard"


const Recpies = () => {
  const {data} = useContext(recpiecontext)
  const renderRecpie = data.map((recipe, index) => (
    <RecpieCard key={index} recipe={recipe} />
  ))

  
  return (
    <div>
       {renderRecpie}
    </div>
  )
}

export default Recpies
