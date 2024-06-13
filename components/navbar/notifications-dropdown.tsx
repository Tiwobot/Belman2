import {Dropdown, Navbar} from '@nextui-org/react';
import React from 'react';
import {NotificationIcon} from '../icons/navbar/notificationicon';

export const NotificationsDropdown = () => {
   return (
      <Dropdown placement="bottom-right">
         <Dropdown.Trigger>
            <Navbar.Item>
               <NotificationIcon />
            </Navbar.Item>
         </Dropdown.Trigger>
         <Dropdown.Menu
            aria-label="Avatar Actions"
            css={{
               '$$dropdownMenuWidth': '340px',
               '$$dropdownItemHeight': '70px',
               '& .nextui-dropdown-item': {
                  'py': '$4',
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
            <Dropdown.Section title="Bildirimler">
               <Dropdown.Item
                  key="1"
                  showFullDescription
                  description="Mersin Belediyesi bilidirimi test yazısı: Lorem ipsum dolor sit amet, consectetur adipiscing elit."
               >
                  📣 Test Yapıldı 1 
               </Dropdown.Item>
               <Dropdown.Item
                  key="2"
                  showFullDescription
                  description="Mersin Belediyesi bilidirimi test yazısı: Lorem ipsum dolor sit amet, consectetur adipiscing elit."
               >
                  🚀 Test Yapıldı 2
               </Dropdown.Item>
               <Dropdown.Item
                  key="3"
                  showFullDescription
                  description="Mersin Belediyesi bilidirimi test yazısı: Lorem ipsum dolor sit amet, consectetur adipiscing elit."
               >
                  📣 Test Yapıldı 3
               </Dropdown.Item>
            </Dropdown.Section>
         </Dropdown.Menu>
      </Dropdown>
   );
};
