import React, { useState, useEffect } from 'react';
import '../styles/ex.scss'
// import Dropdown from 'react-bootstrap/Dropdown';

const muscleGroups = [
  "abductors",
  "abs",
  "adductors",
  "biceps",
  "calves",
  "cardiovascular system",
  "delts",
  "forearms",
  "glutes",
  "hamstrings",
  "lats",
  "levator scapulae",
  "pectorals",
  "quads",
  "serratus anterior",
  "spine",
  "traps",
  "triceps",
  "upper back"
];


const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState('');

  
//   useEffect(() => {
//     fetchExercises(selectedMuscleGroup);
//   }, [selectedMuscleGroup]);
  
  const fetchExercises = async (muscle) => {
    const url = `https://exercisedb.p.rapidapi.com/exercises/target/${muscle}`;
    const options = {
      method: 'GET',
      headers: {
        // 'X-RapidAPI-Key': '26908e2be7msh5615c6a66ee819dp1da6dajsn67c2c910e034',
        // 'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'

        'X-RapidAPI-Key':process.env.REACT_APP_API_KEY,
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }

    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      const data= JSON.parse(result);
      console.log(result);
      setExercises(data.splice(0,4));
      console.log(exercises,"exercises")

    } catch (error) {
      console.error(error);
    }

  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchExercises(selectedMuscleGroup);
    setSelectedMuscleGroup('');
   
  };
 

  return (
    <div className='exercises'>
    <h1>Your Ultimate Exercise Guide</h1>
      <p>Explore a variety of exercises to achieve your fitness goals.</p>

     
       <form onSubmit={handleSubmit}>
        {/* <input type='text' value={selectedMuscleGroup} placeholder='enter muscle name' onChange={(e)=>{
  setSelectedMuscleGroup(e.target.value)
  console.log(selectedMuscleGroup)
        }}/> */}
        <select
          value={selectedMuscleGroup}
          onChange={(e) => setSelectedMuscleGroup(e.target.value)}
        >
          <option value="">Select a muscle group</option>
          {muscleGroups.map((muscle, index) => (
            <option key={index} value={muscle}>
              {muscle}
            </option>
          ))}
        </select>
        <button type='submit'>SEARCH</button>
       </form>
     
       <ul>
        {exercises.map((exercise) => (
          <li key={exercise.id}>
            
            
            <img src={exercise.gifUrl
} alt="gif" loading="lazy"/>
<br/>
<h2>{exercise.name}</h2>
          </li>
        ))}

      </ul>
     
      
    </div>
  );
};

export default Exercises;
