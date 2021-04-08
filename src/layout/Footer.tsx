import React, { Component } from 'react';
import styled from 'styled-components';

interface Props {}
interface State {}

export class Footer extends Component<Props, State> {
  state = {};

  render() {
    return <Container>Footer</Container>;
  }
}

const Container = styled.div`
  font-size: 30px;
`;
