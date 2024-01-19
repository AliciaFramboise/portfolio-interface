import React, { useEffect, useState } from "react";
import axios from "axios";
import './Ideas.css';

/* const IdeasContext = React.createContext({
  ideas: [], fetchMonsters: () => {}
}) */

export default function Ideas() {

    const [ideas, setIdeas] = useState(null)
    const [animals, setAnimals] = useState(null)
    const [fruitsAndVeggies, setFruitsAndVeggies] = useState(null)

    const fetchMonsters = async () => 
      {
        const ideas = await axios.get(`http://127.0.0.1:8000/ideas`);
        setIdeas(ideas.data)
      }

    useEffect(() => {
      fetchMonsters()
    }, [])

    const fetchAnimals = async () => 
    {
      const animals = await axios.get(`http://127.0.0.1:8000/animals`);
      setAnimals(animals.data)
    }

    useEffect(() => {
      fetchAnimals()
    }, [])

    const fetchFruitsAndVeggies = async () => 
    {
      const fruitsAndVeggies = await axios.get(`http://127.0.0.1:8000/fruitsAndVeggies`);
      setFruitsAndVeggies(fruitsAndVeggies.data)
    }

    useEffect(() => {
      fetchFruitsAndVeggies()
    }, [])


    return (
     /*  <IdeasContext.Provider value={{ideas, fetchMonsters}}>
      </IdeasContext.Provider> */
      <div className="ideas-container">
        <p> Here's a tool for you to get some inspo... </p>
        <div className="tool-container">
          <div className="button-container">
            <button onClick={fetchMonsters}>
              MONSTER
            </button>
            <button onClick={fetchAnimals}>
              ANIMAL
            </button>
            <button onClick={fetchFruitsAndVeggies}>
              FRUIT AND VEGGIE
            </button>
          </div>
          <div className="generator-result">
            <h1>
              What you could draw
            </h1>
            <li>
              {ideas}
            </li>
            <li>
              {animals}
            </li>
            <li>
              {fruitsAndVeggies}
            </li>
          </div>
        </div>
      </div>
    )
  }