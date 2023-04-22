import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { FaEdit } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { RaidDetail } from '../../types/render-type';
import { useAppDispatch } from '../../utils/RTKhooks';
import { raidActions } from '../../store/raid';

type RaidInfoProp = {
  raid: RaidDetail[];
};

const raidLevelTable = {
  '발탄(노말)': 1415,
  '발탄(하드)': 1445,
  '비아(노말)': 1430,
  '비아(하드)': 1460,
  '쿠크(노말)': 1475,
  '아브(노말12)': 1490,
  '아브(노말34)': 1500,
  '아브(노말56)': 1520,
  '아브(하드12)': 1540,
  '아브(하드34)': 1550,
  '아브(하드56)': 1560,
  '일리(노말)': 1580,
  '일리(하드)': 1600
};

const RaidInfo = (props: RaidInfoProp) => {
  const { raid } = props;
  const [isSelected, setIsSelected] = useState('');
  const dispatch = useAppDispatch();

  const refineRaid = (item: RaidDetail) => {
    const { name, level, time, characterList, _id } = item;
    const newStr = `${name}(${level})`;
    const newTime = time.split(':').slice(0, -1).join(':');

    const raidHandler = () => {
      setIsSelected(_id as string);
      dispatch(raidActions.setCharacterList(characterList));
    }

    return (
      <RaidInfoWrapper key={_id} onClick={raidHandler} id={_id as string} isSelected={isSelected}>
        <IconWrapper type='close'>
          <RaidInfoClose />
        </IconWrapper>
        <RaidText>{newTime}</RaidText>
        <RaidText>{newStr}</RaidText>
        <RaidText>{raidLevelTable[newStr as keyof typeof raidLevelTable]}</RaidText>
        <IconWrapper type='edit'>
          <RaidInfoEdit />
        </IconWrapper>
        <CoverUpBox className='cover-box' />
      </RaidInfoWrapper>
    );
  };

  return <>
   {raid.map(refineRaid)}
  </>;
};

const RaidInfoWrapper = styled.div<{ isSelected: string, id: string }>`
  margin: 0 auto;
  margin-bottom: 10px;
  background-color: ${({ isSelected, id }) => isSelected === id ? 'grey' : '#ff8400'};
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
`

export default RaidInfo;
