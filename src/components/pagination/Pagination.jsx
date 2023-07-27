import Pagination from 'react-bootstrap/Pagination';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.css';

export function PostsPagination({ setCurrentPage, allPages }) {
  const [active, setActive] = useState(1);
  const navigate = useNavigate();
  const items = [];
  for (let number = 1; number <= allPages; number++) {
    items.push(
      <button
        onClick={() => {
          setActive(number);
          setCurrentPage(number);
          navigate(`/${number}`);
        }}
        className={
          active === number
            ? styles.pagination_number__active
            : styles.pagination_number
        }
        key={number}
      >
        {number}
      </button>
    );
  }

  const handlePrev = (active) => {
    if (active > 1) {
      setActive((prev) => prev - 1);
      setCurrentPage(active - 1);
      navigate(`/${active - 1}`);
    } else {
      setActive(1);
      setCurrentPage(1);
      navigate('/1');
    }
  };
  const handleNext = (active) => {
    if (active < 10) {
      setActive((prev) => prev + 1);
      setCurrentPage(active + 1);
      navigate(`/${active + 1}`);
    } else {
      setActive(10);
      setCurrentPage(10);
      navigate('/10');
    }
  };
  return (
    <Pagination className={styles.pagination}>
      <button
        className={styles.pagination_btn}
        onClick={() => handlePrev(active)}
      >
        Назад
      </button>
      <div className={styles.pagination_list}>{items}</div>

      <button
        className={styles.pagination_btn}
        onClick={() => handleNext(active)}
      >
        Далее
      </button>
    </Pagination>
  );
}
