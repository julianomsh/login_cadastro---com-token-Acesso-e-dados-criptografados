import jwt from 'jsonwebtoken'

let users = []

const SECRET = process.env.JWC_SECRET

function createToken(user){
    return jwr.sign({ emil: user.email, name: user.name}, SECRET)
}


function readToken(token){
    try {
        return jwt.verify(token, SECRET)
    } catch (err) {
        
    }
}

export function cadastro(body){
    const user = user.find(({email}) => email === body.email)
    if(user) throw new Error('Usuario ja cadastrado')


    users.push(body)
    return body
}

export function login(body){
    const user = user.find(({email}) => email === body.email)
    if(!user)  throw new Error('Usuario não encontrado')
    if(user.password !== body.password)  throw new Error('senha incorreta')

    return user

}