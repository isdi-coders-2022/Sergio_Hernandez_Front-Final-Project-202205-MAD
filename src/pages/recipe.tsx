import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { iRecipe } from '../interfaces/interfaces';

import { updateUserAction } from '../reducer/user/user.action.creators';
import { HttpUser } from '../services/http.user';
import './recipe.css';
export function RecipePage() {
  const [favState, setFavState] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const location = useLocation();
  const stateRecipe = location.state as { recipe: iRecipe };
  const user = localStorage.getItem('token');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleFav() {
    if (!user) {
      navigate('/login');
    }
    new HttpUser()
      .addToFavorites(stateRecipe.recipe._id as string)
      .then((resp) => {
        dispatch(updateUserAction(resp));
      });
    setFavState(!favState);
  }
  function changeStyleFav(favState: boolean) {
    if (!favState) {
      return 'fav-style';
    }
    return 'nofav-style';
  }
  let template = (
    <>
      <main className="main-container">
        <div className="container-flex-details ">
          <h2 className="title-recipe"> {stateRecipe.recipe.title}</h2>
          <figure className="details--img">
            <img
              className={changeStyleFav(favState)}
              src={stateRecipe.recipe.img}
              alt={stateRecipe.recipe.title}
            />

            <figcaption>
              <h2>{stateRecipe.recipe.title}</h2>
              <h4 className="comment-user">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                odio in labore obcaecati, magnam aliquam, illum iure, nihil
                cupiditate repudiandae corrupti inventore sed dolor quia eum
                ducimus animi quaerat? Architecto.
              </h4>
            </figcaption>
          </figure>
          <button
            className="button-fav"
            onClick={() => {
              handleFav();
            }}
          >
            ÑaM ÑaM
          </button>
        </div>

        <div className="container-grid--content">
          <ul className="recipe--ingredient">
            <h4 className="ingredients--title"> Ingredientes </h4>
            {stateRecipe.recipe.ingredients.map((ingredient) => (
              <li className="recipe--units" key={ingredient.ingredient.name}>
                {ingredient.ingredient.name +
                  ' : ' +
                  ingredient.amount +
                  ingredient.measure}
              </li>
            ))}
          </ul>

          <div className="recipe--content">
            <h3> Pasos a seguir </h3>
            <p className="recipe-method">{stateRecipe.recipe.content}</p>
          </div>
        </div>
      </main>
    </>
  );

  return template;
}
export default RecipePage;
