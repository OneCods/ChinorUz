// *IMport Components
import { HeaderNavBtn, HeaderNavItem, HeaderNavList } from './Style'
function HeaderNav() {
	return (
		<HeaderNavList>
			<HeaderNavItem>
                <HeaderNavBtn>Barcha bo'limlar</HeaderNavBtn>
            </HeaderNavItem>
            <HeaderNavItem>
                <HeaderNavBtn>Yangiliklar</HeaderNavBtn>
            </HeaderNavItem>
            <HeaderNavItem>
                <HeaderNavBtn>Yangi kelganlar</HeaderNavBtn>
            </HeaderNavItem>
            <HeaderNavItem>
                <HeaderNavBtn>Chegirmalar</HeaderNavBtn>
            </HeaderNavItem>
            <HeaderNavItem>
                <HeaderNavBtn>Telefonlar va gadjetlar</HeaderNavBtn>
            </HeaderNavItem>
            <HeaderNavItem>
                <HeaderNavBtn>Kitoblar</HeaderNavBtn>
            </HeaderNavItem>
            <HeaderNavItem>
                <HeaderNavBtn>Televizorlar</HeaderNavBtn>
            </HeaderNavItem>
            <HeaderNavItem>
                <HeaderNavBtn>Sport buyumlari</HeaderNavBtn>
            </HeaderNavItem>
		</HeaderNavList>
	)
}

export default HeaderNav
