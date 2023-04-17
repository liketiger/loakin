import React from 'react'
import { useSelector } from 'react-redux';
import CrewItem from './CrewItem';
import { MemberType } from '../../types/fetch-types';
import { InitialCrewState } from '../../types/render-type';

const CrewList = () => {
  const members = useSelector((state) => state.crew.characterList);
  return (
    <>
    {members.map((item: MemberType, index) => <CrewItem key={index} detail={item} />)}
    </>
  )
};

export default CrewList;
