// *Import Components
import { BasketIcon, UserIcon } from '../../../assets/icons/HeaderIcon'
import {
	HeaderTopList,
	HeaderTopItem,
	HeaderTopItemText,
	HeaderTopWrepper
} from './Style'

function HeaderList() {
	return (
		<HeaderTopWrepper>
			<HeaderTopList>
				<HeaderTopItem>
					<BasketIcon width='24' height='24' color='#3D3E44' />
					<HeaderTopItemText>Корзина</HeaderTopItemText>
				</HeaderTopItem>
				<HeaderTopItem>
					<UserIcon width='24' height='24' color='#3D3E44' />
					<HeaderTopItemText>Корзина</HeaderTopItemText>
				</HeaderTopItem>
			</HeaderTopList>
		</HeaderTopWrepper>
	)
}

export default HeaderList
