import "@testing-library/jest-dom"
import Form from "../Contact/Form"
import { render, fireEvent, waitFor } from "@testing-library/react"

describe('Form component', () => {
  it('should render correctly', () => {
    const { getByText, getByPlaceholderText } = render(<Form />)
    expect(getByText('Entrar em contato')).toBeInTheDocument()
    expect(getByPlaceholderText('Seu nome')).toBeInTheDocument()
    expect(getByPlaceholderText('Insira seu e-mail para contato')).toBeInTheDocument()
    expect(getByPlaceholderText('Deixe sua mensagem')).toBeInTheDocument()
  })

  it('should show an error message for empty inputs', async () => {
    const { queryByText, getByText, debug } = render(<Form />)
    expect(queryByText('Insira seu nome')).toBeNull()
    expect(queryByText('Insira seu e-mail')).toBeNull()
    expect(queryByText('Preencha o campo de mensagem')).toBeNull()

    const submitButton = getByText('ENVIAR MENSAGEM')

    await waitFor(() => {
      fireEvent.click(submitButton)
      expect(getByText('Insira seu nome')).toBeInTheDocument()
      expect(getByText('Insira seu e-mail')).toBeInTheDocument()
      expect(getByText('Preencha o campo de mensagem')).toBeInTheDocument()
    });

  })

  it('should submit mensage', async () => {
    const { getByText, getByPlaceholderText } = render(<Form />)
    const inputName = getByPlaceholderText('Seu nome')
    const inputEmail = getByPlaceholderText('Insira seu e-mail para contato')
    const inputMensage = getByPlaceholderText('Deixe sua mensagem')

    const submitButton = getByText('ENVIAR MENSAGEM')

    fireEvent.change(inputName, { target: { value: 'Mateus' } })
    fireEvent.change(inputEmail, { target: { value: 'mateusmdso' } })
    fireEvent.change(inputMensage, { target: { value: 'Qualquer coisa' } })

    await waitFor(() => {
      fireEvent.click(submitButton)
    })

    expect(getByText('SUCESSO!'))

  })
})