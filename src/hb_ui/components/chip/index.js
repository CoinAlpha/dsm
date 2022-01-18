import React from 'react'
import { NavLink } from 'react-router-dom'
import tw, { css, styled } from 'twin.macro'

export const Chip = ({ to, label, isUppercase, isDisabled, ...props }) => {
  return (
    <ChipRoot
      isUppercase={isUppercase}
      isDisabled={isDisabled}
    >
      <ChipElement
        to={to}
        {...props}
      >
        {label}
      </ChipElement>
    </ChipRoot>
  )
}

export const ChipRoot = styled.span(({isUppercase, isDisabled}) => [
  tw`flex`,
  // isUppercase && [
  //   css`
  //     text-transform: uppercase;
  //   `,
  // ],
  // isDisabled && [
  //   tw`pointer-events-none opacity-30`,
  // ],
])

export const ChipElement = styled(NavLink)(({}) => [
  tw`flex`,
  tw`transition duration-100`,
  tw`px-4 py-1 lg:px-8 lg:py-1.5 rounded-sm focus:outline-none`,
  tw`hover:bg-quaternary active:bg-grey-dark-100`,
  tw`font-medium`,
  tw`text-tertiary bg-tertiary`,
  tw`text-base`,
  css`
    min-width: 100px;
    text-align: center;
    align-items: center;
    justify-content: center;
    user-select: none;
    cursor: pointer;
  `,
])