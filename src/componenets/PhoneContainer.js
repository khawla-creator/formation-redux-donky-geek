// // la prtie avec les fonction useSelector 
// import React from 'react';
// import phone from '../images/phone.png'
// import {useSelector, useDispatch} from 'react-redux'
// import {buyphone} from '../redux/phone/actionPhone'



//  function PhoneContainer () {

//    const phones = useSelector (state => state.phone.phones)
//    const dispatch = useDispatch()

//    return (
//      <div className='container'> 
//       <img src ={phone} alt= 'phone ' />
// <p>
//   Disponibilité :
//    <span id='count'> { phones }</span> 
// </p>
//  <button onClick={()=> dispatch(buyphone())}> Acheter </button>
//      </div>
//    )
//  }


//  export default (PhoneContainer);




//=============avec la methode mapstateToProps et mapDispatchToProps 

import React from 'react';
import phone from '../images/phone.png'
import  {connect} from 'react-redux'
import {buyphone} from '../redux/phone/actionPhone'
import {useState} from 'react'



 const PhoneComponent =(props) => {
   console.log(props)
const [totalPhone,setTotalPhone]= useState(1)
console.log(totalPhone)

   return (
     <div className='container'> 
      <img src ={phone} alt= 'phone ' />
<p>
  Disponibilité :
   <span id='count'> {props.phones}</span> 
</p>
<div className='btnContainer'>
 <button onClick={()=> props.buyphone(totalPhone)}> Acheter </button>
    <input type='text' value={totalPhone} onChange={(e)=> setTotalPhone(e.target.value)}/>
   </div>  
     </div>
   )
 }

 const mapStateToProps = state => { 
return { phones : state.phone.phones
    }
 }

const mapDispatchToProps = (dispatch) => {
      return {
        buyphone : totalPhone => dispatch(buyphone(totalPhone))
      }
}



 export default connect( mapStateToProps, mapDispatchToProps) (PhoneComponent);



 // cette partie là on ajoute l'argument ownprops comme un exemple 

//  const mapStateToProps = (state, OwnProps) => { // nous permet au niveau de redux store de recuperer botre store 
//   console.log('MOn props : ' ,OwnProps)  
//   const empty = state.phones < 1 ? OwnProps.warning : state.phones
//   return {
// phones : empty
//     }
//  }