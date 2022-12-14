import styled, {css} from 'styled-components';

export const ButtonContainer = styled.button`
    width: 100%;
    height: 42px;
    background-color: #5A6268;
    color: #FFF;
    border-radius: 21px;

    ${({disabled}) => !disabled && css`
    background-color: #81259D;
    border: 1px solid #81259D;

    &:hover {
        opacity: 0.6;
        cursor:pointer;
    }
    `};
`