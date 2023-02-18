import styled from 'styled-components'

export const CatologBtn = styled.button`
	display: flex;
	justify-content: center;
	align-content: center;
	width: 120px;
	padding: 14px 0;
	margin-right: 25px;
	font-weight: 500;
	font-size: 15px;
	line-height: 20px;
	color: #fff;
	border: none;
	border-radius: 10px;
	background-color: #008dff;
	cursor: pointer;
	transition: all 0.7s ease;

	&:hover {
		opacity: 0.8;
	}

	&:active {
		opacity: 0.6;
	}
`

export const CatologIconRight = styled.div`
	width: 20px;
	height: 20px;
	margin-right: 10px;
`

// export const CatologWrapper
