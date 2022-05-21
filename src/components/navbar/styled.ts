import styled from 'styled-components'

export const NavbarContainer = styled.div`
    height: 126px;
    background-color: #09357B;
    padding: 0 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Img = styled.img`
    width: 142px;
    height: auto;
`

export const IconBox = styled.div`
    padding: 0 40px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    border-bottom: solid 3px #ffffff;
    cursor: pointer;

    & svg {
        width: 25px;
        height: 25px;
    }
`

export const InputBox = styled(IconBox)`
    width: 350px;
    background-color: #2153A3;
    justify-content: space-between;
    cursor: unset;

    & svg {
        cursor: pointer;
    }
`

export const Input = styled.input`
    font-size: 20px;
    font-family: 'Roboto';
    width: 80%;
    height: 100%;
    background: none;
    border-style: none;
    color: #ffffff;
    caret-color: #ffffff;

    &:focus{
        outline: none;
    }
`