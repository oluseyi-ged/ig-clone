import { useState, useEffect } from "react"
import "./App.css"
import Posts from "./Posts"
import { db } from "./firebase"

function App() {
  const [posts, setPosts] = useState([])
  //USEEFFECT runs a piece of code on a specific condition
  useEffect(() => {
    //code that runs
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()))
    })
  }, []) //blank square bracket means code runs once when component loads

  return (
    <div className="app">
      <div className="app__header">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
          className="app__headerImage"
        />
      </div>
      {posts.map((post) => (
        <Posts
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  )
}

export default App
