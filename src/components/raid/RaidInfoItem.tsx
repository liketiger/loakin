import React, { MouseEvent, useState } from 'react';
import styled, { css } from 'styled-components';
import { FaEdit } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { RaidDetail } from '../../types/render-type';
import { useAppDispatch, useAppSelector } from '../../utils/RTKhooks';
import { raidActions } from '../../store/raid';
import { UIActions } from '../../store/ui';
import { raidLevelTable } from '../../store/data';
import useDB from '../../hooks/useDB';
import { formActions } from '../../store/form';

type RaidInfoItemProps = {
  item: RaidDetail;
  scheduleId: string | undefined;
};

const RaidInfoItem = ({ item, scheduleId }: RaidInfoItemProps) => {
  const { name, level, time, characterList, _id } = item;
  const currentRaidId = useAppSelector(state => state.raid.raidId);
  const newStr = `${name}(${level})`;
  const dispatch = useAppDispatch();
  const { deleteRaid } = useDB();

  const raidHandler = () => {
    dispatch(raidActions.setCurrentRaidId(_id as string));
    dispatch(raidActions.setCurrentScheduleId(scheduleId as string));
    dispatch(raidActions.setCharacterList(characterList));
    dispatch(UIActions.setIsCreate(false));
    dispatch(UIActions.setIsRaidListSelected(true));
  };

  const closeHandler = (e: MouseEvent) => {
    e.stopPropagation();
    deleteRaid(scheduleId!, _id!);
  };

  const updateHandler = (e: MouseEvent) => {
    e.stopPropagation();
    dispatch(formActions.setName(name));
    dispatch(formActions.setLevel(level));
    dispatch(formActions.setTime(time));
    dispatch(raidActions.setCurrentRaidId(_id as string));
    dispatch(UIActions.setIsCreate(true));
    dispatch(UIActions.setIsModify(true));
  };

  return (
    <RaidInfoWrapper onClick={raidHandler} id={_id as string} currentRaidId={currentRaidId}>
      <IconWrapper type='close' onClick={closeHandler}>
        <RaidInfoClose />
      </IconWrapper>
      <RaidText>{time}</RaidText>
      <RaidText>{newStr}</RaidText>
      <RaidText>{raidLevelTable[newStr as keyof typeof raidLevelTable]}</RaidText>
      <IconWrapper type='edit' onClick={updateHandler}>
        <RaidInfoEdit />
      </IconWrapper>
      <CoverUpBox className='cover-box' />
    </RaidInfoWrapper>
  );
};


const RaidInfoWrapper = styled.div<{ currentRaidId: string, id: string }>`
  margin: 0 auto;
  margin-bottom: 10px;
  background-color: ${({ currentRaidId, id }) => currentRaidId === id ? 'grey' : '#ff8400'};
  width: 400px;
  height: 40px;
  border-radius: 5px;
  color: black;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover {
    cursor: pointer;
    background-color: grey;
  }
`;

const RaidText = styled.span`
  margin-right: 10px;
  font-size: 20px;
`;

const RaidInfoEdit = styled(FaEdit)`
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translate3d(0, -55%, 0);
`;

const RaidInfoClose = styled(IoIosCloseCircleOutline)`
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translate3d(0, -50%, 0);
`;

const IconWrapper = styled.div<{ type: string }>`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  ${({ type }) => type === 'edit' ? css`
    right: 0;
  ` : css`
    left: 0;
  `};
  font-size: ${({ type }) => type === 'edit' ? '25px' : '30px'};
  transform: translate3d(0, -50%, 0);
  color: ${({ type }) => type === 'edit' ? '#DCDCDC' : 'white'};
  z-index: 2;

  &:hover {
    color: grey;

    ${({ type }) => type === 'edit' ? css`
      ~ .cover-box {
        z-index: 0;
        background-color: #ff8400;

        &::before {
          content: '수정';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
          font-size: 20px;
          font-weight: bold;
        }
      }
    ` : css`
      ~ .cover-box {
        z-index: 0;
        background-color: #ff8400;

        &::before {
          content: '삭제';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
          font-size: 20px;
          font-weight: bold;
        }
      }
    `
    }
  }
`;

const CoverUpBox = styled.div`
  width: 400px;
  height: 40px;
  position: absolute;
  z-index: -1;
`;

export default RaidInfoItem;
