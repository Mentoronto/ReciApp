import React, { useEffect, useState } from 'react'
import styles from '../styles/Meal.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart,faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Meal = (
  {
    meal,
    addMeal,
    searchWindow,
    searchMeals,
    search,
    setRecipeWindow,
    addSearchMeal,
    setActiveRecipeInfo
  }) => {


const{
    strMealThumb,
    strInstructions,
    strArea,
    strCategory,
    strMeal,
    strSource
  }=meal;

 
  return (
    <div className={styles.meals}>
      {!searchWindow || search === '' ? (
        <>
        <div className={styles.meal}>
          <div className={styles.mealHeader} id='mealHeader'>
            <span className={styles.random}>
                Recipe of the Day
            </span>
            <img className={styles.img} src={strMealThumb} alt=''></img>
          </div>
           <div className={styles.mealBody}>
            <h4>{strMeal}</h4>
            <button><FontAwesomeIcon icon={faHeart} onClick={addMeal} /></button>
          </div>
        </div>  
        <div className={styles.mealContainer}>
          <div className={styles.mealDescription}>
            <h2 className={styles.randomMealHead}>
            {strMeal}
            </h2>
            <p className={styles.mealInstructions}>
            {strInstructions.slice(0,655)}...
            </p>
            <ul className={styles.CategArea}>
              <li><p>Category</p> <span>{strCategory}</span></li> 
              <li><p>Style</p><span>{strArea}</span></li> 
            </ul>
            <a href={strSource} target='_blank' >
            <button className={styles.btn}>View Recipe <FontAwesomeIcon icon={faArrowRight}/></button>
            </a>
          </div>
       </div>  
        </>
          ):(
            <>
            {!searchMeals?.meals?
            ( 
            <div className={styles.noSearch}>
             There is no meals for the item you've searched.<br/> Please try a new search
            </div>
            ):(
            <div className={styles.mealsContainer}>
             {searchMeals.meals.map(meals=>(
               <div key={meals.idMeal} className={styles.mealItems}>
                    <img style={{borderRadius:"10px"}} src={meals.strMealThumb} width={290} height={290} alt='' onClick={()=>{setRecipeWindow(true); setActiveRecipeInfo(meals);}}/>
                    <p className={styles.searchMealTitle}>{meals.strMeal}</p>
                    <button><FontAwesomeIcon icon={faHeart} className={styles.heart} onClick={()=>addSearchMeal(meals)}/></button>
               </div>
               ))} 
               </div>
               )}
            </>
            )
          }
    </div>

  );
};

export default Meal