import styled from "styled-components";

export const CardList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;

    @media only screen and (max-width: 445px) {
        gap: 10px;  
    }
`

export const CardItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 250px;
    height: 400px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    border-radius: 7px;

    @media only screen and (max-width: 555px) {
        width: 230px;
        height: 400px;
    }

    @media only screen and (max-width: 510px) {
        width: 200px;
        height: 330px;
    }

    @media only screen and (max-width: 445px) {
        width: 170px;
        height: 320px; 
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    }

`

export const CardItemImg = styled.img`
    width: 250px;
    height: 250px;
    object-fit: cover;


    @media only screen and (max-width: 555px) {
        width: 100%;
        height: auto;
    }
`

export const CardItemName = styled.div`
    margin-bottom: 30px;

    @media only screen and (max-width: 510px) {
        font-size: 14px;
        margin-bottom: 20px;
    }
`

export const CardItemContent = styled.div`
    padding: 20px;

    @media only screen and (max-width: 510px) {
        padding: 15px;
    }
`

export const CardItemBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const CardItemBottomPrice = styled.div`
    font-size: 18px;

    @media only screen and (max-width: 510px) {
        font-size: 16px;
    }
`

export const CardItemBottomBtn = styled.button`
     border: none;
     cursor: pointer;
     background-color: transparent;
`

