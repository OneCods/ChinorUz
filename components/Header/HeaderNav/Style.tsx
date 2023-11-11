import styled from 'styled-components'

import ViewBg from '../../../assets/svg/view-user.svg';
import BtnTelegram from '../../../assets/svg/telegram.svg';

interface Props {
	fix: string
}

console.log(ViewBg);


export const HeaderNavWrap = styled.div<Props>`
	display: flex;
	width: 100%;
	position: ${props => props.fix};
	top: 0;
	width: 100%;
	align-items: center;
	height: 56px;
	background-color: #623e63;

	@media only screen and (max-width: 1250px) {
		position: fixed;
		width: 100%;
	}

	@media only screen and (max-width: 900px) {
		height: 48px;
	}
`

export const HeaderNavBox = styled.div`
	display: flex;
	align-items: center;
	position: relative;

	@media only screen and (max-width: 1000px) {
		justify-content: space-between;
	}
`

export const HeaderNavCatalog = styled.button`
	width: 190px;
	padding: 19px;
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 19px;
	color: #ffffff;
	background: rgba(73, 34, 74, 0.2);
	border: none;

	@media only screen and (max-width: 900px) {
		display: none;
	}
`

export const HeaderNavList = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 770px;

	@media only screen and (max-width: 1250px) {
		width: 80%;
		justify-content: start;
	}

	@media only screen and (max-width: 900px) {
		display: none;
	}
`

export const HeaderNavItem = styled.li`
	padding: 18px 15px;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	color: #ffffff;
	opacity: 0.8;
	cursor: pointer;

	&:hover {
		background-color: rgba(129, 101, 130, 0.8);
		opacity: 1;
	}

	@media only screen and (max-width: 1250px) {
		&:nth-last-child(n + 4) {
			display: none;
		}
	}

	@media only screen and (max-width: 1000px) {
		&:nth-last-child(n + 3) {
			display: none;
		}
	}
`

export const HeaderNavCatagories = styled.div`
	display: flex;
	align-items: center;
	padding: 0 50px;
`

export const HeaderNavCatagoriesItem = styled.div`
	font-weight: 400;
	font-size: 13px;
	line-height: 16px;
	color: #ffffff;
	opacity: 0.8;
	cursor: pointer;

	& + & {
		margin-left: 20px;
	}
`
export const HeaderNavFixLogo = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 56px;
	height: 100%;
	min-height: 56px;
	opacity: 0.8;
	cursor: pointer;

	&:hover {
		background-color: rgba(129, 101, 130, 0.8);
		opacity: 1;
	}

	@media only screen and (max-width: 900px) {
		width:48px;
		min-height: 48px;
	}
`

export const HeaderNavFixWrap = styled.div`
	display: flex;
	position: absolute;
	right: 0;

	@media only screen and (max-width: 900px) {
		position: static;
	}
`

export const HeaderNavFixIcon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 56px;
	height: 100%;
	min-height: 56px;
	opacity: 0.8;
	cursor: pointer;

	&:hover {
		background-color: rgba(129, 101, 130, 0.8);
		opacity: 1;
	}

	@media only screen and (max-width: 900px) {
		width: 48px;
		min-height: 48px;
		position: static;
		&:nth-child(3) {
			display: none;
			position: absolute;
			left: 0;
		}
	}
`

export const HeaderMenuWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
    padding: 0px 10px;
	height: 100%;
	overflow-x: hidden;
`

export const HeaderMenu = styled.ul`

`

export const HeaderMenuItem = styled.li`
	display: flex;
	align-items: center;
	gap: 0 15px;

	& + & {
		margin-top: 25px;
	}
`

export const HeaderMenuItemText = styled.p`
	font-size: 18px;
	font-weight: 600;
	color: #fff;
`

export const HeaderMenuBottom = styled.div`
    position: relative;
	 &::before {
		content: "";
		width: 300px;
		height: 220px;
		position: absolute;
		bottom: 70%;
		background-color: #000;
		background: url(${ViewBg?.src});
		background-size: cover;
		z-index: 11;
	 }
`

export const HeaderMenuBottomBtn = styled.a`
	 position: relative;
	 padding: 20px 0;
	 width: 100%;
	 text-align: center;
	 color: #1DA1F2;
	 font-size: 25px;
	 border-radius: 15px;
	 background-color: #ffff;

     &::before {
		content: "";
		position: absolute;
		top: 15px;
		left: 20px;
		width: 40px;
		height: 40px;
		background-image: url(${BtnTelegram?.src});
		background-size: cover;
	 }
`
