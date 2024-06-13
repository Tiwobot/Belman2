import {Avatar, Dropdown, Navbar, Text} from '@nextui-org/react';
import React from 'react';
import {DarkModeSwitch} from './darkmodeswitch';

export const UserDropdown = () => {
   return (
      <Dropdown placement="bottom-right">
         <Navbar.Item>
            <Dropdown.Trigger>
               <Avatar
                  bordered
                  as="button"
                  color="secondary"
                  size="md"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
               />
            </Dropdown.Trigger>
         </Navbar.Item>
         <Dropdown.Menu
            aria-label="User menu actions"
            onAction={(actionKey) => console.log({actionKey})}
         >
            <Dropdown.Item key="profile" css={{height: '$18'}}>
               <Text b color="inherit" css={{d: 'flex'}}>
                  Giriş yapılan hesap:
               </Text>
               <Text b color="inherit" css={{d: 'flex'}}>
                  fatma.develi@test.com
               </Text>
            </Dropdown.Item>
            <Dropdown.Item key="settings" withDivider>
               Profil Ayarları
            </Dropdown.Item>
            <Dropdown.Item key="team_settings">Daire Ayarları</Dropdown.Item>
            <Dropdown.Item key="analytics" withDivider>
               Analizler
            </Dropdown.Item>
            <Dropdown.Item key="system">Sistem</Dropdown.Item>
            <Dropdown.Item key="configurations">Konfigürasyon</Dropdown.Item>
            <Dropdown.Item key="help_and_feedback" withDivider>
               Yorum yap
            </Dropdown.Item>
            <Dropdown.Item key="logout" withDivider color="error">
               Çıkış Yap
            </Dropdown.Item>
            <Dropdown.Item key="switch" withDivider>
               <DarkModeSwitch />
            </Dropdown.Item>
         </Dropdown.Menu>
      </Dropdown>
   );
};
