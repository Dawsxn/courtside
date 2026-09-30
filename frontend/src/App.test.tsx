import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('coach search page', () => {
  it('labels the results as sample data', () => {
    render(<App />)

    expect(screen.getByText('Sample data')).toBeInTheDocument()
  })

  it('changes city from the page title', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('combobox', { name: /Change city/ }))
    await user.click(await screen.findByRole('option', { name: 'Quezon City' }))

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Coaches in Quezon City')
    expect(screen.getByRole('heading', { name: /lowest rate first/ })).toHaveTextContent('1 coach')
  })

  it('filters from the panel and offers to clear when nothing matches', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('combobox', { name: /Change city/ }))
    await user.click(await screen.findByRole('option', { name: 'Quezon City' }))
    await user.click(screen.getByRole('button', { name: 'Filters' }))
    const panel = screen.getByRole('dialog', { name: 'Filters' })
    await user.click(within(panel).getByRole('button', { name: 'Comes to my court' }))

    expect(within(panel).getByRole('button', { name: 'Show 0 coaches' })).toBeInTheDocument()
    expect(screen.getByText(/No coaches in Quezon City match/)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Clear filters' }))
    expect(screen.getByRole('button', { name: 'Filters' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /lowest rate first/ })).toHaveTextContent('1 coach')
  })
})
