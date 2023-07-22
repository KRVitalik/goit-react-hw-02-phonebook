import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  `

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  `

export const Button = styled.button`
  margin-top: 8px;
  cursor: pointer;
    padding: 8px 16px;
  border: none;
  border-radius: 4px;
  align-self: center;

    &:hover {
    background-color: #a756c5;
    color: white;
  }
  `