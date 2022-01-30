import styled from 'styled-components';

export const Container = styled.form`
  color: var(--dark-grey);

  span {
    font-weight: 300;
  }

  div:first-child {
    box-shadow: 1px 1px 1px 4px #dddddd88;
    border-radius: 4px;
    padding: 1.5rem;
    width: 100%;
    & > span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
    }
  }

  fieldset + div {
    margin: 3rem 0 0.5rem;
    display: flex;
    font-size: 1.125rem;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    color: var(--dark-grey);

    input {
      margin-right: 0.5rem;
      width: 1.25rem;
      height: 1.25rem;
    }
    strong {
      font-weight: 600;
    }

    label,
    span {
      padding: 0.25rem;
    }
  }

  div + footer {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  button {
    background: var(--yellow);
    border: none;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 4px;
    max-width: 31.25rem;
    width: 100%;
    height: 3.5rem;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
    & + button {
      &:hover {
        filter: brightness(0.9);
      }
      background: #ffffff;
      border: 2px solid #bbbbbbff;
    }
  }
`;

export const Schedules = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;

  legend {
    width: 100%;
    font-size: 1.5rem;
    font-weight: 300;
    position: relative;
    margin: 0 0 1.5rem 1rem;

    &:after {
      content: '';
      display: block;
      right: 1rem;
      position: absolute;
      width: 100%;
      border-bottom: 2px solid #ddddddaa;
      margin: 0.25rem 0 1rem;
    }
  }

  label {
    display: flex;
    align-items: center;
    font-weight: 300;
    font-size: 1.125rem;
    border-bottom: 2px solid #ddddddaa;
    padding: 0.75rem 0;
    & + label {
      margin-top: 0.5rem;
    }
    input {
      margin-right: 0.5rem;
      width: 1.25rem;
      height: 1.25rem;
    }
    span {
      margin-left: auto;
    }
  }
`;
