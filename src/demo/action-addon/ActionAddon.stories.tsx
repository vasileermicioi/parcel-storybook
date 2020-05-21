import * as React from 'react'
import { action } from '@storybook/addon-actions'

export default {
  title: 'action addon',
}

export const Story1 = () => (
  <div>
    <button onClick={action('log me 1')}>log me 1</button>
  </div>
)

export const Story2 = () => (
  <div>
    <button onClick={action('log me 2')}>log me 2</button>
  </div>
)
