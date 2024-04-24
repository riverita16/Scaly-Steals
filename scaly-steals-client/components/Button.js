import styled, {css} from "styled-components"

const StyledButton = styled.button`
    border: 0;
    padding: 5px 15px;
    border-radius: 5px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    
    svg {
        height: 16px;
    }

    ${props => props.white && !props.outline && css`
        background-color: #fff;
        color: #000;
    `}
    ${props => props.white && props.outline && css`
        background-color: transparent;
        color: #fff;
        border: 1px solid #fff;
    `}
    ${props => props.primary && css`
        background-color: #89CFF0;
        color: #fff;
        border: 1px solid #89CFF0;

        svg {
            margin-right: 5px;
        }
    `}
    ${props => props.like && css`
        background-color: #fe8181;
        color: #fff;
        border: 1px solid #fe8181;

        :hover {
            fill: #fff;
        }
    `}
    ${props => props.liked && css`
        background-color: #fe8181;
        color: #fff;
        border: 1px solid #fe8181;
    `}
    ${props => props.pay && css`
        width: auto;
        background-color: #fff;
        color: #89CFF0;
        border: 1px solid #fff;
        font-size: 1.2rem;
    `}
    ${props => props.delete && css`
        background-color: red;
        color: #fff;
        border: 1px solid red;

        svg {
            margin-right: 5px;
        }
    `}
    ${props => props.size === 'l' && css`
        font-size: 1.2rem;
        padding: 10px 20px;

        svg {
            height: 20px;
        }
    `}
    ${props => props.reg && css`
        font-size: 0.7rem;
        
        svg {
            height: 12px;
        }
    `}
`;

export default function Button({children,...rest}) {
    return (
        <StyledButton {...rest}>{children}</StyledButton>
    );
}