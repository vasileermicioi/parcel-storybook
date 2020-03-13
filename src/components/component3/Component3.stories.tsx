import React from 'react'
import { storiesOf } from '@storybook/react'

const title = 'Component 3 stories - using old storiesOf'

export default {
  title,
}

storiesOf(title, module).add('Story1', () => (
  <div>storiesOf is not deprecated!</div>
))
