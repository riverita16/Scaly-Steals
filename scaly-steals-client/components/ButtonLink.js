import styled, {css} from "styled-components"
import Link from "next/link";

const StyledButton = styled(Link)`
    border: 0;
    padding: 5px 15px;
    border-radius: 5px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    
    svg {
        height: 16px;
        margin-right: 5px
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

export default function ButtonLink({children,...rest}) {
    return (
        <StyledButton {...rest}>{children}</StyledButton>
    );
}