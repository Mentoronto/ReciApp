import React from 'react'
import styles from '../styles/RecipeWindow.module.css'

const RecipeWindow = ({setRecipeWindow,activeRecipeInfo}) => {


  const ingredients = [];
  for(let i=1;i<20; i++){
    if(activeRecipeInfo[`strIngredient`+i]){
        ingredients.push (`${activeRecipeInfo[`strIngredient`+i]} - ${activeRecipeInfo[`strMeasure`+i]}`)
    }
  }

    const{strMeal,strMealThumb,strInstructions,strCategory,strArea,strSource,strYoutube}=activeRecipeInfo;

    console.log('activeRecipeInfo', activeRecipeInfo)
  return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1>{strMeal}</h1> 
            <span onClick={()=>setRecipeWindow(false)} className={styles.close}>X</span>
            <div className={styles.top}>
              <img  src={strMealThumb} width={400} height={400} alt=''/>
              <p className={styles.Instructions}>{strInstructions}</p>
            </div>
            <div className={styles.bottom}>
              <div  className={styles.bottomLeft}>
                <h2>Ingredients</h2>
                {ingredients.map(info=>(
                  <li>{info}</li>
                ))}
              </div>
              <div className={styles.bottomRight}>
                <ul style={{listStyle:"none"}} className={styles.CategArea}>
                  <li><h3 style={{marginRight:"10px"}}>Category</h3><span>{strCategory}</span></li> 
                  <li><h3 style={{marginLeft:"10px"}}>Style</h3><span>{strArea}</span></li> 
               </ul>
               {activeRecipeInfo?.strSource && activeRecipeInfo.strYoutube ? (
                 <div style={{display:"flex",flexDirection:"column"}}>
                 <a href={strSource} style={{marginTop:"20px", marginLeft:"40px"}} target='_blank' >
                  <button className={styles.btn}>Full Recipe Site</button>
                </a>
                  <a href={strYoutube} style={{marginTop:"20px", marginLeft:"40px"}} target='_blank' >
                    <button className={styles.btn}>Full Recipe Tutorial</button>
                  </a>
                 </div>
                 ):(activeRecipeInfo?.strSource)?(
                   <a href={strSource} style={{marginTop:"20px", marginLeft:"40px"}} target='_blank' >
                  <button className={styles.btn}>Full Recipe/Tutorial</button>
                </a>
                  ):(
                  <a href={strYoutube} style={{marginTop:"20px", marginLeft:"40px"}} target='_blank' >
                  <button className={styles.btn}>Full Recipe/Tutorial</button>
                </a>
                  )}
              </div>
          </div>
        </div>
      </div>
  )
}

export default RecipeWindow