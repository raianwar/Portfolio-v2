import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  padding: 8rem 2rem 2rem;
  background-color: var(--background);
  color: var(--white);
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 2rem;

  span {
    color: var(--green);
  }
`;

export const Table = styled.table`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  border-collapse: collapse;
  background-color: var(--black);
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);

  th, td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid #333;
  }

  th {
    background-color: #111;
    color: var(--green);
    font-size: 1.2rem;
  }

  tr:last-child td {
    border-bottom: none;
  }
`;

export const ActionButton = styled.button<{ $danger?: boolean }>`
  background-color: ${(props) => (props.$danger ? '#ff5f5f' : 'var(--green)')};
  color: ${(props) => (props.$danger ? 'white' : 'var(--black)')};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: bold;
  margin-right: 0.5rem;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const AddButton = styled.button`
  display: block;
  margin: 0 auto 2rem auto;
  background-color: var(--green);
  color: var(--black);
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: var(--black);
  padding: 2rem;
  border-radius: 1rem;
  width: 100%;
  max-width: 400px;
  border: 1px solid var(--green);

  h3 {
    margin-bottom: 1rem;
    color: var(--green);
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 0.5rem;
  }

  input, select {
    padding: 0.8rem;
    border-radius: 0.5rem;
    border: 1px solid #333;
    background-color: #111;
    color: white;
    outline: none;

    &:focus {
      border-color: var(--green);
    }
  }
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
`;
