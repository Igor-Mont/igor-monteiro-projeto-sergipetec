import { Address } from "./Address"

interface User {
  id: number
  nome: string
  email: string
  cpf: string
  telefone: string
  celular: string
  enderecos: Address[]
}

export { User }
