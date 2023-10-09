import {useState} from "react"
import allMovies from "./data"
import categories from "./categories"
const App=()=>{
const [typeOfMovie,settypeOfMovie]=useState("komedie")

const vyslednefilmi=allMovies.filter((onemovie)=>{
  return onemovie["category"]===typeOfMovie
})

  return <div>
    <div className="all-buttons">
      {
        categories.map((onecategory,index)=>{
          return <button key={index} onClick={()=>settypeOfMovie(onecategory)}>{onecategory}</button>
        })
      }
    </div>
    <div className="all-movies">
      {
        vyslednefilmi.map((onemovie)=>{
          const {id,image,title,age,tags,description}=onemovie

          return <div className="one-movie" key={id}>
            <img src={image} alt="" />
            <h2>{title}</h2>
            <p>{age}</p>
            <p>{tags}</p>
            <p>{description}</p>
          </div>
        })
      }
    </div>
  </div>
}
export default App