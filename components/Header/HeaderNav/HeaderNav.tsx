import { Container } from '../../Container/Container'
import {
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
	HeaderNavLogo,
	SearchIcon,
	UserIcon
} from '../../../assets/icons/HeaderIcon'

interface Prop {
	fixed: boolean
}

function HeaderNav({ fixed }: Prop) {
	const isNarrowScreen = globalThis.matchMedia('(max-width: 1250px)').matches
	const isNarrowScreenIpad = globalThis.matchMedia('(max-width: 900px)').matches

    console.log(isNarrowScreenIpad);



	return (
		<HeaderNavWrap fix={fixed === true ? 'fixed' : ''}>
			<Container>
				<HeaderNavBox>
					{isNarrowScreenIpad ? (
						<div style={{ display: 'flex' }}>
							<HeaderNavFixIcon>
								<SearchIcon width='24' height='24' color='#fff' />
							</HeaderNavFixIcon>
							<HeaderNavFixIcon>
								<SearchIcon width='24' height='24' color='#fff' />
							</HeaderNavFixIcon>
						</div>
					) : (
						<></>
					)}
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
		</HeaderNavWrap>
	)
}

export default HeaderNav
