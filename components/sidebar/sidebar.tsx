import React, {useState} from 'react';
import {Box} from '../styles/box';
import {Sidebar} from './sidebar.styles';
import {Avatar, Tooltip} from '@nextui-org/react';
import {Flex} from '../styles/flex';
import {CompaniesDropdown} from './companies-dropdown';
import {HomeIcon} from '../icons/sidebar/home-icon';
import {PaymentsIcon} from '../icons/sidebar/payments-icon';
import {BalanceIcon} from '../icons/sidebar/balance-icon';
import {AccountsIcon} from '../icons/sidebar/accounts-icon';
import {CustomersIcon} from '../icons/sidebar/customers-icon';
import {ProductsIcon} from '../icons/sidebar/products-icon';
import {ReportsIcon} from '../icons/sidebar/reports-icon';
import {DevIcon} from '../icons/sidebar/dev-icon';
import {ViewIcon} from '../icons/sidebar/view-icon';
import {SettingsIcon} from '../icons/sidebar/settings-icon';
import {CollapseItems} from './collapse-items';
import {SidebarItem} from './sidebar-item';
import {SidebarMenu} from './sidebar-menu';
import {FilterIcon} from '../icons/sidebar/filter-icon';
import {useSidebarContext} from '../layout/layout-context';
import {ChangeLogIcon} from '../icons/sidebar/changelog-icon';
import {useRouter} from 'next/router';

export const SidebarWrapper = () => {
   const router = useRouter();
   const {collapsed, setCollapsed} = useSidebarContext();

   return (
      <Box
         as="aside"
         css={{
            height: '100vh',
            zIndex: 202,
            position: 'sticky',
            top: '0',
         }}
      >
         {collapsed ? <Sidebar.Overlay onClick={setCollapsed} /> : null}

         <Sidebar collapsed={collapsed}>
            <Sidebar.Header>
               <CompaniesDropdown />
            </Sidebar.Header>
            <Flex
               direction={'column'}
               justify={'between'}
               css={{height: '100%'}}
            >
               <Sidebar.Body className="body sidebar">
                  <SidebarItem
                     title="Giriş"
                     icon={<HomeIcon />}
                     isActive={router.pathname === '/'}
                     href="/"
                  />
                  <SidebarMenu title="Ana Menü">
                     <SidebarItem
                        isActive={router.pathname === '/products'}
                        title="Hizmetler"
                        icon={<ProductsIcon />}
                     />
                     <SidebarItem
                        isActive={router.pathname === '/accounts'}
                        title="Kişiler/Çalışanlar"
                        icon={<AccountsIcon />}
                        href="accounts"
                     />
                     <SidebarItem
                        isActive={router.pathname === '/payments'}
                        title="Ödemeler"
                        icon={<PaymentsIcon />}
                     />
                     <CollapseItems
                        icon={<BalanceIcon />}
                        items={['İstenen', 'Onaylanmış', 'Geçmiş']}
                        title="Talepler"
                     />

                     <SidebarItem
                        isActive={router.pathname === '/customers'}
                        title="Talepte Bulun"
                        icon={<CustomersIcon />}
                     />

                     <SidebarItem
                        isActive={router.pathname === '/reports'}
                        title="Raporlar"
                        icon={<ReportsIcon />}
                     />
                      <SidebarItem
                        isActive={router.pathname === '/view'}
                        title="Demirbaş"
                        icon={<ViewIcon />}
                     />
                  </SidebarMenu>

                  <SidebarMenu title="Sistem">
                     <SidebarItem
                        isActive={router.pathname === '/developers'}
                        title="Eklentiler"
                        icon={<DevIcon />}
                     />
                    
                     <SidebarItem
                        isActive={router.pathname === '/settings'}
                        title="Ayarlar"
                        icon={<SettingsIcon />}
                     />
                  </SidebarMenu>

                  <SidebarMenu title="Kayıtlar">
                     <SidebarItem
                        isActive={router.pathname === '/changelog'}
                        title="Geçmiş"
                        icon={<ChangeLogIcon />}
                     />
                  </SidebarMenu>
               </Sidebar.Body>
               <Sidebar.Footer>
                  <Tooltip content={'Ayarlar'} rounded color="primary">
                     <SettingsIcon />
                  </Tooltip>
                  <Tooltip content={'Filtreler'} rounded color="primary">
                     <FilterIcon />
                  </Tooltip>
                  <Tooltip content={'Profil'} rounded color="primary">
                     <Avatar
                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                        size={'sm'}
                     />
                  </Tooltip>
               </Sidebar.Footer>
            </Flex>
         </Sidebar>
      </Box>
   );
};
