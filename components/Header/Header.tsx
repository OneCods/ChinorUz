import { useState } from 'react'

import LogoSvg from '../../assets/svg/logo'
import { Container } from '../Container/Container'
import HeaderList from './HeaderList/HeaderList'
import HeaderNav from './HeaderNav/HeaderNav'
import HeaderSearch from './HeaderSearch/HeaderSearch'
import HeaderTop from './HeaderTop/HeaderTop'
import {
	HeaderLogoLink,
	HeaderWrap,
	HeaderWrapTop,
	HeaderWrapTwo
} from './Style'

interface Prop {
	fixed: string
}

function Header() {
	const [fix, setFix] = useState(false)

	const setFixed = function () {
		if (window.scrollY >= 115) {
			setFix(true)
		} else {
			setFix(false)
		}
	}

	window.addEventListener('scroll', setFixed)

	return (
		<>
			<HeaderTop />
			<HeaderWrap margin={fix === true ? '56px' : '0'}>
				<Container>
					<HeaderWrapTop>
						<HeaderLogoLink href='#'>
							<LogoSvg />
						</HeaderLogoLink>
						<HeaderSearch />
						<HeaderList  />
					</HeaderWrapTop>
				</Container>
			</HeaderWrap>
			<HeaderNav fixed={fix} />
		</>
	)
}

export default Header
