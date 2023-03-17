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
      <div className="paginationWrapper">
        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName="pagination"
          activeClassName="active"
        />
      </div>
    </div>
  )
}

export default Pagination;
