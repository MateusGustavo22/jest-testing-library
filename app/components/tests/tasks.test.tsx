import { render, fireEvent, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import { setupServer } from 'msw/node'
import Tasks from "../tasks/tasks"
import { rest } from "msw"

const server = setupServer(
  rest.get('https://jsonplaceholder.typicode.com/users/1/todos', (req, res, ctx) => {
    return res(ctx.json([{
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    },]))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


describe('Tasks component', () => {
  it('should render correctly', () => {
    const { getByText, getByPlaceholderText } = render(<Tasks />)
    expect(getByText('Lista de tarefas')).toBeInTheDocument()
    expect(getByPlaceholderText('Nova tarefa')).toBeInTheDocument()
    expect(getByText('Adicionar')).toBeInTheDocument()
  })

  it('should render api tasks', async () => {
    const { getByText } = render(<Tasks />)

    await waitFor(() => {
      expect(getByText('delectus aut autem')).toBeInTheDocument()
      expect(getByText('quis ut nam facilis et officia qui')).toBeInTheDocument()
      expect(getByText('fugiat veniam minus')).toBeInTheDocument()
      expect(getByText('et porro tempora')).toBeInTheDocument()
      expect(getByText('laboriosam mollitia et enim quasi adipisci quia provident illum')).toBeInTheDocument()
    })

  })

  it('should add new task', () => {
    const { getByText, getByPlaceholderText, queryByText } = render(<Tasks />)
    const input = getByPlaceholderText('Nova tarefa')
    const button = getByText('Adicionar')

    expect(queryByText('Terceira tarefa'))

    fireEvent.change(input, { target: { value: 'Terceira tarefa' } })
    fireEvent.click(button)

    expect(getByText('Terceira tarefa')).toBeInTheDocument()
  }) 
})