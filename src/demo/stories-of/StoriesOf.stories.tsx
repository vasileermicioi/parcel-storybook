import * as React from 'react'
import { storiesOf } from '@storybook/react'

const title = 'storiesOf - old style stories'

export default {
  title,
}

storiesOf(title, module).add('Story1', () => (
  <div>storiesOf is not deprecated!</div>
))
