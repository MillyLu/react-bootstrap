import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

import { PostItem } from '../postItem/PostItem';

import styles from './index.module.css';

export function PostsTable({ posts }) {
  return (
    <div className={styles.posts}>
      <Table bordered hover>
        <thead>
          <tr>
            <th className={styles.header}>
              {' '}
              <Form.Select
                className={styles.filter}
                aria-label="Default select example"
              >
                <option>ID</option>
                <option value="1">ID ⇩</option>
                <option value="2">ID ⇧</option>
              </Form.Select>
            </th>
            <th className={styles.header}>
              {' '}
              <Form.Select
                className={styles.filter_header}
                aria-label="Header select example"
              >
                <option>Заголовок</option>
                <option value="1">Заголовок ⇩</option>
                <option value="2">Заголовок ⇧</option>
              </Form.Select>
            </th>
            <th className={styles.header}>
              <Form.Select
                className={styles.filter_description}
                aria-label="Description select example"
              >
                <option>Описание</option>
                <option value="1">Описание ⇩</option>
                <option value="2">Описание ⇧</option>
              </Form.Select>
            </th>
          </tr>
        </thead>
        <tbody>
          {posts &&
            posts?.map((post) => (
              <PostItem
                key={post.id}
                id={post.id}
                title={post.title}
                description={post.body}
              />
            ))}
        </tbody>
      </Table>
    </div>
  );
}
