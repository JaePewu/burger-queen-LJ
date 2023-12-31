import { useState } from 'react';
import { useNavigate } from 'react-router';
import { loginAPI } from '../../Service/auth.js';

import LogoBQueen from '/3.png';
import BurgerQueen from '/Burger-Queen.png';
import SoloBurgerQ from '/logo-solo-hamburguesa.png';



function Form() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            email: email,
            password: password,
        };

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),

        };


        const token = await loginAPI(options, setError);
        const workersName = await loginAPI(options, setError); 
        
        if (token && workersName) {
            navigate("/pedidos");
        }
    };


    return (
        <>
            <section className='bg-white px-10 pb-20 rounded-3xl border-2 w-full mx-10 drop-shadow-md'>
                <div>
                    <img
                        src={LogoBQueen}
                        alt="Logo Burger Queen"
                        className='block lg:hidden h-2/4 mx-auto'
                    />

                    <img
                        src={BurgerQueen}
                        alt="Burger Queen"
                        className='hidden lg:block'
                    />

                </div>

                <form className='mt-10' onSubmit={handleSubmit}>
                    <div>
                        <label className='text-2xl font-large ml-5'>Ingrese usuario</label>
                        <input
                            className='focus:outline-none focus:border-rose-500 w-full border-2 text-lg border-[#F5A25D] rounded-full p-4 mt-1 h-20 font-judson drop-shadow-md'
                            placeholder='Nombre@XXX.XXX'
                            type='text'
                            // required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className='mt-7'>
                        <label className='text-2xl font-large ml-5'>Ingrese contraseña</label>
                        <input
                            className='focus:outline-none focus:border-rose-500 w-full border-2 text-lg border-[#F5A25D] rounded-full p-4 mt-1 h-20 font-judson drop-shadow-md'
                            placeholder='Contraseña'
                            type='password'
                            // required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className='mt-10 flex justify-center item-center'>
                        <button
                            className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out text-5xl bg-cyan-700 text-white w-full p-4 h-20 rounded-full font-lobster drop-shadow-md '
                            type='submit'

                        >Iniciar Sesión</button>
                    </div>
                    <div className='mt-5 text-center font-judson font-extrabold text-rose-500 text-xl'>
                        {error && <div>{error}</div>}
                    </div>
                </form>

                <div className='mx-auto w-3/6 items-center'>
                    <p className='text-lg mt-4 flex text-center items-center justify-center font-judson'>Si no estas registrado, avisar a administración</p>
                </div>
            </section>
        </>
    );
}

function Logo() {

    return (

        <>
            <div className='flex w-full h-screen'>
                <div className='w-full flex items-center justify-center lg:w-1/2'>
                    <Form></Form>
                </div>

                <div className='hidden lg:flex w-1/2 h-full items-center justify-center bg-white'>

                    <img
                        src={SoloBurgerQ}
                        alt="Logo Burger Queen"
                        className=' animate-bounce w-3/4 '
                    />

                </div>

            </div>

        </>
    )
}

export { Logo};