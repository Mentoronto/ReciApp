import React, { useCallback, useEffect, useState } from 'react'
import Layout from '../component/Layout';
import { parseCookies } from "nookies"
import { useSession } from "next-auth/react";
import styles from "../styles/Recipes.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch,faTimes, faHeart } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import Meal from '../component/Meal';
import RecipeWindow from '../component/RecipeWindow';


const Recipes = () => {
  const cookies = parseCookies()
  const { data: session }=useSession()
  const user = cookies?.user ? JSON.parse(cookies.user):session?.user ? session?.user : "";


  const [meal, setMeal] = useState(undefined);
  const [fav,setFav]=useState(false);
  const [recipeWindow, setRecipeWindow] = useState(false);
  const [favMeal, setFavMeal] = useState("");
  const [search, setSearch] = useState("");
  const [searchWindow, setSearchWindow] = useState(false);
  const [searchMeals, setSearchMeals] = useState('');
  const [activeRecipeInfo, setActiveRecipeInfo] = useState(null);
  const [index,setIndex]=useState([]);

  //Random Meal Section
  async function getMeal(){
    const res = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
    const data = await res.data;
    console.log('data', data.meals[0])

    setMeal(data.meals[0]);
  }
 


  useEffect(() => {
      fetchFavMeals();
      getMeal();
  }, []);

  if(!meal) return null;

    
  const{
    strMealThumb,
    strInstructions,
    strArea,
    strCategory,
    strMeal,
    strSource
  }=meal;
  
  
  
  function addMeal (){
    if(fav === true){
      removeMealLS(meal);
      setFav(false);
    }else {
      addMealLS(meal)
      setFav(true)
    }
  };
  
  function addSearchMeal (mealInfo){
    if(fav === false){
      addMealLS(mealInfo)
      setFav(false);
    }
  };


  function getMealLS(){
    const mealIds = JSON.parse(localStorage.getItem('mealIds'));
    return mealIds === null ? []: mealIds; 

  }


  async function fetchFavMeals(){
    const mealIds = getMealLS();
    const favoriteMeals=[];

  for(let i=0;i<mealIds.length;i++){
    // const mealId=mealIds[i];
    favoriteMeals.push(mealIds[i]);
  }
  setFavMeal(favoriteMeals)
}


  async function addMealLS(mealId){
    const mealIds = await getMealLS();
    localStorage.setItem('mealIds',JSON.stringify([...mealIds,mealId]));
    console.log('mealIdsget', mealIds)
  }

  async function removeMealLS(mealInfo){
    const mealIds = await getMealLS();
    mealIds.forEach((meals,index,object) => {
      if(mealInfo.idMeal === meals.idMeal){
        object.splice(index, 1);
      }
    });
  
    localStorage.setItem('mealIds',JSON.stringify(mealIds.filter(meal=> meal!==mealInfo)))
  }


  //Search Section
  const searchMeal= e =>{
   setSearch(e.target.value);
 }

  const getSearch = async(e) =>{
    e.preventDefault();
    
    try{
      
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`+search);
      const data = await res.json();
      setSearchMeals(data);

      if(search === ""){
        setSearchWindow(false)
      }else{
        setSearchWindow(true)
      }
    }catch(err){
      alert('There are no meals that match your search');
      console.log('err :>> ', err);
    }   
  }

  return (
    <>
      {cookies?.token || session?.user ?(
        <>
        <Layout user={user}>
  <div className={styles.backgroundContainer}>
    <div className={styles.recipeContainer}>
       <div className={styles.mobileContainer}>
          <form onSubmit={getSearch} className={styles.header}>
            <input type="text" value={search} onChange={searchMeal}/>
            <button><FontAwesomeIcon icon={faSearch} className={styles.search} color="#131313" onClick={getSearch}/></button>
          </form>
        <div className={styles.favContainer}>
          <h3>Favorite Meals</h3>
          <div className={styles.favMealsContainer} >
            <ul className={styles.favMeals} id='favorite-meals'>
              {favMeal.map(meals=>(
                <li key={meals.idMeal}>
                  <button className={styles.close} onClick={()=>removeMealLS(meals)}>X</button>
                  <img onClick={()=>{setRecipeWindow(true); setActiveRecipeInfo(meals)}} src={meals.strMealThumb} alt=""/>
                  <p>{meals.strMeal}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Meal meal={meal} setActiveRecipeInfo={setActiveRecipeInfo} addMeal={addMeal} addSearchMeal={addSearchMeal} setRecipeWindow={setRecipeWindow} search={search} searchMeals={searchMeals} searchWindow={searchWindow}/>
      </div> 
    </div>
  </div>
      </Layout> 
      </>
        ):(
          <div>This page is unavailable. Please Log in</div>
          )
        }
  {recipeWindow && <RecipeWindow activeRecipeInfo={activeRecipeInfo}  setRecipeWindow={setRecipeWindow}/>}
    </>
  )
}


export default Recipes