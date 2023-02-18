// *Import Components
import LogoSvg from '../../assets/svg/logo'
import { Container } from '../Container/Container'
import HeaderCatolog from './HeaderCatolog/HeaderCatolog'
import HeaderList from './HeaderList/HeaderList'
import HeaderNav from './HeaderNav/HeaderNav'
import HeaderSearch from './HeaderSearch/HeaderSearch'
import { HeaderLogoLink, HeaderWrap, HeaderWrapTop, HeaderWrapTwo } from './Style'

function Header() {
	return (
		<HeaderWrap>
			<Container>
				<HeaderWrapTop>
					<HeaderWrapTwo>
						<HeaderLogoLink href='#'>
							<LogoSvg />
						</HeaderLogoLink>
						<HeaderCatolog />
						<HeaderSearch />
					</HeaderWrapTwo>
					<HeaderList />
				</HeaderWrapTop>
				<HeaderNav />
			</Container>
		</HeaderWrap>
	)
}

export default Header
