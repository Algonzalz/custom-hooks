import { useEffect } from "react"
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    // const [formState, setFormState] = useState({
    //     username: 'fonzo',
    //     email: '',
    //     password: ''
    // });

    // const { username, email, password } = formState; //desestructurando el password


    // const onInputChange = ({ target }) => {
    //     const { name, value } = target;
    //     setFormState({
    //         ...formState,
    //         [name]: value //PROPIEDADES COMsPUTADAS
    //     })

    // }



    const { formState, onInputChange, onResetForm, username, password, email } = useForm({
        username: 'fonzo',
        email: '',
        password: ''
    })

    // const { username, email, password } = formState; //desestructurando el password



    // useEffect(() => {

    //     // console.log('use effect called')
    // }, []);
    // useEffect(() => {

    //     // console.log('formstate change')
    // }, [formState]);
    // useEffect(() => {

    //     // console.log('email change')
    // }, [email]);

    return (
        <>
            <h1>Formulario con custom hook</h1>
            <hr />


            <input type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input type="email"
                className="form-control mt-2"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange}

            />
            <input type="password"
                className="form-control mt-2"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onInputChange}

            />

            <button onClick={ onResetForm } className="btn btn-primary mt-2" >Borrar</button>

        </>
    )
}
