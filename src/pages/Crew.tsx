import React from 'react';
import { CrewGrid } from '../components/crew/CrewGrid';

const mock = {
  date: '2023-04-03',
  raid: [
    {
      name: "발탄",
      level: "노말",
      time: "09:30:00",
      characterList: [
        {
          ServerName: "실리안",
          CharacterName: "에르가시안",
          CharacterLevel: 57,
          CharacterClassName: "블래스터",
          ItemAvgLevel: 1523,
        },
        {
          ServerName: "실리안",
          CharacterName: "에르가시안2",
          CharacterLevel: 57,
          CharacterClassName: "블래스터",
          ItemAvgLevel: 1523,
        }
      ]
    },
    {
      name: "발탄",
      level: "하트",
      time: "06:30:00",
      characterList: [
        {
          ServerName: "실리안",
          CharacterName: "에르가시안",
          CharacterLevel: 57,
          CharacterClassName: "블래스터",
          ItemAvgLevel: 1523,
        },
        {
          ServerName: "아브렐슈드",
          CharacterName: "에르가시안2",
          CharacterLevel: 57,
          CharacterClassName: "홀리나이트",
          ItemAvgLevel: 1523,
        }
      ]
    }
  ]
}

const Crew = () => {
  const sendTest = async () => {
    const res = await fetch('http://localhost:5000/schedule', {
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