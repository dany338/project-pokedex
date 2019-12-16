import styled from 'styled-components';
import assets from '../assets';

export const Container = styled.div`
  display: flex;
  &.home {
    background-color: #313131;
    flex-direction: column;
    width: 100%;
    min-height: 80vh;
    align-items: center;
    padding-left: 0;
    padding-top: 0;
    @media (min-width: 600px) {
      padding-left: 0;
    }

    .slider {
      background: url(${assets.pikachu}) center top/cover no-repeat #ccc;
      height: 90vh;
      min-height: 500px;
      width: 100%;
    }
  }
`;
