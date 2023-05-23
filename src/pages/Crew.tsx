import React from 'react';
import { CrewGrid } from '../components/crew/CrewGrid';

const mock = {
  name: "아브",
  level: "노말",
  time: "10:30:00",
  characterList: []
};

const Crew = () => {
  const sendTest = async () => {
    const res = await fetch(`http://localhost:5000/schedule/6440f6a14f25d8ccfd121832`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(mock)
    });
    const res2 = await res.json();
    console.log(res2);
  };

  return (<>
    <button type='button' onClick={sendTest}>hi</button>
    <CrewGrid />
    </>
  )
};

export default Crew;