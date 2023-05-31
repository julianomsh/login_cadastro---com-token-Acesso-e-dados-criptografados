import { getCookie } from 'cookies-next'
import { verificaToken } from '../services/user'


export default function Home() {


  return (
    <div>
    PAGINA SEGURA
   </div>
  )
}


export const getServerSideProps = async({req, res}) => {
try {
  const token = getCookie('authorization', {req, res})
  if(!token) throw new Error('Token inválido')

  verificaToken(token)
  return{
    props: {}
  }
} catch (err) {
  return{
    redirect: {
      permanent: false,
      destination: '/login'
    },
    props: {}
  }
}
}