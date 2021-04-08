import React from 'react';
import styled from 'styled-components';

interface Props {
  height: number;
}

export const Column = ({ height }: Props) => {
  return <Container height={height}></Container>;
};

const Container = styled.div<{ height: number }>`
  height: ${({ height }) => height}px;
  background-color: #faebd7;
  border-radius: 4px;
  border: 1px solid #c7b7a3;
  width: 10px;
  display: inline-block;
`;
