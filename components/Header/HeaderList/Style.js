import styled from 'styled-components'

export const HeaderTopWrepper = styled.div`
    display: flex;
	align-items: center;
`

export const HeaderTopList = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 200px;
`

export const HeaderTopItem = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 40px;
	height: 40px;
	padding: 10px;
	border-radius: 50%;
	cursor: pointer;
	transition: all 0.8s ease;

	&:hover {
		background-color: #008DFF;
	}
`

export const HeaderTopItemText = styled.div`
	font-weight: 400;
	font-size: 11px;
	line-height: 15px;
	color: #666666;
`

export const HeaderTopSignIn = styled.button`
	padding: 13px 17px;
	margin-left: 20px;
	font-weight: 400;
	font-size: 15px;
	line-height: 24px;
	color: #222222;
	background: #e8e8e8;
	border: none;
	border-radius: 4px;
	outline: none;
	cursor: pointer;
	transition: all 0.8s ease;

	&:hover {
		opacity: 0.8;
	}

	&:active {
		opacity: 0.6;
	}
`
