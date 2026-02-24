import { useContext } from "react"
import { recpiecontext } from '../context/RecpieContext'


const Recpies = () => {
  const {data} = useContext(recpiecontext)

  const renderRecpie  = data.map((recipe)=>{
        <div key={recipe.id}>
      <h1>{recipe.title}</h1>
    </div>
  })
  return (
    <div>
      {renderRecpie}
    </div>
  )
}

export default Recpies
