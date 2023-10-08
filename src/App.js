import {useState} from "react"
import allMovies from "./data"
import categories from "./categories"
const App=()=>{
const [typeOfMovie,settypeOfMovie]=useState("komedie")

const vyslednefilmi=allMovies.filter((onemovie)=>{
  return onemovie["category"]===typeOfMovie
})
  console.log(vyslednefilmi)
  return <div>
    <div>
      {
        vyslednefilmi.map((onemovie)=>{
          const {id,image,title,age,tags,description}=onemovie

          return <div>
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