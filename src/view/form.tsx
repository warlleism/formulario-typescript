import { useState } from 'react'
import './style.scss'
import { Button, Input } from './../styled/style';
import image from '../img/imagem.png'

type FormData = {
    nome: string;
    sobrenome: string;
    email: string;
    celular: number | string;
    senha: string;
    confirmarSenha: string;
    genero: string;
};

const initialFormData: FormData = {
    nome: "",
    sobrenome: "",
    email: "",
    celular: '',
    senha: '',
    confirmarSenha: '',
    genero: ''
};

const Form = () => {

    const [formData, setFormData] = useState<FormData>(initialFormData);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

        const { name, value } = event.target;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    return (

        <div className='main-content'>

            <div className='container-image'>
            </div>

            <form className='container-form'>

                <div className='container-title'>Cadastre-se</div>

                <div className='container-input'>
                    <div>
                        <label htmlFor="nome">Primeiro nome</label>
                        <Input
                            type="text"
                            id="nome"
                            name="nome"
                            value={formData.nome}
                            onChange={handleInputChange} />
                    </div>

                    <div>
                        <label htmlFor="sobrenome">Sobrenome</label>
                        <Input
                            type="text"
                            id="sobrenome"
                            name="sobrenome"
                            value={formData.sobrenome}
                            onChange={handleInputChange} />
                    </div>
                </div>

                <div className='container-input'>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Input
                            type="text"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="celular">Celular</label>
                        <Input
                            type="text"
                            id="celular"
                            name="celular"
                            value={formData.celular}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className='container-input'>
                    <div>
                        <label htmlFor="senha">Senha</label>
                        <Input
                            type="text"
                            id="senha"
                            name="senha"
                            value={formData.senha}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="confirmarSenha">Confirmar Senha</label>
                        <Input
                            type="text"
                            id="confirmarSenha"
                            name="confirmarSenha"
                            value={formData.confirmarSenha}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <Button>Enviar</Button>
            </form>

        </div>
    )
}

export default Form;


