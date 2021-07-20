import React , {useEffect} from 'react';
import  {connect} from 'react-redux'
import { apiCall } from '../redux/comment/actionComent';

const CommentContainer =({apiData, apiComment})=> {
console.log(apiData)
useEffect (() => { 
apiComment()
},
[apiComment])

const dispalyApiData = apiData.isLoading ? (
<p> Loading ... </p>
): apiData.error ? (
<p>{apiData.error}</p>
) : ( apiData.comments.map(comment=> {
      return (
<div key={comment.id} className='comments'>
      <p> {comment.body}</p>
       </div>
      )
}))
return ( 
      <div >
               <h2> ommantaires  </h2> 
               <hr/>
                   <p className='comment'> {dispalyApiData} </p>
       </div>
)
}

const mapStateToProps = state => {
return {
            apiData: state.comments
}
}

const mapDispatchToProps = dispatch => {
      return {
            apiComment: ()=> dispatch(apiCall())
      }
}



export default connect (mapStateToProps, mapDispatchToProps) (CommentContainer); 
