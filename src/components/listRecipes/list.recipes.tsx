import { useSelector } from 'react-redux';
import { iStore } from '../../app/store';
import { PictureRecipe } from '../pictureRecipe/picture.recipe';

import './list.recipes.css';
export function ListRecipes() {
  const recipes = useSelector((store: iStore) => store.recipes);

  let template = (
    <>
      <h2> Recetas Asiáticas </h2>
      <ul className="container-picture">
        {recipes
          .filter((recipe) => recipe.origin === 'Asian')
          .map((recipe) => (
            <li key={recipe.title}>
              <PictureRecipe
                styles="picture--img"
                recipe={recipe}
              ></PictureRecipe>
              <p> {recipe.title}</p>
            </li>
          ))}
      </ul>
      <ul className="container-picture">
        {recipes
          .filter((recipe) => recipe.origin === 'Spain')
          .map((recipe) => (
            <li key={recipe.title}>
              <PictureRecipe
                styles="picture--img"
                recipe={recipe}
              ></PictureRecipe>
              <p> {recipe.title}</p>
            </li>
          ))}
      </ul>
      <ul className="container-picture">
        {recipes
          .filter((recipe) => recipe.origin === 'Isdi')
          .map((recipe) => (
            <li key={recipe.title}>
              <PictureRecipe
                styles="picture--img"
                recipe={recipe}
              ></PictureRecipe>
              <p> {recipe.title}</p>
            </li>
          ))}
      </ul>
    </>
  );

  return template;
}
