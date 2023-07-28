import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import '../../custom.scss';

export function Search({ setSearch }) {
  const [searchParams, setSearchParams] = useState('');
  const handlePressEnter = (e) => {
    if (e.key === 'Enter') {
      setSearch(searchParams);
    }
  };
  return (
    <div className="search">
      <InputGroup className="mb-3 group">
        <Form.Control
          className="input"
          placeholder="Поиск"
          aria-label="Поиск"
          aria-describedby="basic-addon2"
          id="basic-input"
          onChange={(e) => setSearchParams(e.target.value)}
          onKeyDown={handlePressEnter}
        />
        <Button
          className="button"
          variant="outline-secondary"
          id="button-addon2"
          onClick={() => setSearch(searchParams)}
        >
          <FaSearch />
        </Button>
      </InputGroup>
    </div>
  );
}
