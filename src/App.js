import React,{useEffect} from 'react';
import './App.css';
import Chat from './Chat/Chat';
import Sidebar from './Sidebar/Sidebar';
import {selectUser} from './features/userSlice';
import {useSelector,useDispatch} from 'react-redux';
import Login from './Login/Login';
import {login,logout} from './features/userSlice';
import {auth}  from './firebase';
function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => {
      auth.onAuthStateChanged((authUser)=>{
        if(authUser){
          dispatch(login({
            uid:authUser.uid,
            photo:authUser.photoURL,
            email:authUser.email,
            displayName:authUser.displayName,
          }))
        }else{
            dispatch(logout())
        }
      })
    
  }, [dispatch])
  return (
    <div className="app">
      {user?(
        <>
        <Sidebar/>
        <Chat/>
        </>
      ):(
        <Login/>
      )}
      
      
    </div>
  );
}

export default App;
