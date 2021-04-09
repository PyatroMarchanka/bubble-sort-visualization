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

    const arr = [...this.state.columns];

    let lenght = arr.length - 1;
    do {
      this.swap = false;
      for (var i = 0; i < lenght; i++) {
        if (!this.state.isSortingInProcess) {
          return;
        }
        await this.nextSortingStep(i);
      }
      lenght--;
    } while (this.swap);

    this.setState({ isSorted: true });
  };

  nextSortingStep = async (idx: number) => {
    const newColumns = [...this.state.columns];
    if (newColumns[idx] < newColumns[idx + 1]) {
      var temp = newColumns[idx];
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
        <Controls>
          {!this.state.isSorted ? (
            <Button onClick={this.state.isSortingInProcess ? this.pause : this.start}>
              {this.state.isSortingInProcess ? 'Pause' : 'Start'}
            </Button>
          ) : (
            <Button onClick={this.resetColumns}>New set</Button>
          )}
          <Status>
            {this.state.isSorted
              ? 'Sorted!'
              : this.state.isSortingInProcess && 'Sorting in process...'}
          </Status>
        </Controls>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Controls = styled.div`
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

const Status = styled.span``;
