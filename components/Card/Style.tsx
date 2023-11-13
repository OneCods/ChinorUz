import styled from "styled-components";

export const CardList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
`

export const CardItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 250px;
    height: 400px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    border-radius: 7px;

`

export const CardItemImg = styled.img`
    width: 250px;
    height: 250px;
    object-fit: cover;
`

export const CardItemName = styled.div`
    margin-bottom: 30px;
`

export const CardItemContent = styled.div`
    padding: 20px;
`

export const CardItemBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const CardItemBottomPrice = styled.div`
    font-size: 18px;
`

export const CardItemBottomBtn = styled.button`
     border: none;
     cursor: pointer;
     background-color: transparent;
`

