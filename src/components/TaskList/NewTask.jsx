import React from 'react'

const NewTask = (props) => {
    console.log(props.data);
    
  return (
    <div>
            <div className='shrink-0 bg-amber-600 h-60 w-60 rounded-[15px]'>
            <div className='flex justify-between p-2.5 mt-1.5 font-semibold'> 
                <button className='bg-red-800 px-3 py-1'>High</button>
                <h1>29 Feb 2026</h1>
            </div>
            <h1 className='px-2 pt-2 font-semibold'>Make a youtube video</h1>
            <p className='pt-1 px-2 text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit expedita mollitia, placeat excepturi non quae delectus beatae pariatur blanditiis sapiente.</p>
                    <div >
                <h5 className='text-center mt-18 font-bold  bg-yellow-600 p-2'> New Task</h5>
            </div>
      </div>
    </div>
  )
}

export default NewTask
