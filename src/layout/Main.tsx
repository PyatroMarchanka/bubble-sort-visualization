import React, { Component } from 'react';
import styled from 'styled-components';
import { ColumnsRow } from '../components/ColumnRow';
import { getRandomIntArray } from '../sorting';
import { Controls } from './Controls';

interface Props {}
interface State {
  columns: number[];
  currentColumn: number;
  currentRound: number;
  isSorted: boolean;
  isSortingInProcess: boolean;
}
const columnsCount = 20;
export class Main extends Component<Props, State> {
  columnsCount = columnsCount;
  swap: boolean = false;

  state: State = {
    columns: getRandomIntArray(columnsCount, 200),
    currentColumn: 0,
    currentRound: 0,
    isSorted: false,
    isSortingInProcess: false,
  };

  resetColumns = () => {
    const columns = getRandomIntArray(columnsCount, 200);
    this.setState({ columns, isSorted: false, isSortingInProcess: false });
  };

  pause = () => {
    this.state.isSortingInProcess = false;
    this.setState({ isSortingInProcess: false });
  };

  start = () => {
    this.setState({ isSortingInProcess: false }, () => this.sortArr());
  };

  sortArr = async () => {
    this.state.isSortingInProcess = true;

    const columns = [...this.state.columns];

    let steps = columns.length - 1;
    do {
      this.swap = false;
      for (let i = 0; i < steps; i++) {
        if (!this.state.isSortingInProcess) {
          return;
        }
        await this.nextSortingStep(i);
      }
      steps--;
    } while (this.swap);

    this.setState({ isSorted: true });
  };

  nextSortingStep = async (idx: number) => {
    const newColumns = [...this.state.columns];
    if (newColumns[idx] < newColumns[idx + 1]) {
      const temp = newColumns[idx];
      newColumns[idx] = newColumns[idx + 1];
      newColumns[idx + 1] = temp;
      this.swap = true;
      this.setState({ columns: newColumns });
    }

    await new Promise((resolve) => setTimeout(resolve, 100));
  };

  render() {
    return (
      <Container>
        <ColumnsRow columns={this.state.columns} />
        <Controls
          start={this.start}
          pause={this.pause}
          resetColumns={this.resetColumns}
          isSorted={this.state.isSorted}
          isSortingInProcess={this.state.isSortingInProcess}
        />
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
