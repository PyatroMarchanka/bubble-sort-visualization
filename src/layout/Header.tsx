import React, { Component } from 'react';
import styled from 'styled-components';

interface Props {}
interface State {}

export class Header extends Component<Props, State> {
  state = {};

  render() {
    return <Container>Bubble sort</Container>;
  }
}

const Container = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  text-align: center;
  margin-bottom: 30px;
`;
