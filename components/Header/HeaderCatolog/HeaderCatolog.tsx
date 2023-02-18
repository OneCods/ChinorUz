import { CatologIcon } from '../../../assets/icons/HeaderIcon'
import { CatologBtn, CatologIconRight } from './Style'

function HeaderCatolog() {
	return (
		<CatologBtn>
			<CatologIconRight>
				<CatologIcon />
			</CatologIconRight>
			Каталог
		</CatologBtn>
	)
}

export default HeaderCatolog
