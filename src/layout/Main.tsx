import React, { Component } from 'react';
import styled from 'styled-components';
import { ColumnsRow } from '../components/ColumnRow';
import { getRandomIntArray } from '../sorting';

interface Props {}
interface State {
  columns: number[];
  currentColumn: number;
  currentRound: number;
  isSorted: boolean;
}
const columnsCount = 20;
export class Main extends Component<Props, State> {
  columnsCount = columnsCount;
  state: State = {
    columns: getRandomIntArray(columnsCount, 200),
    currentColumn: 0,
    currentRound: 0,
    isSorted: false,
  };

  bubbleSort = async () => {
    while (!this.state.isSorted) {
      await this.nextSortingStep();
      if (
        this.state.currentColumn < this.columnsCount &&
        this.state.currentRound < this.columnsCount
      ) {
        this.nextSortingStep();
      } else if (this.state.currentColumn >= this.columnsCount) {
        this.setState({ currentColumn: 0, currentRound: this.state.currentRound + 1 }, () =>
          this.nextSortingStep()
        );
      } else if (this.state.currentRound >= this.columnsCount) {
        this.setState({ isSorted: true });
      }
    }
  };

  startSorting = () => {};

  nextSortingStep = async () => {
    const idx = this.state.currentColumn;
    const newColumns = [...this.state.columns];
    if (newColumns[idx] > newColumns[idx + 1]) {
      let tmp = newColumns[idx];
      newColumns[idx] = newColumns[idx + 1];
      newColumns[idx + 1] = tmp;
      this.setState({ columns: newColumns });
    }

    this.setState({ currentColumn: this.state.currentColumn + 1 });
    await new Promise((resolve) => setTimeout(resolve, 100));
  };

  render() {
    return (
      <Container>
        <ColumnsRow columns={this.state.columns} />
        <button onClick={() => this.bubbleSort()}>next</button>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
