import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: var(--background);
`;

export const FormContainer = styled.div`
  background-color: var(--black);
  padding: 4rem;
  border-radius: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border: 1px solid var(--green);
  text-align: center;
`;

export const Title = styled.h2`
  color: var(--white);
  font-size: 2.5rem;
  margin-bottom: 0.5rem;

  span {
    color: var(--green);
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;
`;

export const Label = styled.label`
  color: var(--white);
  font-size: 1.2rem;
`;

export const Input = styled.input`
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #333;
  background-color: transparent;
  color: var(--white);
  font-size: 1.2rem;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: var(--green);
  }
`;

export const Select = styled.select`
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #333;
  background-color: var(--black);
  color: var(--white);
  font-size: 1.2rem;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: var(--green);
  }
`;

export const Button = styled.button`
  padding: 1rem;
  border-radius: 0.5rem;
  border: none;
  background-color: var(--green);
  color: var(--black);
  font-size: 1.4rem;
  font-weight: bold;
  cursor: pointer;
  transition: filter 0.2s;
  margin-top: 1rem;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const ErrorText = styled.p`
  color: #ff5f5f;
  font-size: 1.2rem;
  margin-top: -1rem;
  text-align: left;
`;
