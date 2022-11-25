import styled from 'styled-components'

export const ContainerBox = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 2rem;

    form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
        font-size: 1rem;
        padding-top: 3rem;

        button {
            height: 50px;
            border: 0;
            background: ${props => props.theme["green-500"]};
            color: ${props => props.theme.white};
            padding: 0 1.25rem;
            border-radius: 6px;
            margin-top: 1.5rem;
            cursor: pointer;

            &:hover {
                background: ${props => props.theme["green-700"]} ;
                transition: background-color 0.2s;
            }
        }
    }
`