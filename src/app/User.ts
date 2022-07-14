import { Address } from "./Address"

interface User {
  id: number
  name: string
  email: string
  cpf: string
  phone: string
  smartphone: string
  addresses: Address[]
}

export { User }
