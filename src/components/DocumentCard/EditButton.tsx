import {EditIcon} from '@sanity/icons'
import {Button} from '@sanity/ui'
import React from 'react'
import {useRouter} from 'sanity/router'

type EditButtonProps = {
  id: string
  type: string
  disabled?: boolean
}

export default function EditButton(props: EditButtonProps): React.JSX.Element {
  const {id, type, disabled = false} = props
  const {navigateIntent} = useRouter()

  return (
    <Button
      // eslint-disable-next-line react/jsx-no-bind
      onClick={() => navigateIntent('edit', {id, type})}
      mode="ghost"
      fontSize={1}
      padding={2}
      tabIndex={-1}
      icon={EditIcon}
      text="Edit"
      disabled={disabled}
    />
  )
}
