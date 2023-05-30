import {useState} from 'react'


import LoginCard from '../src/components/loginCard/loginCard'
import Input from '../src/components/input/input'
import Button from '../src/components/button/button'
import Link from 'next/link'

export default function CadastroPage(){

const[formData, setFormdata] = useState({
    name:'',
    email:'',
    password:'',
})

const handleFormEdit = (event, name) => {
    setFormdata({
        ...formData,
        [name]: event.target.value
        
    })
}

const handleForm = (event) => {
    event.preventDefault()
    console.log(formData)
}


    return (
        <div className='background'>
            <LoginCard title="Crie sua conta">
            <form  onSubmit={handleForm}  className='form' >
                <Input type="text" placeholder="Nome" required value={formData.name} onChange={(e) => {handleFormEdit(e, 'name')}}/>
                <Input type="email" placeholder="E-mail" required value={formData.email} onChange={(e) => {handleFormEdit(e, 'email')}}/>
                <Input type="password" placeholder="Senha" required value={formData.password} onChange={(e) => {handleFormEdit(e, 'password')}}/>
                <Button >Cadastrar</Button>
            </form>
            <Link href="/login"> Ja possui cadastro?</Link>
            </LoginCard >
        </div>
  
    )
}
