import React from 'react'
import tw, { styled } from 'twin.macro'
import {
  phone,
  phone_max,
  phablet,
  phablet_max,
  tablet,
  tablet_min,
  tablet_max,
  desktop,
  desktop_min,
  desktop_max,
  hd,
  hd_min
} from '../../constants/media-queries'

export const Section = styled.div((props) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: props.backgroundColor ? props.backgroundColor : ''
}))

export const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '90%',
  padding: '0',
  WebkitTransition: 'width 0.3s ease-out',
  MozTransition: 'width 0.3s ease-out',
  Otransition: 'width 0.3s ease-out',
  transition: 'width 0.3s ease-out'
})

export const ContainerShort = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  width: '80%',
  maxWidth: '1000px',
  padding: '0'
})

export const Content = styled.div(
  {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  (props) => [tw`p-8`]
)

export const ContentCentered = styled(Content)({
  alignItems: 'center'
})

export const ContentSmall = styled(Content)({
  padding: '20px',
  [desktop_max]: {
    padding: '16px'
  },
  [tablet_max]: {
    padding: '12px'
  },
  [phablet_max]: {
    padding: '10px'
  },
  [phone_max]: {
    padding: '8px'
  }
})

export const WhiteBox = styled.div({
  background: 'white',
  boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)'
})

export const WhiteBoxRound = styled(WhiteBox)({
  borderRadius: '7px',
  [desktop_max]: { borderRadius: '6px' },
  [tablet_max]: { borderRadius: '5px' },
  [phablet_max]: { borderRadius: '4px' },
  [phone_max]: { borderRadius: '3px' }
})

export const FlexDiv = styled.div({
  display: 'flex'
})

export const HorizontalGroup = styled.div({
  display: 'grid',
  justifyItems: 'center',
  gridGap: '10px',
  gridAutoFlow: 'column',
  alignItems: 'center',
  width: 'auto',
  margin: '0 auto'
})

export const DivHdMin = styled.div({ [desktop_max]: { display: 'none' } })
export const DivDesktopMin = styled.div({ [tablet_max]: { display: 'none' } })
export const DivTabletMin = styled.div({ [phablet_max]: { display: 'none' } })
export const DivPhabletMin = styled.div({ [phone_max]: { display: 'none' } })

export const DivDesktopMax = styled.div({ [hd_min]: { display: 'none' } })
export const DivPhabletMax = styled.div({ [tablet_min]: { display: 'none' } })
export const DivTabletMax = styled.div({ [desktop_min]: { display: 'none' } })

export const DivHdOnly = styled.div({
  [hd]: { display: 'block' },
  [desktop]: { display: 'none' },
  [tablet]: { display: 'none' },
  [phablet]: { display: 'none' },
  [phone]: { display: 'none' }
})
export const DivDesktopOnly = styled.div({
  [hd]: { display: 'none' },
  [desktop]: { display: 'block' },
  [tablet]: { display: 'none' },
  [phablet]: { display: 'none' },
  [phone]: { display: 'none' }
})
export const DivTabletOnly = styled.div({
  [hd]: { display: 'none' },
  [desktop]: { display: 'none' },
  [tablet]: { display: 'block' },
  [phablet]: { display: 'none' },
  [phone]: { display: 'none' }
})
export const DivPhabletOnly = styled.div({
  [hd]: { display: 'none' },
  [desktop]: { display: 'none' },
  [tablet]: { display: 'none' },
  [phablet]: { display: 'block' },
  [phone]: { display: 'none' }
})
export const DivPhoneOnly = styled.div({
  [hd]: { display: 'none' },
  [desktop]: { display: 'none' },
  [tablet]: { display: 'none' },
  [phablet]: { display: 'none' },
  [phone]: { display: 'block' }
})

export const Spacer = styled.div({
  height: '50px',
  [tablet_max]: { height: '40px' },
  [phablet_max]: { height: '30px' },
  [phone_max]: { height: '20px' }
})

export const SpacerSmall = styled.div({
  height: '25px',
  [tablet_max]: { height: '20px' },
  [phablet_max]: { height: '15px' },
  [phone_max]: { height: '10px' }
})

export const SpacerLarge = styled.div({
  height: '90px',
  [desktop_max]: { height: '80px' },
  [tablet_max]: { height: '70px' },
  [phablet_max]: { height: '65px' },
  [phone_max]: { height: '60px' }
})

export const MobileSpaceMaker = styled.div({
  width: '100%',
  height: '0',
  [tablet_max]: {
    height: '80px'
  }
})

export const Separator = (props) => {
  let style = { marginTop: '50px', marginBottom: '30px', width: '100%' }
  if (props.short) {
    style = { marginTop: '10px', marginBottom: '30px', width: '100%' }
  }
  if (props.noMargin) {
    style = { marginTop: '0', marginBottom: '0', width: '100%' }
  }
  return <hr style={style} />
}

export const SeparatorLine = styled.div({
  backgroundColor: '#F2F2F2',
  width: '100%',
  height: '2px',
  marginTop: '40px',
  marginBottom: '40px',
  [tablet_max]: {
    marginTop: '30px',
    marginBottom: '30px'
  },
  [phablet_max]: {
    marginTop: '20px',
    marginBottom: '20px'
  },
  [phone_max]: {
    marginTop: '14px',
    marginBottom: '14px'
  }
})
