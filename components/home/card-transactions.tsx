import {Avatar, Card, Text} from '@nextui-org/react';
import React from 'react';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const CardTransactions = () => {
   return (
      <Card
         css={{
            mw: '375px',
            height: 'auto',
            bg: '$accents0',
            borderRadius: '$xl',
            // alignContent: 'start',
            justifyContent: 'start',
            px: '$6',
         }}
      >
         <Card.Body css={{py: '$10'}}>
            <Flex css={{gap: '$5'}} justify={'center'}>
               <Text h3 css={{textAlign: 'center'}}>
                  Yakın Zamandaki İşlemler
               </Text>
            </Flex>
            <Flex
               css={{gap: '$6', py: '$4'}}
               // align={'center'}

               direction={'column'}
            >
               <Flex css={{gap: '$6'}} align={'center'} justify="between">
                  <Avatar
                     size="lg"
                     pointer
                     src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                     bordered
                     color="gradient"
                     stacked
                  />
                  <Text span size={'$base'} weight={'semibold'}>
                     Mehmet Ali Ateş
                  </Text>
                  <Text span css={{color: '$green600'}} size={'$xs'}>
                  ₺4500
                  </Text>
                  <Text span css={{color: '$accents8'}} size={'$xs'}>
                     9/20/2024
                  </Text>
               </Flex>

               <Flex css={{gap: '$6'}} align={'center'} justify="between">
                  <Avatar
                     size="lg"
                     pointer
                     src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                     bordered
                     color="gradient"
                     stacked
                  />
                  <Text span size={'$base'} weight={'semibold'}>
                  Mahmut Polat
                  </Text>
                  <Text span css={{color: '$green600'}} size={'$xs'}>
                  ₺4500
                  </Text>
                  <Text span css={{color: '$accents8'}} size={'$xs'}>
                     9/20/2024
                  </Text>
               </Flex>
               <Flex css={{gap: '$6'}} align={'center'} justify="between">
                  <Avatar
                     size="lg"
                     pointer
                     src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                     bordered
                     color="gradient"
                     stacked
                  />
                  <Text span size={'$base'} weight={'semibold'}>
                  Fatih Özcan
                  </Text>
                  <Text span css={{color: '$green600'}} size={'$xs'}>
                  ₺1500
                  </Text>
                  <Text span css={{color: '$accents8'}} size={'$xs'}>
                     2/20/2024
                  </Text>
               </Flex>
               <Flex css={{gap: '$6'}} align={'center'} justify="between">
                  <Avatar
                     size="lg"
                     pointer
                     src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                     bordered
                     color="gradient"
                     stacked
                  />
                  <Text span size={'$base'} weight={'semibold'}>
                  Bekir Şimşek
                  </Text>
                  <Text span css={{color: '$green600'}} size={'$xs'}>
                  ₺200
                  </Text>
                  <Text span css={{color: '$accents8'}} size={'$xs'}>
                     3/20/2024
                  </Text>
               </Flex>
               <Flex css={{gap: '$6'}} align={'center'} justify="between">
                  <Avatar
                     size="lg"
                     pointer
                     src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                     bordered
                     color="gradient"
                     stacked
                  />
                  <Text span size={'$base'} weight={'semibold'}>
                  Halil Yavuz
                  </Text>
                  <Text span css={{color: '$green600'}} size={'$xs'}>
                  ₺2444
                  </Text>
                  <Text span css={{color: '$accents8'}} size={'$xs'}>
                     5/20/2024
                  </Text>
               </Flex>
               <Flex css={{gap: '$6'}} align={'center'} justify="between">
                  <Avatar
                     size="lg"
                     pointer
                     src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                     bordered
                     color="gradient"
                     stacked
                  />
                  <Text span size={'$base'} weight={'semibold'}>
                  Halil Yavuz
                  </Text>
                  <Text span css={{color: '$green600'}} size={'$xs'}>
                  ₺3000
                  </Text>
                  <Text span css={{color: '$accents8'}} size={'$xs'}>
                     12/20/2024
                  </Text>
               </Flex>
            </Flex>
         </Card.Body>
      </Card>
   );
};
