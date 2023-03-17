import { SearchIcon } from '../../../assets/icons/HeaderIcon'
import {
	HeaderSearchInput,
	HeaderSearchWrap,
	SearchOverlay,
	SearchBtn
} from './Style'

function HeaderSearch() {
	return (
		<>
			<HeaderSearchWrap>
				<HeaderSearchInput placeholder='Search..' />
				<SearchBtn>
					<SearchIcon width='24' height='24' color='#bcbcc6' />
				</SearchBtn>
				<SearchOverlay />
			</HeaderSearchWrap>
		</>
	)
}

export default HeaderSearch
