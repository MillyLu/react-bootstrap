import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

import { PostItem } from '../postItem/PostItem';

import '../../custom.scss';

export function PostsTable({
  posts,
  setSortOrderById,
  setSortOrderByTitle,
  setSortOrderByBody,
  sortOrderById,
  sortOrderByTitle,
  sortOrderByBody,
}) {
  const resetSortValue = () => {
    setSortOrderByTitle('');
    setSortOrderByBody('');
    setSortOrderById('');
  };

  const handleSortById = (event) => {
    const sortValue = event.target.value;
    if (sortValue === 'asc') {
      resetSortValue();
      setSortOrderById('asc');
    } else if (sortValue === 'desc') {
      resetSortValue();
      setSortOrderById('desc');
    }
  };
  const handleSortByTitle = (event) => {
    const sortValue = event.target.value;
    if (sortValue === 'asc') {
      resetSortValue();
      setSortOrderByTitle('asc');
    } else if (sortValue === 'desc') {
      resetSortValue();
      setSortOrderByTitle('desc');
    }
  };

  const handleSortByBody = (event) => {
    const sortValue = event.target.value;
    if (sortValue === 'asc') {
      resetSortValue();
      setSortOrderByBody('asc');
    } else if (sortValue === 'desc') {
      resetSortValue();
      setSortOrderByBody('desc');
    }
  };

  return (
    <div className="posts">
      <Table bordered hover bs-body-bg-table>
        <thead>
          <tr className="header_main">
            <th className="header_id">
              {' '}
              <Form.Select
                className="filter"
                aria-label="Header select id"
                onChange={handleSortById}
                value={sortOrderById}
              >
                <option value="">ID</option>
                <option value="asc">ID ↓</option>
                <option value="desc">ID ↑</option>
              </Form.Select>
            </th>
            <th className="header_title">
              {' '}
              <Form.Select
                className="filter_header"
                aria-label="Header select title"
                onChange={handleSortByTitle}
                value={sortOrderByTitle}
              >
                <option value="">Заголовок</option>
                <option value="asc">Заголовок ↓</option>
                <option value="desc">Заголовок ↑</option>
              </Form.Select>
            </th>
            <th className="header">
              <Form.Select
                className="filter_description"
                aria-label="Header select description"
                onChange={handleSortByBody}
                value={sortOrderByBody}
              >
                <option value="">Описание</option>
                <option value="asc">Описание ↓</option>
                <option value="desc">Описание ↑</option>
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
