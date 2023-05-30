import LoginCard from '../src/components/loginCard/loginCard';
import Input from '../src/components/input/input'
import Button from '../src/components/button/button'
import Link from 'next/link'

export default function LoginPage(){
    return (
      <div className='background'>
      <LoginCard title="Entre em sua conta">
        <form className='form'>
        <Input type="email" placeholder="E-mail"/>
        <Input type="password" placeholder="Senha"/>
        <Button>Entrar</Button>
        </form>
        <Link href="/cadastro"> Ainda não possui cadastro?</Link>

      </LoginCard >
  </div>
  
    )
}