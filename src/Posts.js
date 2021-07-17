import React from "react"
import "./Post.css"

function Posts() {
  return (
    <div>
      <h3>Username</h3>
      {/* header > avatar + username */}
      <img
        className="post__image"
        src="https://phantom-marca.unidadeditorial.es/97f79709c81f033874d0b10609cb29d7/resize/660/f/webp/assets/multimedia/imagenes/2021/07/15/16263805081910.jpg"
        alt=""
      />
      <h4 className="post__text">
        <strong>The Developer </strong>IG clone that shpuld work
      </h4>
    </div>
  )
}

export default Posts
