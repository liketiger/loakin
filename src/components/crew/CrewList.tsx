import React from 'react';
import CrewItem from './CrewItem';
import { CharacterDetail, MemberType } from '../../types/fetch-types';
import { useAppSelector } from '../../utils/RTKhooks';

const CrewList = () => {
  const members = useAppSelector((state) => state.crew);
  return (
    <>
      {members.map((item: MemberType, index) => (
        <CrewItem key={index} detail={item} />
      ))}
    </>
  );
};

export default CrewList;
