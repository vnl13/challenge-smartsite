import styled from 'styled-components';

export const Container = styled.div`
  background: #dedede48;
  margin: 3rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const LegendItem = styled.section`
  text-align: center;

  strong {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  div {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
`;
