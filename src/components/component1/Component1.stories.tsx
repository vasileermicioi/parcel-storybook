import * as React from 'react'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Component 1 stories - action addon testing',
}

export const Story1 = () => (
  <div>
    <button onClick={action('component 1 story1 action')}>
      Test action addon
    </button>
  </div>
)

export const Story2 = () => (
  <div>
    <button onClick={action('component 1 story2 action')}>
      Test action addon
    </button>
  </div>
)
