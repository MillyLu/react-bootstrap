import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaSearch } from 'react-icons/fa';
import styles from './index.module.css';

export function Search() {
  return (
    <InputGroup className="mb-3 group">
      <Form.Control
        className={styles.input}
        placeholder="Поиск"
        aria-label="Поиск"
        aria-describedby="basic-addon2"
      />
      <Button className={styles.button} variant="outline-secondary" id="button-addon2">
        <FaSearch />
      </Button>
    </InputGroup>
  );
}
