function MyRecipesComponent({label,image, calories, ingredients,  cuisine, health, chole,fat,iron,ribf,thia, tocpha,vitb6a,vitb12,vitc,chocdf,sugars,protein,fiber,fatrn }) {
    return(<div>  
    <div className="container">
        <h2>{label}</h2> 
       
    </div>

   <div className="container">
   <div className="box">  
        <h5>Cuisine: {cuisine}</h5> 
        <p> Dish type: {health}</p>
        </div>
    </div>
    <div className="container">
       <img className="tasty" src={image} alt="food"/>
    </div>

    <ul className="list">
{ingredients.map((ingredient,index)  => (
<li key={index} > 
<img src="https://img.icons8.com/fluency/512/parsley.png" 
className="icon" alt="recipe" />{ingredient}</li>

))}
    </ul>


    <div className="container">
        <p className="par"><img src="https://img.icons8.com/fluency/512/caloric-energy.png" 
className="icon" alt="calories" />{calories.toFixed()} calories</p>

    </div>



  <div className="totalDaily "> 
    <table> 
    <tbody> 
    <tr>
        <th>Nutrients </th>
        <th>Vitamins </th>
    </tr>

 

    <tr>
    <th>Fats: {fat.toFixed()} g </th>
    <th> B2: {ribf.toFixed()} mg </th>  
    </tr>

    <tr>
    <th>Carbohydrates: {chocdf.toFixed()} g </th>

    <th>  B1: {thia.toFixed()} mg </th>  
    </tr>

    <tr>

    <th>Sugar: {sugars.toFixed()} g </th>
    <th> E: {tocpha.toFixed()} mg  </th>  
    </tr>

    <tr>
    <th>Saturated fat: {fatrn.toFixed()} g </th>
    <th> B6: {vitb6a.toFixed()} mg </th>  
    </tr>


    <tr>
    <th>Cholesterol: {chole.toFixed()} mg </th>
    <th>B12: {vitb12.toFixed()} mg </th>  
    </tr>

    <tr>
    <th>Proteins: {protein.toFixed()} g</th>
    <th> C: {vitc.toFixed()} mg </th>  
    </tr>

   <tr>
    <th> Fibers: {fiber.toFixed()} g</th>
    <th> FE: {iron.toFixed()} mg </th>  
    </tr>
    </tbody>
</table>
</div>

<hr/>

</div>
    )
}
export default MyRecipesComponent;