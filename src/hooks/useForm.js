import { useState } from "react";


export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm);

    // const { username, email, password } = formState; //desestructurando el password


    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value //PROPIEDADES COMPUTADAS
        })

    }
    const onResetForm = () => {
        setFormState(initialForm)

    }
    return {
        ...formState, //desestructurar el formstate, lo que venga
        formState,
        onInputChange,
        onResetForm
    }
}
