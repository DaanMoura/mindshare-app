import { useState } from 'react'
import logo from '@/assets/logo.svg'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {}

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <img src={logo} alt="Mindshare Logo" className="w-64 h-22" />
      <Card className="w-full max-w-md rounded-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Crie sua conta</CardTitle>
          <CardDescription>Informe seu nome, e-mail e senha de acesso</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                type="text"
                placeholder="Digite seu nome"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="exemplo@mail.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Entrar
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card className="w-full max-w-md rounded-xl">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Já tem uma conta?</CardTitle>
          <CardDescription>Entre agora mesmo</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="outline" className="w-full" asChild>
            <Link to="/login">Acessar contar</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default Signup
