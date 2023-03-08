import React from "react";
import "./AlbumList.css";
import Album from "./type";

type Props = {
  albums: Album[]
}

const AlbumList = (props: Props) => {
  const { albums } = props

  return <div>AlbumList.tsx {albums.map((album) => (<div><img src={album.url} alt="{album.title}" /></div>))}</div>
}

export default AlbumList;
