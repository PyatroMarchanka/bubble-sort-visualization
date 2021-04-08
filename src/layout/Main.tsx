import React, { Component } from 'react';
import styled from 'styled-components';
import { ColumnsRow } from '../components/ColumnRow';
import { getRandomIntArray } from '../sorting';

interface Props {}
interface State {
  columns: number[];
}

export class Main extends Component<Props, State> {
  state = {
    columns: getRandomIntArray(20, 200),
  };

  startSorting = () => {};

  nextSortingStep = () => {};

  render() {
    return (
      <Container>
        <ColumnsRow columns={this.state.columns} />
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
