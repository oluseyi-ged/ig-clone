import React from "react"
import "./Posts.css"
import Avatar from "@material-ui/core/Avatar"

function Posts() {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="Messi Fan"
          src="/static/images/avatar/1.jpg"
        ></Avatar>
        <h3>Username</h3>
      </div>
      <img
        className="post__image"
        src="https://phantom-marca.unidadeditorial.es/97f79709c81f033874d0b10609cb29d7/resize/660/f/webp/assets/multimedia/imagenes/2021/07/15/16263805081910.jpg"
        alt=""
      />
      <h4 className="post__text">
        <strong>The Developer </strong>IG clone that should work
      </h4>
    </div>
  )
}

export default Posts
