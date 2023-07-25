import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Search } from '../components/search/Search';
import { Container } from '../components/container/Container';
import { PostsTable } from '../components/table/Table';
import { PostsPagination} from '../components/pagination/Pagination';

import { fetchPosts } from '../store/postsSlice';


export function Main() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [search, setSearch] = useState(false);
  const [postTitle, setPostTitle] = useState('');
  const [sortAscending, setSortAscending] = useState(true);
  const [postsSorted, setPostsSorted] = useState([]);

  const all = useSelector((state) => state.posts.posts);

  console.log(all);
  const loading = useSelector((state) => state.loading);

  const postsError = useSelector((state) => state.error);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = 
   all.slice(firstPostIndex, lastPostIndex)
    ;

  useEffect(() => { const getPosts = async () => {
    await dispatch(fetchPosts());
};

getPosts()}, [dispatch ]);

  return (
    <Container>
      <Search setSearch={setSearch}/>
      <PostsTable posts={currentPosts}/>
      <PostsPagination setCurrentPage={setCurrentPage}/>
      
    </Container>
  );
}
