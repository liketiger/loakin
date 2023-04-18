import React from 'react';
import CrewItem from './CrewItem';
import { useAppSelector } from '../../utils/RTKhooks';

const CrewList = () => {
  const members = useAppSelector((state) => state.crew);
  return (
    <>
      {members.name.map((item: string, index) => (
        <CrewItem key={index} name={item} characterList={members.characterList[index]} />
      ))}
    </>
  );
};

export default CrewList;
