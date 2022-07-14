import { useLocation } from 'react-router-dom';

import { iRecipe } from '../interfaces/interfaces';

export function RecipePage() {
  const location = useLocation();
  const stateRecipe = location.state as { recipe: iRecipe };
  let template = (
    <>
      <div>
        <h3> Receta </h3>
        <h2> {stateRecipe.recipe.title}</h2>
        <img src={stateRecipe.recipe.img} alt={stateRecipe.recipe.title} />
      </div>

      <div>
        <div>
          <h4> Ingredientes </h4>
          <ul>
            {stateRecipe.recipe.ingredients.map((ingredient) => (
              <li key={ingredient.ingredient.name}>
                {ingredient.ingredient.name +
                  ' : ' +
                  ingredient.amount +
                  ingredient.measure}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3> Pasos a seguir </h3>
          <p>{stateRecipe.recipe.content}</p>
        </div>
      </div>
    </>
  );

  return template;
}
export default RecipePage;
