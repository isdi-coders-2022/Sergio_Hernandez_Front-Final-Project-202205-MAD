import { useEffect } from 'react';
import { ListRecipes } from '../components/listRecipes/list.recipes';
import { UnicRecipe } from '../components/unicRecipe/unicRecipe';
import './home.css';
import 'animate.css';
export function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let template = (
    <>
      <main className="main-container">
        <hgroup className="header-media">
          <h1 className="header-media--title">Trash-Cooking</h1>
          <h2 className="header-media--sub">
            キ<span className="animation2">ッ</span>チン
          </h2>
        </hgroup>

        <UnicRecipe></UnicRecipe>
        <ListRecipes></ListRecipes>
      </main>
    </>
  );
  return template;
}
export default HomePage;
