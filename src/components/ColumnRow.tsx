import React from 'react';
import styled from 'styled-components';
import { Column } from './Column';

interface Props {
  columns: number[];
}

export const ColumnsRow = ({ columns }: Props) => {
  console.log('columns', columns);
  return (
    <Container>
      {columns.map((column, idx) => (
        <Column key={`${idx}-${column}`} height={column} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: flex-end;
`;
