import styled from 'styled-components'

export const HeaderTopWrapper = styled.div`
	border-bottom: 1px solid #f1f1f6;
`

export const HeaderTopWrap = styled.div`
	display: flex;
	justify-content: space-between;
`

export const HeaderTopLIst = styled.ul`
	display: flex;
	align-items: center;
`

export const HeaderTopItem = styled.li`
	position: relative;
	padding: 7px 0 10px 0;
	font-family: 'Exo',sans-serif !important;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	color: #3d3e44;
	cursor: pointer;

	&::before {
		content: '';
		position: absolute;
		bottom: -1px;
		left: 0;
		width: 100%;
		height: 1px;
		background-color: #777780;
		opacity: 0;
		pointer-events: none;
		-webkit-transition: 0.2s;
		transition: 0.2s;
	}

	&:hover::before {
		background-color: #777780;
		opacity: 1;
	}

	& ~ & {
		margin-left: 24px;
	}
`

// HeaderTopRight
export const HeaderTopRight = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	min-width: 180px;
`

export const HeaderTopCall = styled.a`
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	color: #000;
`
