import React, { useState } from "react";
import AlbumList from "./AlbumList";
import "./Pagination.css";
import Album from "./type";

type Props = {
  albums: Album[]
}


const Pagination = (props: Props) => {
  const { albums } = props

  // 1ページあたり6要素表示
  const itemsPerPage = 6

  const [itemsOffset, setItemsOffset] = useState(0)

  const endOffset = itemsOffset + itemsPerPage;

  const currentAlbums = albums.slice(itemsOffset, endOffset)

  return (<div className="albumWrapper"><AlbumList albums={albums} currentAlbums={currentAlbums} /></div>)
}

export default Pagination;
