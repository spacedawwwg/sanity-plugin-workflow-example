import {Box, Text, Tooltip} from '@sanity/ui'
import React from 'react'

type StatusProps = {
  text: string
  icon: React.ComponentType
}

export function Status(props: StatusProps): React.JSX.Element {
  const {text, icon} = props
  const Icon = icon

  return (
    <Tooltip
      portal
      content={
        <Box padding={2}>
          <Text size={1}>{text}</Text>
        </Box>
      }
    >
      <Text size={1}>
        <Icon />
      </Text>
    </Tooltip>
  )
}
