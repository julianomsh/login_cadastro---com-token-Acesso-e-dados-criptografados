import LoginCard from '../src/components/loginCard/loginCard';
import Input from '../src/components/input/input'
import Button from '../src/components/button/button'
import Link from 'next/link'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function LoginPage(){

  const[formData, setFormdata] = useState({
    email:'',
    password:'',
})

const [error, setError] = useState('');
const router = useRouter();

const handleFormEdit = (event, name) => {
  setFormdata({
      ...formData,
      [name]: event.target.value
      
  })
}

const handleForm = async (event) => {
    
  try {
      event.preventDefault()
      const response = await fetch(`/api/user/login`,{
        method:'POST',
       body: JSON.stringify(formData)
      })
      const json = await response.json()
      if(response.status !== 200) throw new Error (json)
  
      setCookie('authorization', json)
      router.push('/')
  
  } catch (err) {
      setError(err.message)
      
    }
  }

    return (
      <div className='background'>
      <LoginCard title="Entre em sua conta">
        <form onSubmit={handleForm}  className='form'>
        <Input type="email" placeholder="E-mail" value={formData.email} onChange={(e) => {handleFormEdit(e, 'email')}} required/>
        <Input type="password" placeholder="Senha" value={formData.email} onChange={(e) => {handleFormEdit(e, 'password')}} required/>
        <Button type='submit'>Entrar</Button>

        {error && <p className='error'>{error}</p>}
        
        </form>
        <Link href="/cadastro"> Ainda não possui cadastro?</Link>

      </LoginCard >
  </div>
  
    )
}