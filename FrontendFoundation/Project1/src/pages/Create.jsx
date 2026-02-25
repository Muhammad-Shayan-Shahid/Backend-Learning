import { nanoid } from 'nanoid'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { recpiecontext } from '../context/RecpieContext'

const Create = () => {
    const {data , setdata} = useContext(recpiecontext)
    const {register , handleSubmit , reset  } = useForm()

    const submitHandler = (recpie) =>{
        recpie.id = nanoid()

        setdata([...data , recpie])
        reset()
    }
  return (
   <form 
   onSubmit={handleSubmit(submitHandler)}
   className="flex flex-col gap-4 w-80">

        <input 
        className='border-b outline-0 p-2'
        {...register("image")} 
        type="url" 
        placeholder='Enter img url'
        />
        <small className='text-red-400'>
            This is how the erorr is shown here
        </small>

        <input 
        className='border-b outline-0 p-2'
        {...register("title")} 
        type="text" 
        placeholder='Recpie Title'
        />
        <small className='text-red-400'>
            This is how the erorr is shown here
        </small>

        <textarea
        className='border-b outline-0 p-2'
        {...register("ingrediants")} 
        placeholder='//start from here'
        >
        </textarea>
        <small className='text-red-400'>
            This is how the erorr is shown here
        </small>

        <textarea
        className='border-b outline-0 p-2'
        {...register("instrctions")} 
        placeholder='//write instructions'
        >
        </textarea>
        <small className='text-red-400'>
            This is how the erorr is shown here
        </small>

        <select
        className='border-b outline-0 p-2'
        {...register("category")} 
        >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="supper">Supper</option>
        </select>
        

        <button className='mt-5 block bg-gray-900 px-4 py-2 rounded'>
                    Save Recpie
        </button>
   </form>
  )
}

export default Create
