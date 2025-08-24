import { render, screen } from '@testing-library/react'
import Card from '@/components/Card'

const item = {
  id: '1',
  title: 'Um título',
  image: 'https://picsum.photos/seed/1/640/360.webp',
  alt: 'Poster'
}

describe('Card', () => {
  it('renders title and image alt', () => {
    render(<Card item={item} />)
    expect(screen.getByText('Um título')).toBeInTheDocument()
    expect(screen.getByAltText('Poster')).toBeInTheDocument()
  })
})
