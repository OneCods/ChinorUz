import { useState } from 'react'
import { Container } from '../../Container/Container'
import { Button, Drawer } from 'antd';

import {
	HeaderMenu,
	HeaderMenuItem,
	HeaderMenuItemText,
	HeaderNavBox,
	HeaderNavCatagories,
	HeaderNavCatagoriesItem,
	HeaderNavCatalog,
	HeaderNavFixIcon,
	HeaderNavFixLogo,
	HeaderNavFixWrap,
	HeaderNavItem,
	HeaderNavList,
	HeaderNavWrap
} from './Style'

import { headerNavCatagories, headerNavList } from '../../../data/headerData'
import {
	BasketIcon,
	HeaderBurgerIcon,
	HeaderNavLogo,
	SearchIcon,
	UserIcon
} from '../../../assets/icons/HeaderIcon'
import { HeaderMenuInfoIcon, HeaderMenuIphoneIcon, HeaderMenuSaleIcon, HeaderMenuTelIcon } from '../../../assets/icons/HeaderMenuIcon';


interface Prop {
	fixed: boolean
}

function HeaderNav({ fixed }: Prop) {

	const [open, setOpen] = useState(false);

	const showDrawer = () => {
		setOpen(true);
	};

	const onClose = () => {
		setOpen(false);
	};

	const isNarrowScreen = globalThis.matchMedia('(max-width: 1250px)').matches
	const isNarrowScreenIpad = globalThis.matchMedia('(max-width: 900px)').matches

	console.log(isNarrowScreenIpad);



	return (
		<HeaderNavWrap fix={fixed === true ? 'fixed' : ''}>
			<Container>
				<HeaderNavBox>
					{fixed === true || isNarrowScreen ? (
						<HeaderNavFixLogo>
							<HeaderNavLogo width='24' height='24' color='#fff' />
						</HeaderNavFixLogo>
					) : (
						<></>
					)}
					<HeaderNavCatalog>Вся электроника</HeaderNavCatalog>
					<HeaderNavList>
						{headerNavList?.map((item, index) => {
							return <HeaderNavItem key={index}>{item?.name}</HeaderNavItem>
						})}
					</HeaderNavList>
					{fixed === true || isNarrowScreen ? (
						<HeaderNavFixWrap>
							<HeaderNavFixIcon>
								<BasketIcon width='24' height='24' color='#fff' />
							</HeaderNavFixIcon>
							<HeaderNavFixIcon>
								<UserIcon width='24' height='24' color='#fff' />
							</HeaderNavFixIcon>
							<HeaderNavFixIcon>
								<SearchIcon width='24' height='24' color='#fff' />
							</HeaderNavFixIcon>
							<HeaderNavFixIcon onClick={showDrawer}>
								<HeaderBurgerIcon width='24' height='24' color='#fff' />
							</HeaderNavFixIcon>
						</HeaderNavFixWrap>
					) : (
						<HeaderNavCatagories>
							{headerNavCatagories.map((item, index) => {
								return (
									<HeaderNavCatagoriesItem key={index}>
										{item.name}
									</HeaderNavCatagoriesItem>
								)
							})}
						</HeaderNavCatagories>
					)}
				</HeaderNavBox>
			</Container>
			<Drawer title="" placement="right" style={{backgroundColor: '#623e63',}} onClose={onClose} open={open}>
				<HeaderMenu>
				{/* 767676 */}
					<HeaderMenuItem>
						<HeaderMenuIphoneIcon width='24px' height='24px' color='#fff' />
						<HeaderMenuItemText>Смартфоны и гаджеты</HeaderMenuItemText>
					</HeaderMenuItem>
					<HeaderMenuItem>
						<HeaderMenuSaleIcon width='24px' height='24px' color='#fff' />
						<HeaderMenuItemText> Акции и скидки</HeaderMenuItemText>
					</HeaderMenuItem>
					<HeaderMenuItem>
						<HeaderMenuInfoIcon width='24px' height='24px' color='#fff' />
						<HeaderMenuItemText>Информация</HeaderMenuItemText>
					</HeaderMenuItem>
					<HeaderMenuItem>
						<HeaderMenuTelIcon width='24px' height='24px' color='#fff' />
						<HeaderMenuItemText>+998902570131</HeaderMenuItemText>
					</HeaderMenuItem>
				</HeaderMenu>
			</Drawer>
		</HeaderNavWrap>
	)
}

export default HeaderNav
