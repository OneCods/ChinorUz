import React, { useState } from 'react'
import styled from 'styled-components'

const setFixed = function () {
	const [fix, setFix] = useState(false)

	if (window.scrollY >= 100) {
		setFix(true)
	} else {
		setFix(false)
	}
}

window.addEventListener('scroll', setFixed)

export const HeaderNavWrap = styled.div`
	display: flex;
	align-items: center;
	height: 56px;
	background-color: #623e63;
`

export const HeaderNavBox = styled.div`
	display: flex;
	align-items: center;
`

export const HeaderNavCatalog = styled.button`
	padding: 19px 30px 19px 19px;
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 19px;
	color: #ffffff;
	background: rgba(73, 34, 74, 0.2);
	border: none;
`

export const HeaderNavList = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 770px;
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
