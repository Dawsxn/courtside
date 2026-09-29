import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the placeholder home page', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: 'Courtside' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Find a coach' })).toBeInTheDocument()
  })
})
