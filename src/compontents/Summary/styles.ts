import styled from 'styled-components';

export const Container = styled.div`
  margin-top: -7rem;

  @media (min-width: 721px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  @media (max-width: 720px) {
    div + div {
      margin-top: 1rem;
    }
  }

  .transactions-total {
    background: var(--green);
    color: var(--shape);
  }

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }
  }
`;
