import { useEffect } from "react"

export const Message = () => {


    useEffect(() => {

        const onMouseRoute = ({ x, y }) => {
            const coords = { x, y };
            console.log(coords)
        }
        window.addEventListener('mousemove', onMouseRoute) //;o enviamos por refenrencia porque no son los mismos espacios de memoria 
        return () => {
            window.removeEventListener('mousemove', onMouseRoute)
            // console.log('Message UnMounted')
        }
    }, [])

    return (
        <>
            <h3>Usuario ya Existe</h3>
        </>
    )
}
