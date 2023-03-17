import styled from 'styled-components'

export const HeaderSearchWrap = styled.div`
	position: relative;
`

export const HeaderSearchInput = styled.input`
	padding: 10px;
	width: 800px;
	font-weight: 400;
	font-size: 15px;
	line-height: 19px;
	color: #757575;
	border: none;
	outline: none;
	z-index: 1;
	background: #f1f1f6;

	&::placeholder {
		font-weight: 400;
		font-size: 16px;
		line-height: 21px;
		color: #bcbcc6;
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
	position: absolute;
	right: 10px;
	top: 0px;
	bottom: 0px;
	border: none;
	border-radius: 0px 10px 10px 0px;
	cursor: pointer;
	transition: all 0.7s ease;

	&:hover {
		opacity: 0.8;
	}

	&:active {
		opacity: 0.6;
	}
`
