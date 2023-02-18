// *Import Components
import {
	BasketIcon,
	FavoritIcon,
	GlobsIcon
} from '../../../assets/icons/HeaderIcon'
import {
	HeaderTopList,
	HeaderTopItem,
	HeaderTopItemText,
	HeaderTopSignIn,
	HeaderTopWrepper
} from './Style'

function HeaderList() {
	return (
		<HeaderTopWrepper>
			<HeaderTopList>
				<HeaderTopItem>
					<GlobsIcon />
					<HeaderTopItemText>Русский</HeaderTopItemText>
				</HeaderTopItem>
				<HeaderTopItem>
					<FavoritIcon />
					<HeaderTopItemText>Избранное</HeaderTopItemText>
				</HeaderTopItem>
				<HeaderTopItem>
					<BasketIcon />
					<HeaderTopItemText>Корзина</HeaderTopItemText>
				</HeaderTopItem>
			</HeaderTopList>
			<HeaderTopSignIn>Войти</HeaderTopSignIn>
		</HeaderTopWrepper>
	)
}

export default HeaderList
