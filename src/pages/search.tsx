import { useEffect } from 'react';
import { SearchMultiple } from '../components/search/search.multiple';
import './search.css';
export function SearchPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let template = (
    <>
      <main className="page-content">
        <h2> ¿Que tienes en la nevera?</h2>

        <SearchMultiple></SearchMultiple>
      </main>
    </>
  );
  return template;
}
export default SearchPage;
