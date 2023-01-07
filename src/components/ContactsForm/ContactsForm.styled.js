import styled from 'styled-components';

export const Error = styled.div`
  width: 100%;
  height: 30px;
  :not(:last-child) {
    margin-bottom: 16px;
  }

  text-align: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2;

  color: red;
`;
