import React, { Component } from 'react';
import { Backdrop, ModalContent, StyledButton } from './Modal.styled';

export class App extends Component {
  render() {
    const {
      currentImg: { src, alt },
    } = this.props;
    return (
      <Backdrop>
        <ModalContent>
          <img src={src} alt={alt} />
          <StyledButton type="button">Close</StyledButton>
        </ModalContent>
      </Backdrop>
    );
  }
}
