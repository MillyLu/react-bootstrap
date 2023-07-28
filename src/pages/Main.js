import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Search } from '../components/search/Search';
import { Container } from '../components/container/Container';
import { PostsTable } from '../components/table/Table';
import { PostsPagination } from '../components/pagination/Pagination';
import { Loader } from '../components/loader/Loader';

import { fetchPosts } from '../store/postsSlice';

export function Main() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [search, setSearch] = useState('');
  const [sortOrderById, setSortOrderById] = useState('');
  const [sortOrderByTitle, setSortOrderByTitle] = useState('');
  const [sortOrderByBody, setSortOrderByBody] = useState('');
  const [postsSorted, setPostsSorted] = useState([]);
  const [postsBySearch, setPostsBySearch] = useState([]);

  const all = useSelector((state) => state.posts.posts);
  const allPages =
    postsBySearch.length >= 1
      ? postsBySearch.length / postsPerPage
      : all.length / postsPerPage;

  const loading = useSelector((state) => state.posts.loading);

  const postsError = useSelector((state) => state.posts.error);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts =
    postsSorted.length > 0
      ? postsSorted.slice(firstPostIndex, lastPostIndex)
      : postsBySearch.length >= 1
      ? postsBySearch.slice(firstPostIndex, lastPostIndex)
      : all.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    const getPosts = async () => {
      await dispatch(fetchPosts());
    };

    getPosts();
  }, [dispatch]);

  useEffect(() => {
    if (search) {
      const searched = all.filter((post) => {
        return (
          post.id.toString().toLowerCase().includes(search.toLowerCase()) ||
          post.title.toString().toLowerCase().includes(search.toLowerCase()) ||
          post.body.toString().toLowerCase().includes(search.toLowerCase())
        );
      });
      setPostsBySearch(searched);
    } else {
      setPostsBySearch([]);
    }
  }, [search, all]);

  useEffect(() => {
    if (sortOrderById === 'desc') {
      setPostsSorted([]);
      let sortedPosts = [...all];
      sortedPosts = sortedPosts.sort((a, b) => (a.id > b.id ? -1 : 1));
      setPostsSorted(sortedPosts);
      return;
    } else if (sortOrderById === 'asc') {
      setPostsSorted([]);
      let sortedPosts = [...all];
      sortedPosts = sortedPosts.sort((a, b) => (a.id > b.id ? 1 : -1));
      setPostsSorted(sortedPosts);
    } else {
      setPostsSorted([]);
    }
  }, [sortOrderById, all]);

  useEffect(() => {
    if (sortOrderByTitle === 'desc') {
      setPostsSorted([]);
      let sortedPosts = [...all];
      sortedPosts = sortedPosts.sort((a, b) => (a.title > b.title ? -1 : 1));
      setPostsSorted(sortedPosts);
      return;
    }
    if (sortOrderByTitle === 'asc') {
      setPostsSorted([]);
      let sortedPosts = [...all];
      sortedPosts = sortedPosts.sort((a, b) => (a.title > b.title ? 1 : -1));
      setPostsSorted(sortedPosts);
    } else {
      setPostsSorted([]);
    }
  }, [sortOrderByTitle, all]);

  useEffect(() => {
    if (sortOrderByBody === 'desc') {
      setPostsSorted([]);
      let sortedPosts = [...all];
      sortedPosts = sortedPosts.sort((a, b) => (a.body > b.body ? -1 : 1));
      setPostsSorted(sortedPosts);
      return;
    }
    if (sortOrderByBody === 'asc') {
      setPostsSorted([]);
      let sortedPosts = [...all];
      sortedPosts = sortedPosts.sort((a, b) => (a.body > b.body ? 1 : -1));
      setPostsSorted(sortedPosts);
    } else {
      setPostsSorted([]);
    }
  }, [sortOrderByBody, all]);

  return (
    <Container>
      <Search setSearch={setSearch} />
      {loading && <Loader />}
      {postsError && <p>Упс..какая-то ошибка :(</p>}
      {all.length >= 1 && (
        <>
          <PostsTable
            posts={currentPosts}
            setSortOrderById={setSortOrderById}
            setSortOrderByTitle={setSortOrderByTitle}
            setSortOrderByBody={setSortOrderByBody}
            sortOrderById={sortOrderById}
            sortOrderByTitle={sortOrderByTitle}
            sortOrderByBody={sortOrderByBody}
          />
          <PostsPagination
            setCurrentPage={setCurrentPage}
            allPages={allPages}
          />
        </>
      )}
    </Container>
  );
}
