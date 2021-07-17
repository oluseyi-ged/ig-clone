import "./App.css"
import Posts from "./Posts"

function App() {
  const [posts, setPosts] = useState([
    {
      username: "royged",
      caption: "it works, dope",
      imageUrl:
        "https://phantom-marca.unidadeditorial.es/97f79709c81f033874d0b10609cb29d7/resize/660/f/webp/assets/multimedia/imagenes/2021/07/15/16263805081910.jpg",
    },
    {
      username: "royged",
      caption: "it works, dope",
      imageUrl:
        "https://phantom-marca.unidadeditorial.es/97f79709c81f033874d0b10609cb29d7/resize/660/f/webp/assets/multimedia/imagenes/2021/07/15/16263805081910.jpg",
    },
  ])

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
          imageUrl={imageUrl}
        />
      ))}
    </div>
  )
}

export default App
