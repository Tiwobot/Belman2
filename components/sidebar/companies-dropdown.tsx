import {Dropdown, Text} from '@nextui-org/react';
import React, {useState} from 'react';
import {AcmeIcon} from '../icons/acme-icon';
import {MersinIcon} from '../icons/mersin-icon';
import {AcmeLogo} from '../icons/acmelogo';
import {BottomIcon} from '../icons/sidebar/bottom-icon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

interface Company {
   name: string;
   location: string;
   logo: React.ReactNode;
}

export const CompaniesDropdown = () => {
   const [company, setCompany] = useState<Company>({
      name: 'Mersin',
      location: 'Büyükşehir',
      logo: <MersinIcon />,
   });
   return (
      <Dropdown placement="bottom-right" borderWeight={'extrabold'}>
         <Dropdown.Trigger css={{cursor: 'pointer'}}>
            <Box>
               <Flex align={'center'} css={{gap: '$7'}}>
                  {company.logo}
                  <Box>
                     <Text
                        h3
                        size={'$xl'}
                        weight={'medium'}
                        css={{
                           m: 0,
                           color: '$accents9',
                           lineHeight: '$lg',
                           mb: '-$5',
                        }}
                     >
                        {company.name}
                     </Text>
                     <Text
                        span
                        weight={'medium'}
                        size={'$xs'}
                        css={{color: '$accents8'}}
                     >
                        {company.location}
                     </Text>
                  </Box>
                  <BottomIcon />
               </Flex>
            </Box>
         </Dropdown.Trigger>
         <Dropdown.Menu
            onAction={(e) => {
               if (e === '1') {
                  setCompany({
                     name: 'Mersin',
                     location: 'Büyükşehir',
                     logo: <MersinIcon />,
                  });
               }
               if (e === '2') {
                  setCompany({
                     name: 'Bilgi İşlem',
                     location: 'Dairesi Başkanığı',
                     logo: <AcmeLogo />,
                  });
               }
               if (e === '3') {
                  setCompany({
                     name: 'Afet İşleri',
                     location: 'Dairesi Başkanlığı',
                     logo: <AcmeIcon />,
                  });
               }
               if (e === '4') {
                  setCompany({
                     name: 'Ulaşım',
                     location: 'Daire Başkanlığı',
                     logo: <AcmeIcon />,
                  });
               }
            }}
            aria-label="Avatar Actions"
            css={{
               '$$dropdownMenuWidth': '340px',
               '$$dropdownItemHeight': '60px',
               '& .nextui-dropdown-item': {
                  'py': '$2',
                  // dropdown item left icon
                  'svg': {
                     color: '$secondary',
                     mr: '$4',
                  },
                  // dropdown item title
                  '& .nextui-dropdown-item-content': {
                     w: '100%',
                     fontWeight: '$semibold',
                  },
               },
            }}
         >
            <Dropdown.Section title="Daireler">
               <Dropdown.Item
                  key="1"
                  icon={<MersinIcon />}
                  description="Büyükşehir"
               >
                  Mersin
               </Dropdown.Item>
               <Dropdown.Item
                  key="2"
                  icon={<AcmeLogo />}
                  description="Dairesi Başkanlığı"
               >
                  Bilgi İşlem
               </Dropdown.Item>
               <Dropdown.Item
                  key="3"
                  icon={<AcmeIcon />}
                  description="Daire Başkanlığı"
               >
                  Afet İşleri
               </Dropdown.Item>
               <Dropdown.Item
                  key="4"
                  icon={<AcmeIcon />}
                  description="Dairesi Başkanlığı"
               >
                  Ulaşım
               </Dropdown.Item>
            </Dropdown.Section>
         </Dropdown.Menu>
      </Dropdown>
   );
};
