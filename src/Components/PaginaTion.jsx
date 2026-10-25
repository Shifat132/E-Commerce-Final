import React, { useEffect, useState } from 'react';
import ReactPaginateModule from 'react-paginate';
import CustmPcard from './CustmPcard';
import { useSelector } from 'react-redux';


const ReactPaginate = ReactPaginateModule?.default ?? ReactPaginateModule;


const PaginaTion = ({ itemsPerPage}) => {

              const data = useSelector(state => state.products.value)



  const items = data

  function Items({ currentItems }) {
    return (
      <>
        <div className='flex flex-wrap  gap-y-10 gap-x-10 mt-12 '>


          {currentItems &&
            currentItems.map((item) => (
              <div>
                <CustmPcard
                  heartdettes={item}
                  productDettels={item}
                  id={item.id}
                  imgsrc={item.thumbnail}
                  produtname={item.title}
                  price={item.price}
                  parsents={item.discountPercentage}
                  discauntprice={(item.price - (item.price * (item.discountPercentage / 100))).toFixed(2)}
                  ratemathmathics={item.reviews.length}
                  rating={item.rating}
                  
                />
              </div>
            ))}
        </div>
      </>
    );
  }

  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };



  return (


    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        className='flex gap-10 items-center mt-10'
        pageClassName='bg-black px-3 py-1 text-white text-xs cursor-pointer'
        previousClassName='hidden'
      />
    </>



  )
}

export default PaginaTion
