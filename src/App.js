
import "./styles.css";
import {Provider} from 'react-redux'
import store from './redux/store/store'
import PhoneContainer from "./componenets/PhoneContainer";
import TvContainer from "./componenets/TvContainer";
import CommentContainer from "./componenets/CommentContainer";



export default function App() {
  return (
    <Provider store = {store}> 
    <div className="App section-one">
    <PhoneContainer /> 
    <TvContainer/>
    </div>
    <CommentContainer/>
    </Provider>
  );
}
