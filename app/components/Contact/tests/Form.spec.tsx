import "@testing-library/jest-dom"
import Form from "../Form"
import { render } from "@testing-library/react"

describe('Form component', () => { 
  it('should render correctly', () => {
    const {getByText, getByPlaceholderText} = render(<Form />)
    expect(getByText('Entrar em contato')).toBeInTheDocument()
    expect(getByPlaceholderText('Seu nome')).toBeInTheDocument()
    expect(getByPlaceholderText('Seu nome')).toBeInTheDocument()
    expect(getByPlaceholderText('Insira seu e-mail para contato')).toBeInTheDocument()
    expect(getByPlaceholderText('Deixe sua mensagem')).toBeInTheDocument()
  })
})