import '@testing-library/jest-dom'
import React from 'react'

// Simple mocks for Next.js components in Jest
jest.mock('next/link', () => {
	return ({ children, href }: any) => React.createElement('a', { href }, children)
})
jest.mock('next/image', () => ({
	__esModule: true,
	default: (props: any) => React.createElement('img', props),
}))

