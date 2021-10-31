import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Yooo from './'

describe('Yooo', () => {
  it('renders and expect nothing', () => {
    render(<Yooo />)
    expect(true).toBe(true)
  })
})