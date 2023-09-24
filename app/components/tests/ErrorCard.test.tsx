import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import ErrorCard from "../Contact/ErrorCard"

describe('ErrorCard component', () => {
  it('should render correctly', () => {
    const {getByText} = render(<ErrorCard submitStatus="ERROR" />)
    expect(getByText('O ENVIO FALHOU!')).toBeInTheDocument()
    expect(getByText('Ocorreu algum erro ao enviar a mensagem. Por favor, tente novamente.')).toBeInTheDocument()
  })
}) 