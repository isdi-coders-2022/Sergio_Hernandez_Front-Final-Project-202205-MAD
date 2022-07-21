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
        <h2 className="title-search"> ¿Qué tienes en la nevera?</h2>

        <p className="text-search2">
          seleciona o escribe los alimentos que tienes en tu nevera y seguro que
          te encontramos algo que puedas cocinar
        </p>
        <SearchMultiple></SearchMultiple>
      </main>
    </>
  );
  return template;
}
export default SearchPage;
