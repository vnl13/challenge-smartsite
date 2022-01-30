import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1165px;
  width: 86%;
  height: 100%;
  margin: 0 auto;
  padding: 5rem 0;

  h2 {
    font-family: 'Gotham';
    color: var(--dark-grey);
    line-height: 2.5rem;
    font-weight: 600;
    font-size: 2.25rem;

    span {
      display: block;
    }

    &:after {
      content: '';
      display: block;
      max-width: 85px;
      width: 100%;

      border-bottom: 0.625rem solid;
      margin: 1rem 0 2rem;
    }
  }

  p {
    font-weight: 300;
    margin: 2.5rem 0;
  }
`;
