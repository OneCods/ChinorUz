import { HeaderSearchInput, HeaderSearchWrap, SearchBtn, SearchOverlay } from './Style'

function HeaderSearch() {
	return (
		<>
			<HeaderSearchWrap>
				<HeaderSearchInput placeholder='Search..' />
				<SearchBtn>Найти</SearchBtn>
				<SearchOverlay />
			</HeaderSearchWrap>
		</>
	)
}

export default HeaderSearch
