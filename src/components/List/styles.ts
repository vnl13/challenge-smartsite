import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 2.5rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  color: var(--dark-grey);
`;

interface ListItemProps {
  isOpen: boolean;
}

export const ListItem = styled.div<ListItemProps>`
  padding: 1rem;
  background: #dedede48;
  border-radius: 6px;
  box-shadow: 0px 0px 4px 1px #b8b8b8ae;
  header {
    strong {
      font-weight: 600;
      font-size: 0.85rem;
      color: ${(props) => (props.isOpen ? 'var(--green)' : 'var(--red)')};
      line-height: 2rem;
    }

    h3 {
      font-size: 1.5rem;
      line-height: 2.5rem;
      font-weight: 600;
    }

    p {
      font-size: 0.825rem;
    }

    &:after {
      content: '';
      display: block;
      border-bottom: ${(props) => (props.isOpen ? '2px solid #bababaaa' : '')};
    }
  }

  section {
    display: flex;
    gap: 1rem;
    margin: 1rem 0 1.5rem;
  }

  footer {
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem;
    div {
      h4 {
        font-size: 1.25rem;
        font-weight: 600;
      }
    }
  }
`;
