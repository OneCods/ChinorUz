import styled from 'styled-components'

export const HeaderTopWrepper = styled.div`
	display: flex;
	align-items: center;
`

export const HeaderTopList = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-between;
	min-width: 200px;
`

export const HeaderTopItem = styled.li`
	display: flex;
	align-items: center;
	cursor: pointer;
	transition: all 0.8s ease;

	&:hover {
	}
`

export const HeaderTopItemText = styled.div`
	font-weight: 400;
	font-size: 15px;
	line-height: 18px;
	color: #3d3e44;
`
