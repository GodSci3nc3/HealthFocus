'use client';
import {Header} from '../page';
import Link from 'next/link';

export default function Login () {
    return (
        <div>
            <Header/>

            
                <h1>Inicio de sesión</h1>
                <LoginForm/>

                <Link href = "/">
                <button className = "bg-blue-500 text-white px-4 py-2 rounded-md"> 
                    Volver al inicio</button>
                </Link>

                <br></br>

                <Link href = "/register">
                <button className = "bg-blue-500 text-white px-4 py-2 rounded-md"> 
                    Ir al registro</button>
                </Link>

            

        </div>
    );
}

export function LoginForm() {
    return (
        <form className = "">


            <label >Correo electrónico</label>
            <input type = "email" id = "email" name = "email" required/>

            <label >Contraseña</label>
            <input type = "password" id = "password" name = "password" required/>
            

            <button type = "submit">Iniciar sesión</button>
        </form>
    )
}
