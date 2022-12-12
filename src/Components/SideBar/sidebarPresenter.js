import SidebarView from "./sidebarView";
import React from "react";
import { auth } from '../../Utilities/firebaseConfig';
import { onAuthStateChanged, signOut } from "firebase/auth";

export default
function Sidebar(props){

  const [user, setUser] = React.useState({})

  onAuthStateChanged(auth, (currentUser) =>{
    setUser(currentUser)
  })

  function setCurrentGenre(genreID, mediaType){
    props.model.setCurrentGenre(genreID, mediaType);
  }
  function setCurrentType(mediaType){
    props.model.setCurrentType(mediaType);
  }

  async function logOut(){
    await signOut(auth)
  }

    return (
    <div>
      <SidebarView
      user = {user}
      logOut ={() => logOut()}

       onOpenSignUpForm = {()=>{
        if(props.pageModel.signUpStatus) props.pageModel.setSignUpStatus(false)
        else props.pageModel.setSignUpStatus(true)
       }}
       onOpenLoginForm = {()=>{
        if(props.pageModel.loginStatus) props.pageModel.setLoginStatus(false)
        else props.pageModel.setLoginStatus(true)
       }}



        movieGenres={[
          { id: 28, name: "Action" },
          { id: 12, name: "Adventure" },
          { id: 16, name: "Animation" },
          { id: 35, name: "Comedy" },
          { id: 80, name: "Crime" },
          { id: 99, name: "Documentary" },
          { id: 18, name: "Drama" },
          { id: 10751, name: "Family" },
          { id: 14, name: "Fantasy" },
          { id: 36, name: "History" },
          { id: 27, name: "Horror" },
          { id: 10402, name: "Music" },
          { id: 9648, name: "Mystery" },
          { id: 10749, name: "Romance" },
          { id: 878, name: "Science Fiction" },
          { id: 10770, name: "TV Movie" },
          { id: 53, name: "Thriller" },
          { id: 10752, name: "War" },
          { id: 37, name: "Western" },
        ]}
        tvGenres={[
          { id: 10759, name: "Action & Adventure" },
          { id: 16, name: "Animation" },
          { id: 35, name: "Comedy" },
          { id: 80, name: "Crime" },
          { id: 99, name: "Documentary" },
          { id: 18, name: "Drama" },
          { id: 10751, name: "Family" },
          { id: 10762, name: "Kids" },
          { id: 9648, name: "Mystery" },
          { id: 10763, name: "News" },
          { id: 10764, name: "Reality" },
          { id: 10765, name: "Sci-Fi & Fantasy" },
          { id: 10766, name: "Soap" },
          { id: 10767, name: "Talk" },
          { id: 10768, name: "War & Politics" },
          { id: 37, name: "Western" },
        ]}
        onSettingGenre={setCurrentGenre}
        onSettingType={setCurrentType}
      /></div>
    );
}
