import {Card, Text} from '@nextui-org/react';
import React from 'react';
import {Community} from '../icons/community';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const CardBalance1 = () => {
   return (
      <Card
         css={{
            mw: '375px',
            bg: '$blue600',
            borderRadius: '$xl',
            px: '$6',
         }}
      >
         <Card.Body css={{py: '$10'}}>
            <Flex css={{gap: '$5'}}>
               <Community />
               <Flex direction={'column'}>
                  <Text span css={{color: 'white'}}>
                     Hizmet
                  </Text>
                  <Text span css={{color: 'white'}} size={'$xs'}>
                     Kalan 137 gün için:
                  </Text>
               </Flex>
            </Flex>
            <Flex css={{gap: '$6', py: '$4'}} align={'center'}>
               <Text
                  span
                  size={'$xl'}
                  css={{color: 'white'}}
                  weight={'semibold'}
               >
                  ₺1.745.410
               </Text>
               <Text span css={{color: '$green600'}} size={'$xs'}>
                  + 1.5%
               </Text>
            </Flex>
            
         </Card.Body>
      </Card>
   );
};
