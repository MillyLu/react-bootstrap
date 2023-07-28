import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

import { PostItem } from '../postItem/PostItem';

import '../../custom.scss';

export function PostsTable({
  posts,
  setSortOrderById,
  setSortOrderByTitle,
  setSortOrderByBody,
}) {
  const [valueId, setValueId] = useState('asc');
  const [valueTitle, setValueTitle] = useState('asc');
  const [valueBody, setValueBody] = useState('asc');

  const handleSortById = (event) => {
    const sortValue = event.target.value;
    if (sortValue === 'asc') {
      setValueId('asc');
      setSortOrderById('asc');
    } else if (sortValue === 'desc') {
      setValueId('desc');
      setValueTitle('asc');
      setValueBody('asc');
      setSortOrderByTitle('asc');
      setSortOrderByBody('asc');
      setSortOrderById('desc');
    }
  };
  const handleSortByTitle = (event) => {
    const sortValue = event.target.value;
    if (sortValue === 'asc') {
      setValueTitle('asc');
      setSortOrderByTitle('asc');
    } else if (sortValue === 'desc') {
      setValueTitle('desc');
      setValueId('asc');
      setValueBody('asc');
      setSortOrderById('asc');
      setSortOrderByBody('asc');
      setSortOrderByTitle('desc');
    }
  };

  const handleSortByBody = (event) => {
    const sortValue = event.target.value;
    if (sortValue === 'asc') {
      setSortOrderByBody('asc');
      setValueBody('asc');
    } else if (sortValue === 'desc') {
      setValueBody('desc');
      setValueId('asc');
      setValueTitle('asc');
      setSortOrderByTitle('asc');
      setSortOrderById('asc');
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
                value={valueId}
              >
                <option value="asc">ID</option>
                <option value="desc">ID ⇧</option>
              </Form.Select>
            </th>
            <th className="header_title">
              {' '}
              <Form.Select
                className="filter_header"
                aria-label="Header select title"
                onChange={handleSortByTitle}
                value={valueTitle}
              >
                <option value="asc">Заголовок</option>
                <option value="desc">Заголовок ⇧</option>
              </Form.Select>
            </th>
            <th className="header">
              <Form.Select
                className="filter_description"
                aria-label="Header select description"
                onChange={handleSortByBody}
                value={valueBody}
              >
                <option value="asc">Описание</option>
                <option value="desc">Описание ⇧</option>
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
