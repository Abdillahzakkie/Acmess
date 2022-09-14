import React, { useState, useRef } from "react";
import './pagination.css';

import { Col } from 'react-bootstrap';

import Product from '../../components/Product';



function Pagination({ data, pageLimit, dataLimit }) {
    const [pages] = useState(Math.round(data.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);
    const paginationRef = useRef();


  
    function goToNextPage() {
        setCurrentPage((page) => page + 1);
        window.scrollTo({ behavior: 'smooth', top: `${paginationRef.current.offsetTop - 300}` });
    }
  
    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
        window.scrollTo({ behavior: 'smooth', top: `${paginationRef.current.offsetTop - 300}` });
    }
  
    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
        window.scrollTo({ behavior: 'smooth', top: `${paginationRef.current.offsetTop - 300}` });
    }
  
    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    };

  
    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };
  
    return (
        <div ref={paginationRef}>
    
        <div className="dataContainer">
          {getPaginatedData().map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product  key={product._id}  product={product} />
                </Col>         
          ))}
        
        </div>
    
     
        <div className="pagination">
          <button
            onClick={goToPreviousPage}
            className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
          >
            prev
          </button>
    
          {getPaginationGroup().map((item, index) => (
            <button
              key={index}
              onClick={changePage}
              className={`paginationItem ${currentPage === item ? 'active' : null}`}
            >
              <span>{item}</span>
            </button>
          ))}
    
          <button
            onClick={goToNextPage}
            className={`next ${currentPage === pages ? 'disabled' : ''}`}
          >
            next
          </button>
        </div>
      </div>
    );
  }

  export default Pagination;