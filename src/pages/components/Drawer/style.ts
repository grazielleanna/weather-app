import styled from 'styled-components';

export const Container = styled.section`
    height: 100%;
    background: #1E213A;
    padding: 0 2rem;
`;

export const Header = styled.header`
    padding: 1rem 0;
    text-align: right;
`

export const Close = styled.button`
    background: transparent;
    border:none;
    margin-bottom: 1.5rem;

    > svg{
        color: #FFF;
    }
`;

export const Search = styled.div`
    display: flex;
    justify-content: space-between;

    .input{
        width: 76%;

        > div{

            &:hover{
                fieldset{
                    border-color: #E7E7EB !important;
                }
            }

            svg{
                color: #616475;
            }

            input{
                font-family: 'Raleway', sans-serif;
                color: #E7E7EB;
                padding: 1rem 14px;
                &::placeholder{
                    font-weight: 400;
                }
            }
            
            fieldset{
                border-color: #E7E7EB;
                border-radius: 0;

                &.MuiOutlinedInput-notchedOutline{
                    border-color: #E7E7EB !important;
                }
            }
        }
    }
`;

export const Button = styled.button`
    background: #3C47E9;
    color: #FFF;
    border: none;
    padding: .3rem;
    font-size: 1rem;
    font-family: 'Raleway', sans-serif;
    width: 20%;
`;

export const Main = styled.main`
    margin-top: 2rem;
`;

export const ButtonOption = styled.button`
    width: 100%;
    background: transparent;
    color: #E7E7EB; 
    border: none;

    font-size: 1rem;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem;
    border: 1px solid transparent;

    transition: border-color .3s;

    &:hover{
        border-color: #616475;
    }

    svg{
        width: 1rem;
        color: #616475;
    }
`;