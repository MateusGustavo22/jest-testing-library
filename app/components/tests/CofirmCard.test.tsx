import { render } from "@testing-library/react"
import ConfirmCard from "../Contact/ConfirmCard"
import "@testing-library/jest-dom"

const ConfirmCardProps = {
  submitStatus: 'OK'
}

describe('ConfirmCard component', () => {
  it('should render correctly', () => {
    const {getByText} = render(<ConfirmCard {...ConfirmCardProps} />)

    expect(getByText('SUCESSO!')).toBeInTheDocument()
    expect(getByText('Muito obrigado por entrar em contato!')).toBeInTheDocument()
  })
}) 