import React from 'react'
import { MdContentPasteOff } from "react-icons/md";
import styled from 'styled-components';

const Empty = (props: any) => {
  return (
    <EmptyContentWrapper {...props}>
      <EmptyContent />
    </EmptyContentWrapper>
  )
};

const EmptyContentWrapper = styled.div`
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const EmptyContent = styled(MdContentPasteOff)`
  color: #D3D3D3;
  font-size: 100px;
  margin: 0 auto;
`

export default Empty;
