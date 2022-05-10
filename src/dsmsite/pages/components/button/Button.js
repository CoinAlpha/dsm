import React from 'react'
import { ShortHero, MainContent } from '../../../ui/elements/layout'
import CodeBlock from '../../../ui/components/CodeBlock'
import { Body } from '../../../../../hbui/elements/typography'
import { Button as ButtonComponent } from '../../../../../hbui/components/button'
import DummyIcon from '../../../../../hbui/assets/svgs/16x16/DummyIcon'
import PlayButton from '../../../../../hbui/assets/svgs/16x16/PlayButton'
import KebabControl from '../../../../../hbui/assets/svgs/16x16/KebabControl'

function Button() {
  return (
    <div>
      <ShortHero
        title="Button"
        subTitle="Component - To be used together with icons"
      />
      <MainContent>
        <Body>Button with dark-mode ready icon (before)</Body>
        <ButtonComponent
          isSecondary
          label="Button"
          iconBefore={<PlayButton />}
        />
        <br />
        <CodeBlock code={codeWithIconBefore} />
        <br />
        <br />
        <Body>Button with dark-mode ready icon (after)</Body>
        <ButtonComponent
          isSecondary
          label="Button"
          iconAfter={<PlayButton />}
        />
        <br />
        <CodeBlock code={codeWithIconAfter} />
        <br />
        <br />
        <Body>Button with dark-mode ready icon (before and after)</Body>
        <ButtonComponent
          isSecondary
          label="Button"
          iconBefore={<PlayButton />}
          iconAfter={<KebabControl />}
        />
        <br />
        <CodeBlock code={codeWithIconBeforeAndAfter} />
        <br />
        <br />
        <Body>Button with "danger" state and custom icon color</Body>
        <ButtonComponent
          isSuccess
          label="Button"
          iconBefore={<DummyIcon />}
          iconColor="white"
        />
        <br />
        <CodeBlock code={codeWithCustomIconColor} />
      </MainContent>
    </div>
  )
}

export default Button

const codeWithIconBefore = String.raw`import { Button } from '@hummingbot/hbui/components/button'
import { PlayButton } from '@hummingbot/hbui/svgs/16x16/PlayButton'

<ButtonComponent
  isSecondary
  label="Button"
  iconBefore={<PlayButton />}
/>
`

const codeWithIconAfter = String.raw`import { Button } from '@hummingbot/hbui/components/button'
import { PlayButton } from '@hummingbot/hbui/svgs/16x16/PlayButton'

<ButtonComponent
  isSecondary
  label="Button"
  iconAfter={<PlayButton />}
/>
`

const codeWithIconBeforeAndAfter = String.raw`import { Button } from '@hummingbot/hbui/components/button'
import { PlayButton } from '@hummingbot/hbui/svgs/16x16/PlayButton'
import { KebabControl } from '@hummingbot/hbui/svgs/16x16/KebabControl'

<ButtonComponent
  isSecondary
  label="Button"
  iconBefore={<PlayButton />}
  iconAfter={<KebabControl />}
/>
`

const codeWithCustomIconColor = String.raw`import { Button } from '@hummingbot/hbui/components/button'
import { DummyIcon } from '@hummingbot/hbui/svgs/16x16/DummyIcon'

<ButtonComponent
  isDanger
  label="Button"
  iconBefore={<DummyIcon />}
  iconColor="white"
/>
`
