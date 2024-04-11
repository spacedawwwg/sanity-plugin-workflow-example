import {ErrorOutlineIcon, WarningOutlineIcon} from '@sanity/icons'
import {ValidationMarker} from '@sanity/types'
import {Box, Text, Tooltip} from '@sanity/ui'
import React from 'react'
import {TextWithTone} from 'sanity'

type ValidationStatusProps = {
  validation: ValidationMarker[]
}

export function ValidationStatus(
  props: ValidationStatusProps
): React.JSX.Element | null {
  const {validation = []} = props

  if (!validation.length) {
    return null
  }

  const hasError = validation.some((item) => item.level === 'error')

  return (
    <Tooltip
      portal
      content={
        <Box padding={2}>
          <Text size={1}>
            {validation.length === 1
              ? `1 validation issue`
              : `${validation.length} validation issues`}
          </Text>
        </Box>
      }
    >
      <TextWithTone tone={hasError ? `critical` : `caution`} size={1}>
        {hasError ? <ErrorOutlineIcon /> : <WarningOutlineIcon />}
      </TextWithTone>
    </Tooltip>
  )
}
