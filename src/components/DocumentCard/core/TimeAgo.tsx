import React from 'react'
import {useRelativeTime} from 'sanity'

export interface TimeAgoProps {
  time: string | Date
}

export function TimeAgo({time}: TimeAgoProps): React.JSX.Element {
  const timeAgo = useRelativeTime(time)

  return <span title={timeAgo}>{timeAgo} ago</span>
}
