import React, { Component } from 'react';
import styled from 'styled-components';
import { Header } from './layout/Header';
import { Main } from './layout/Main';

interface Props {}
interface State {}

export default class App extends Component<Props, State> {
  state = {};

  render() {
    return (
      <Container>
        <Header />
        <Main />
      </Container>
    );
  }
}

const Container = styled.div``;
