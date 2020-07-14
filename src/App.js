import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement, addel, axi, axip} from './actions/index';
import {connect} from 'react-redux';

function App({ userData, axi}) {
  useEffect(() => {
    axi()
  }, [])

  const counter = useSelector(state => state.counterReducer);
  const isLogged = useSelector(state => state.isLogged);
  const add = useSelector(state => state.arrayReducer);
  const images = useSelector(state => state.axiosReducer);
  const dispatch = useDispatch();
 
  return (
   <div>
     <p>hello world {counter}</p>
      <button onClick={()=> {dispatch(increment(2))}}>+</button>
      <button onClick={()=> {dispatch(decrement())}}>-</button>
      <br />
      <p>{add}</p>
      <button onClick={()=> {dispatch(addel())}}>array</button>

      <div>
        {
          userData.axiosReducer.map(c => {
          return <img src={c.imageData} style={{width: "30%"}}/>
          })
        }
      </div>

      <button 
        
        >post</button>

     

     <p> {isLogged ? <p> auth data </p> : ''} </p>

   </div>
  );
}

const mapStateToProps = state => {
  return {
    userData: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    axi: () => dispatch(axi()),
    axip: () => dispatch(axip())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)


