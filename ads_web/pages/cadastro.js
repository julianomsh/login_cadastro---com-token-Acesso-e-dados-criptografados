import LoginCard from '../src/components/loginCard/loginCard'
import Input from '../src/components/input/input'
import Button from '../src/components/button/button'
import Link from 'next/link'

export default function CadastroPage(){
    return (
        <div className='background'>
            <LoginCard title="Crie sua conta">
            <form className='form'>
                <Input type="text" placeholder="Nome"/>
                <Input type="email" placeholder="E-mail"/>
                <Input type="password" placeholder="Senha"/>
                <Button>Cadastrar</Button>
            </form>
            <Link href="/login"> Ja possui cadastro?</Link>
            </LoginCard >
        </div>
  
    )
}