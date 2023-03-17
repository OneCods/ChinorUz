import styled from 'styled-components'

export const HeaderTopWrapper = styled.div`
	border-bottom: 1px solid #f1f1f6;
`

export const HeaderTopWrap = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 8px 0 14px 0;
`

export const HeaderTopLIst = styled.ul`
	display: flex;
	align-items: center;
`

export const HeaderTopItem = styled.li`
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	color: #3d3e44;

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
`
