import { useEffect, useState } from 'react'
import axios from 'axios'
import { useEffectEvent } from 'react'
const App = () => {

  const [notes ,  setNotes]  = useState([])

  function fetchNotes(){
      axios.get("http://localhost:3000/api/notes")
      .then((res)=>{
        setNotes(res.data.notes)
      })
  }

  useEffect(()=>{
      fetchNotes()
  },[])

  function handleSubmit(e){
    e.preventDefault()

    const {title , desc} = e.target.elements;

    console.log(title.value,desc.value)

    axios.post("http://localhost:3000/api/notes",{
      title :  title.value,
      desc : desc.value
    })

      .then((res)=>{
        console.log(res.data.notes)
        fetchNotes()
      })
  }

  function handleDelete(noteId){
      axios.delete("http://localhost:3000/api/notes/"+noteId)
      .then((res)=>{
        console.log(res.data)
        fetchNotes()
      })
  }

  return (
    <>

        <form className='form' onSubmit={handleSubmit}>
          <input name="title" type="text" placeholder='Enter title'/>
          <input name="desc" type="text" placeholder='Enter descrption'/>
          <button>Create Note</button>
        </form>
        <div className='notes'>
              {
                notes.map(notes=>{
                  return <div className='note'>
                      <h1 >{notes.title}</h1>
                      <p>{notes.desc}</p>
                      <button onClick={()=>{handleDelete(notes._id)}}>Delete</button>
                  </div>
                })
              }
        </div>
    </>
  )
}

export default App

