import {Card, Flex, Spinner} from '@sanity/ui'
import React from 'react'
import {Preview, SanityDocument, StringInputProps, useSchema} from 'sanity'
import {Feedback, useListeningQuery} from 'sanity-plugin-utils'

import EditButton from './EditButton'

// eslint-disable-next-line no-warning-comments
// TODO: Update this to use the same component as the Tool
export default function Field(props: StringInputProps): React.JSX.Element {
  const schema = useSchema()
  const {data, loading, error} = useListeningQuery<SanityDocument>(
    `*[_id in [$id, $draftId]]|order(_updatedAt)[0]`,
    {
      params: {
        id: String(props.value),
        draftId: `drafts.${String(props.value)}`,
      },
    }
  )

  if (loading) {
    return <Spinner />
  }

  const schemaType = schema.get(data?._type ?? ``)

  if (error || !data?._type || !schemaType) {
    return <Feedback tone="critical" title="Error with query" />
  }

  return (
    <Card border padding={2}>
      <Flex align="center" justify="space-between" gap={2}>
        <Preview layout="default" value={data} schemaType={schemaType} />
        <EditButton id={data._id} type={data._type} />
      </Flex>
    </Card>
  )
}
