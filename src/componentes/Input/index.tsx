import { ContainerBox } from "./styles"

export default function Input () {
    return (
        <ContainerBox>
            <h1>Entrar</h1>
                <form>
                    <label> Name:</label>
                    <input type="text" name="name" />
                    
                    <label> Sobrenome: </label>
                    <input type="text" name="name" />

                    <button type="button">Click Me!</button>
                </form>
        </ContainerBox>
    )
}