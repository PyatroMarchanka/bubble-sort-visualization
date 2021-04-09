import React from 'react';
import styled from 'styled-components';

interface Props {
  isSorted: boolean;
  isSortingInProcess: boolean;
  pause: () => void;
  start: () => void;
  resetColumns: () => void;
}

export const Controls = ({ isSorted, isSortingInProcess, pause, start, resetColumns }: Props) => {
  return (
    <ControlsWrapper>
      {!isSorted ? (
        <Button onClick={isSortingInProcess ? pause : start}>
          {isSortingInProcess ? 'Pause' : 'Start'}
        </Button>
      ) : (
        <Button onClick={resetColumns}>New set</Button>
      )}
      <Status>{isSorted ? 'Sorted!' : isSortingInProcess && 'Sorting in process...'}</Status>
    </ControlsWrapper>
  );
};

const ControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: #faebd7;
  outline: none;
  border-radius: 4px;
  border: 1px solid #c7b7a3;
  padding: 10px;
  text-transform: uppercase;
  margin-right: 20px;
`;

const Status = styled.span`
  font-family: Arial, Helvetica, sans-serif;
`;
