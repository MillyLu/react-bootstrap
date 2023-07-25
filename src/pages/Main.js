import { Search } from '../components/search/Search';
import { PostsTable } from '../components/table/Table';
import { useEffect, useState } from 'react';
import { fetchPosts } from '../store/postsSlice';
import { useDispatch, useSelector } from 'react-redux';

export function Main() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const [search, setSearch] = useState(false);
  const [postTitle, setPostTitle] = useState('');
  const [sortAscending, setSortAscending] = useState(true);
  const [postsSorted, setPostsSorted] = useState([]);

  const all = useSelector((state) => state.posts);

  console.log(all);
  const loading = useSelector((state) => state.loading);

  const postsError = useSelector((state) => state.error);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = search
    ? all
    : postsSorted.length > 1
    ? postsSorted.slice(firstPostIndex, lastPostIndex)
    : all.length > 1
    ? all.slice(firstPostIndex, lastPostIndex)
    : [];

  useEffect(() => { const getPosts = async () => {
    await dispatch(fetchPosts());
};

getPosts()}, []);

  return (
    <>
      <Search />
      <PostsTable />
    </>
  );
}
