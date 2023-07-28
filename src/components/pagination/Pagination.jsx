import Pagination from 'react-bootstrap/Pagination';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import '../../custom.scss';

export function PostsPagination({ setCurrentPage, allPages, currentPage }) {
  const [activeItem, setActiveItem] = useState(currentPage);
  const navigate = useNavigate();
  const params = useParams();
  const pageNum = params.id;
  useEffect(() => {
    if (pageNum) {
      setActiveItem(pageNum);
    }
  }, [pageNum]);
  const items = Array.from({ length: allPages }, (_, index) => index + 1).map(
    (number) => (
      <button
        onClick={() => {
          setActiveItem(number);
          setCurrentPage(number);
          navigate(`/${number}`);
        }}
        className={
          +number === +activeItem
            ? 'pagination_number__active'
            : 'pagination_number'
        }
        key={number}
      >
        {number}
      </button>
    )
  );

  const handlePrev = (currentPage) => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      setActiveItem(currentPage - 1);
      navigate(`/${currentPage - 1}`);
    } else {
      setCurrentPage(1);
      navigate('/1');
      setActiveItem(1);
    }
  };
  const handleNext = (currentPage) => {
    if (currentPage < 10) {
      setCurrentPage((prev) => prev + 1);
      setActiveItem((prev) => prev + 1);
      navigate(`/${+currentPage + 1}`);
    } else {
      setCurrentPage(10);
      navigate('/10');
      setActiveItem(10);
    }
  };
  return (
    <Pagination className="pagination">
      <button
        className="pagination_btn"
        onClick={() => handlePrev(currentPage)}
      >
        Назад
      </button>
      <div className="pagination_list">{items}</div>

      <button
        className="pagination_btn"
        onClick={() => handleNext(currentPage)}
      >
        Далее
      </button>
    </Pagination>
  );
}
