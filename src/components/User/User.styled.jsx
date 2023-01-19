import styled from 'styled-components';

export const NativeText = styled.span`
  font-size: 35px;
  color: green;
  background-color: ${({ isRed }) => (isRed ? 'darkblue' : 'beige')};
`;

export const Text = styled.p`
  font-size: 16px;
  color: darkblue;
  background-color: beige;
  &:hover {
    color: blue;
  }
  &:hover ${NativeText} {
    background-color: blueviolet;
  }
`;

export const Btn = styled.button`
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  background-color: darkblue;
  padding: 10px 15px;
  margin-left: 20px;
`;
