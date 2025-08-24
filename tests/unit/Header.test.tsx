import { render, screen, fireEvent } from '@testing-library/react'
import Header from '@/components/Header'

describe('Header', () => {
  it('toggles mobile menu', () => {
    render(<Header />)
    const openBtn = screen.getByLabelText(/abrir menu/i)
    fireEvent.click(openBtn)
    // After open, there should be an element with aria-hidden=false
    const panel = document.querySelector('[aria-hidden="false"]')
    expect(panel).toBeTruthy()
  })
})
