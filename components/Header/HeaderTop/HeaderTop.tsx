import Link from 'next/link'

import headerTopData from '../../../data/headerTop'
import { Container } from '../../Container/Container'
import {
	HeaderTopCall,
	HeaderTopItem,
	HeaderTopLIst,
	HeaderTopRight,
	HeaderTopWrap,
	HeaderTopWrapper
} from './Style'

import { CallIcon, TelegramIcon } from '../../../assets/icons/HeaderIcon'

function HeaderTop() {
	return (
		<HeaderTopWrapper>
			<Container>
				<HeaderTopWrap>
					<HeaderTopLIst>
						{headerTopData.map((item, index) => {
							return <HeaderTopItem key={index}>{item.name}</HeaderTopItem>
						})}
					</HeaderTopLIst>
					<HeaderTopRight>
						<Link href={'/'}>
							<CallIcon width='24' height='24' color='#bcbcc6' />
						</Link>
						<Link href={'/'}>
							<TelegramIcon width='24' height='24' color='#bcbcc6' />
						</Link>
						<HeaderTopCall>+998900431160</HeaderTopCall>
					</HeaderTopRight>
				</HeaderTopWrap>
			</Container>
		</HeaderTopWrapper>
	)
}

export default HeaderTop
