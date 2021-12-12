import './style.css';
import { useState } from 'react';

function Login() {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <div className="login-container">
            <div className="login-form">
                <h1>Faça seu Login</h1>
                <div className="login-input-email">
                    <label htmlFor="email">E-mail</label>
                    <input type="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="login-input-senha">
                    <label htmlFor="pass">Senha</label>
                    <input type="password" 
                    onChange={(e)=> setPass(e.target.value)}/>
                </div>
                <button>Entrar</button>
                <span>Nao tem conta? <a href="#">Cadastre-se</a></span>

            </div>
        </div>
    )
}

export default Login;