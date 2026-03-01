import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the main title', () => {
    render(<App />)
    expect(screen.getByText('📝 My Todo App')).toBeInTheDocument()
  })

  it('displays empty message when no todos', () => {
    render(<App />)
    expect(screen.getByText('Todoはまだありません')).toBeInTheDocument()
  })

  it('adds a new todo', () => {
    render(<App />)
    const input = screen.getByPlaceholderText('新しいTodoを入力...')
    const addButton = screen.getByText('追加')

    fireEvent.change(input, { target: { value: 'Test Todo' } })
    fireEvent.click(addButton)

    expect(screen.getByText('Test Todo')).toBeInTheDocument()
  })

  it('adds todo on Enter key press', () => {
    render(<App />)
    const input = screen.getByPlaceholderText('新しいTodoを入力...')

    fireEvent.change(input, { target: { value: 'Test Todo' } })
    fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 })

    expect(screen.getByText('Test Todo')).toBeInTheDocument()
  })

  it('clears input after adding todo', () => {
    render(<App />)
    const input = screen.getByPlaceholderText('新しいTodoを入力...')
    const addButton = screen.getByText('追加')

    fireEvent.change(input, { target: { value: 'Test Todo' } })
    fireEvent.click(addButton)

    expect(input.value).toBe('')
  })

  it('does not add empty todo', () => {
    render(<App />)
    const addButton = screen.getByText('追加')

    fireEvent.click(addButton)

    expect(screen.getByText('Todoはまだありません')).toBeInTheDocument()
  })

  it('marks todo as completed', () => {
    render(<App />)
    const input = screen.getByPlaceholderText('新しいTodoを入力...')
    const addButton = screen.getByText('追加')

    fireEvent.change(input, { target: { value: 'Test Todo' } })
    fireEvent.click(addButton)

    const checkbox = screen.getByRole('checkbox')
    fireEvent.click(checkbox)

    expect(checkbox.checked).toBe(true)
  })

  it('deletes a todo', () => {
    render(<App />)
    const input = screen.getByPlaceholderText('新しいTodoを入力...')
    const addButton = screen.getByText('追加')

    fireEvent.change(input, { target: { value: 'Test Todo' } })
    fireEvent.click(addButton)

    const deleteButtons = screen.getAllByText('削除')
    fireEvent.click(deleteButtons[0])

    expect(screen.getByText('Todoはまだありません')).toBeInTheDocument()
  })

  it('displays correct stats', () => {
    render(<App />)
    const input = screen.getByPlaceholderText('新しいTodoを入力...')
    const addButton = screen.getByText('追加')

    fireEvent.change(input, { target: { value: 'Todo 1' } })
    fireEvent.click(addButton)

    fireEvent.change(input, { target: { value: 'Todo 2' } })
    fireEvent.click(addButton)

    expect(screen.getByText('全体: 2 | 完了: 0')).toBeInTheDocument()

    const checkboxes = screen.getAllByRole('checkbox')
    fireEvent.click(checkboxes[0])

    expect(screen.getByText('全体: 2 | 完了: 1')).toBeInTheDocument()
  })
})
