'use client';
import {Header} from '../page';
import Link from 'next/link';

export default function Register () {
    return (
        <div>
            <Header/>

            
                <h1>Registro</h1>
                <RegisterForm/>

                <Link href = "/">
                <button className = "bg-blue-500 text-white px-4 py-2 rounded-md"> 
                    Volver al inicio</button>
                </Link>

                <br></br>

                <Link href = "/login">
                <button className = "bg-blue-500 text-white px-4 py-2 rounded-md"> 
                    Ir al inicio de sesión</button>
                </Link>

            

        </div>
    );
}

export function RegisterForm() {
    return (
        <form className = "">

            <label >Nombre</label>
            <input type = "text" id = "name" name = "name" required/>
            
            <label >Correo electrónico</label>
            <input type = "email" id = "email" name = "email" required/>

            <label >Contraseña</label>
            <input type = "password" id = "password" name = "password" required/>
            
            <label >Foto de Perfil</label>
            <input type = "file" id = "photo" name = "photo" required/>

            <button type = "submit">Registrarse</button>

            </form>
    );
}