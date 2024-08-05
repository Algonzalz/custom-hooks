import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'fonzo',
        email: 'desarrollowebtcs@gmail.com'
    });

    const { username, email } = formState;


    const onInputChange = ({ target }) => {
        const {name, value} = target;
        setFormState({
            ...formState, 
            [name]:value //PROPIEDADES COMPUTADAS
        })

    }


    useEffect(() => {
      
        console.log('use effect called')
    }, []);
    useEffect(() => {
      
        console.log('formstate change')
    }, [formState]);
    useEffect(() => {
      
        console.log('email change')
    }, [email]);
    
    return (
        <>
            <h1>Simple Form</h1>
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

            {
                (username === 'fonzo2') && <Message/>
            }
        </>
    )
}
