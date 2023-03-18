// *IMport Components
import { Container } from '../../Container/Container'
import {
	HeaderNavBox,
	HeaderNavCatagories,
	HeaderNavCatagoriesItem,
	HeaderNavCatalog,
	HeaderNavItem,
	HeaderNavList,
	HeaderNavWrap
} from './Style'

import { headerNavCatagories, headerNavList } from '../../../data/headerData'

function HeaderNav() {
	return (
		<HeaderNavWrap>
			<Container>
				<HeaderNavBox>
					<HeaderNavCatalog>Вся электроника</HeaderNavCatalog>
					<HeaderNavList>
						{headerNavList?.map((item, index) => {
							return <HeaderNavItem key={index}>{item?.name}</HeaderNavItem>
						})}
					</HeaderNavList>
					<HeaderNavCatagories>
						{headerNavCatagories.map((item, index) => {
							return <HeaderNavCatagoriesItem key={index}>{item.name}</HeaderNavCatagoriesItem>
						})}
					</HeaderNavCatagories>
				</HeaderNavBox>
			</Container>
		</HeaderNavWrap>
	)
}

export default HeaderNav
