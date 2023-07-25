import { Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/:id" element={<Main />} />
    </Routes>
  );
}
