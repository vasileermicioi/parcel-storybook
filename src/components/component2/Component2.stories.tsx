import React from 'react'
import { text } from '@storybook/addon-knobs'

export default {
  title: 'Component 2 stories - knobs addon testing',
}

export const Story1 = () => (
  <div>
    <h1>{text('h1 text', 'big header')}</h1>
    <h6>{text('h6 text', 'small header')}</h6>
  </div>
)
