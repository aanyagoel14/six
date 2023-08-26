import React from 'react'

function Search(props) {


  const one=(e)=>{
    props.setText(e.target.value)  //we're able to type i.e. give input because of this which we can see in console
  }
  return (
    <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Enter Country Name</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" value={props.text}
       onChange={one}/>
</div>

    // {/* <div>
    //   <input type="text"
     
    //    />
       
    //   {/* <button className='btn btn-success'>Submit</button> */}
    // </div> */}
  )
}

export default Search