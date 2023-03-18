import styled from 'styled-components'

interface Props {
	margin: string;
}

export const HeaderWrap = styled.header<Props>`
	padding: 20px 0;
	margin-bottom: ${(props) => props.margin};
	background: rgba(255, 255, 255, 0.002);
	box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.06);

	@media only screen and (max-width: 1250px) {
		display: none;
	}
`

export const HeaderWrapTop = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const HeaderLogoLink = styled.a`
	width: 225px;
	height: 41px;
`
export const HeaderWrapTwo = styled.div`
	display: flex;
	align-items: center;
`
