import {Flex, Heading, ListItem, Text, UnorderedList} from '@chakra-ui/react'
import React from 'react'

export default function PerformanceDetail() {
  return (
    <Flex flexDirection={'column'} alignItems="center">
      <Heading variant={'headModelsub'}>Performance Upgrade</Heading>
      <Text>Included</Text>

      <UnorderedList>
        <ListItem>
          <Text variant={'nolinkText'}>
            Top Speed : Up to 250 km/h
          </Text>
        </ListItem>
        <ListItem>
          <Text variant={'nolinkText'}>Überturbine Rims 21"</Text>
        </ListItem>
        <ListItem>
          <Text variant={'nolinkText'}>Performance Brakes</Text>
        </ListItem>
        <ListItem>
          <Text variant={'nolinkText'}>Lowered Suspensions</Text>
        </ListItem>
        <ListItem>
          <Text variant={'nolinkText'}>Aluminum Alloy Pedals</Text>
        </ListItem>
        <ListItem>
          <Text variant={'nolinkText'}>Carbon Fiber Spoiler</Text>
        </ListItem>
      </UnorderedList>
    </Flex>
  )
}
