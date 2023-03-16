import React, { useState } from "react";
import ReactPaginate from "react-paginate";
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
  const pageCount = Math.ceil(albums.length / itemsPerPage)

  const handlePageClick = (e: { selected: number; }) => {
    console.log('e: ', e);
    console.log(e.selected);
    const newOffset = (e.selected * itemsPerPage) % albums.length
    setItemsOffset(newOffset)
  }

  return (
    <div className="albumWrapper">
      <AlbumList albums={albums} currentAlbums={currentAlbums} />
      <ReactPaginate pageCount={pageCount} onPageChange={handlePageClick} />
    </div>
  )
}

export default Pagination;
