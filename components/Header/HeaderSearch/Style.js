import styled from 'styled-components'

export const HeaderSearchWrap = styled.div`
	display: flex;
`

export const HeaderSearchInput = styled.input`
	padding: 0px 20px;
	width: 500px;
	height: 45px;
	font-weight: 400;
	font-size: 15px;
	line-height: 19px;
	color: #757575;
	border: none;
	border: 2px solid #008dff;
	border-radius: 10px 0px 0px 10px;
	outline: none;
	z-index: 1;

	&::placeholder {
		font-weight: 400;
		font-size: 15px;
		line-height: 19px;
		color: #757575;
	}
`

export const SearchOverlay = styled.div`
	cursor: pointer;
	${HeaderSearchInput}:focus & {
		position: absolute;
		top: 0%;
		left: 0%;
		width: 100%;
		height: 100%;
		background-color: rgb(0, 0, 0, 0.3);
	}
`

export const SearchBtn = styled.button`
	padding: 0 25px;
	font-weight: 500;
	font-size: 16px;
	line-height: 20px;
	text-align: center;
	text-transform: lowercase;
	color: #fff;
	border: none;
	border-radius: 0px 10px 10px 0px;
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
