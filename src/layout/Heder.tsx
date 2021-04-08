import React, { Component } from 'react';
import styled from 'styled-components';

interface Props {}
interface State {}

export default class Heder extends Component<Props, State> {
  state = {};

  render() {
    return <Container>Header</Container>;
  }
}

const Container = styled.div`
  font-size: 30px;
`;
