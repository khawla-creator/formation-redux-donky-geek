import React, { useState } from 'react';
import tv from '../images/tv.png'
import {connect} from 'react-redux'
import {buytv } from '../redux/tv/actionTv';

function TvContainer (props) {
  console.log(props)
const [totalTv, setTotalTv]=useState(1)

return ( 
        <div className='container' >
          <img src ={tv} alt = 'tv'/>
          <p> Disponibilité : 
          <span id= 'count'> {props.tv}</span>
          </p>
          <div className='btnContainer'>
          <button onClick={()=> props.buyphone(totalTv)}> Acheter </button>
          <input type='text' value={totalTv} onChange={(e)=> setTotalTv(e.target.value)} />
          </div>
        </div>
)
}

const mapStateToProps = state => {
return {
 tv : state.television.tv
}
}


const mapDispatchToProps = (dispatch) => {
        return {
          buyphone : (totalTv) => dispatch(buytv(totalTv))
        }
  }


export default connect(mapStateToProps, mapDispatchToProps) (TvContainer); 