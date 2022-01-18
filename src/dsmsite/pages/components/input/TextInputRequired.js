import React, { useState } from 'react'
import { P } from '../../../../hb_ui/elements/typography'
import { Separator } from '../../../../hb_ui/elements/layout'
import { ShortHero, MainContent } from '../../../ui/elements/layout'
import TextInput from '../../../../hb_ui/components/input/TextInput'
import CodeBlock from '../../../ui/components/CodeBlock'
import { hero, navigation } from './shared'

function TextInputRequired() {
  const [inputValue, setInputValue] = useState('');
  return (
    <div>
      { hero }
      <MainContent>
        { navigation }
        <br />
        <Separator />
        <br />
        <br />
        <P>Required</P>
        <br />
        <TextInput
          required
          placeholder='Placeholder Text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <br />
        <CodeBlock code={codeRequired} />
        <br />
        <br />
      </MainContent>
    </div>
  )
}

export default TextInputRequired

const codeRequired = String.raw
`import TextInput from '../hb_ui/components/input/TextInput'

<TextInput
  required
  placeholder='Placeholder Text'
  value={inputValue}
  onChange={yourChangeHandler}
/>
`;
