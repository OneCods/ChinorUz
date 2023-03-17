// *Import Components
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

function Header() {
	return (
		<>
			<HeaderTop />
			<HeaderWrap>
				<Container>
					<HeaderWrapTop>
						<HeaderLogoLink href='#'>
							<LogoSvg />
						</HeaderLogoLink>
						<HeaderSearch />
						<HeaderList />
					</HeaderWrapTop>
					{/* <HeaderNav /> */}
				</Container>
			</HeaderWrap>
		</>
	)
}

export default Header
