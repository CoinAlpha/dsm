import React, { useState } from 'react'
import { Body } from '../../../../../hbui/elements/typography'
import { Separator } from '../../../../../hbui/elements/layout'
import { ShortHero, MainContent } from '../../../ui/elements/layout'
import CodeBlock from '../../../ui/components/CodeBlock'
import {
  Callout,
  CalloutSuccess,
  CalloutInfo,
  CalloutDanger,
  CalloutWarning,
  CalloutTip,
  CalloutBug,
  CalloutNote,
} from '../../../../../hbui/components/callout'

function TextInputPage() {
  const [inputValue, setInputValue] = useState('')
  return (
    <div>
      <ShortHero
        title="Callout"
        subTitle="The Callout component serves to convey highlighted information content of different types."
      />
      <MainContent>
        <br />
        <br />
        <Callout
          title="Default callout"
          text="Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences.."
        />
        <br />
        <CodeBlock code={codeDefault} />
        <br />
        <br />
        <br />
        <br />
        <CalloutSuccess
          title="Success callout"
          text="Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences.."
        />
        <br />
        <CodeBlock code={codeSuccess} />
        <br />
        <br />
        <br />
        <br />
        <CalloutInfo
          title="Info callout"
          text="Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences.."
        />
        <br />
        <CodeBlock code={codeInfo} />
        <br />
        <br />
        <br />
        <br />
        <CalloutWarning
          title="Warning callout"
          text="Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences.."
        />
        <br />
        <CodeBlock code={codeWarning} />
        <br />
        <br />
        <br />
        <br />
        <CalloutDanger
          title="Danger callout"
          text="Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences.."
        />
        <br />
        <CodeBlock code={codeDanger} />
        <br />
        <br />
        <br />
        <br />
        <CalloutTip
          title="Tip callout"
          text="Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences.."
        />
        <br />
        <CodeBlock code={codeTip} />
        <br />
        <br />
        <br />
        <br />
        <CalloutBug
          title="Bug callout"
          text="Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences.."
        />
        <br />
        <CodeBlock code={codeBug} />
        <br />
        <br />
        <br />
        <br />
        <CalloutNote
          title="Note callout"
          text="Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences.."
        />
        <br />
        <CodeBlock code={codeNote} />
        <br />
        <br />
      </MainContent>
    </div>
  )
}

export default TextInputPage

const codeDefault = String.raw`import { Callout } from '@hummingbot/hbui/components/callout'

<Callout
  title='Default callout'
  text='Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences..'
/>
`

const codeSuccess = String.raw`import { CalloutSuccess } from '@hummingbot/hbui/components/callout'

<CalloutSuccess
  title='Success callout'
  text='Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences..'
/>
`

const codeInfo = String.raw`import { CalloutInfo } from '@hummingbot/hbui/components/callout'

<CalloutInfo
  title='Info callout'
  text='Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences..'
/>
`

const codeWarning = String.raw`import { CalloutWarning } from '@hummingbot/hbui/components/callout'

<CalloutWarning
  title='Warning callout'
  text='Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences..'
/>
`

const codeDanger = String.raw`import { CalloutDanger } from '@hummingbot/hbui/components/callout'

<CalloutDanger
  title='Danger callout'
  text='Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences..'
/>
`

const codeTip = String.raw`import { CalloutTip } from '@hummingbot/hbui/components/callout'

<CalloutTip
  title='Tip callout'
  text='Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences..'
/>
`

const codeBug = String.raw`import { CalloutBug } from '@hummingbot/hbui/components/callout'

<CalloutBug
  title='Bug callout'
  text='Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences..'
/>
`

const codeNote = String.raw`import { CalloutNote } from '@hummingbot/hbui/components/callout'

<CalloutNote
  title='Note callout'
  text='Binance Perpetual connector is released as beta version(0.33), trade it with your own risk. Binance Perpetual is different from futures contract, please see differences..'
/>
`
