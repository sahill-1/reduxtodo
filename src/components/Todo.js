import React, {useState} from 'react'

const Todo = () => {
    const [inputData, setInputData] = useState("")
  return (
    <>
        <div className='main-div'>
            <div className="child-div">
                <figure>
                    <figcaption> Add your list here</figcaption>
                </figure>

                <div className='addItems'>
                    <input type='text' placeholder='Add items' value={inputData} onChange={(e) => setInputData(e.target.value)} />
                    <i className='fa fa-plus add-btn'></i>
                </div>
            </div>

        </div>
    </>
  )
}

export default Todo
