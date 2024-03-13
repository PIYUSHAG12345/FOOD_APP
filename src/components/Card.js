import React from 'react'

export default function Card() {
  return (
    <div className="card mt-3" style={{ width: "30%", height: "18rem", backgroundColor: "white" }}>
      <img src="..." class="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">we are making something</p>
        <div className='container w-100'>
          <select className='m-2 h-100 w-20 bg-success'>
            {
              Array.from(Array(6), (e,i) => {
                return (
                < option key = { i+ 1
              } value = { i+ 1}>{i + 1}</option>
                )
            })
          }
        </select>
        <select className=' m-2 h-100  bg-success rounded'>
          <option value="half">half</option>
          <option value="full">full</option>

        </select>
        <div className='d-inline h-100 fs-5'>total price </div>
      </div>
    </div>
      </div >
      
      
  )
}
