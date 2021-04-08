import React, { Component } from 'react';
import styled from 'styled-components';
import { Footer } from './layout/Footer';
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
        <Footer />
      </Container>
    );
  }
}

const Container = styled.div``;
