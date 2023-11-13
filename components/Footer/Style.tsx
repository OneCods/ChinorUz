import styled from "styled-components";

export const FooterWrap = styled.footer`
   
    padding: 60px 0;
    border-top: 1px solid #f1f1f6;
    background-color: white;

    @media only screen and (max-width: 900px) {
        border: none;
        background-color: #623e63;
    }
`

export const FooterWrapList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 40px;
    margin-bottom: 40px;

    @media only screen and (max-width: 555px) {
        flex-direction: column;
        align-items: start;
        gap: 15px 0;
    }
`

export const FooterWrapListItem = styled.li`
    color: #623e63;
    font-size: 16px;
    transition: .2s;
    cursor: pointer;

    &:hover {
        color: dodgerblue;
    }

    &:active {
        opacity: 0.4;
    }

    @media only screen and (max-width: 900px) {
        width: 100%;
        color: #fff;
        border-bottom: 1px solid rgb(0, 0, 0, 0.4);
        padding-bottom: 15px;
        opacity: 0.4;
    }
    @media only screen and (max-width: 315px) {
       font-size: 14px;
    }
    
`

export const FooterWrapTellContent = styled.div`
    text-align: center;
    margin-bottom: 40px;


    @media only screen and (max-width: 375px) {
        margin-bottom: 30px;
    }
`

export const FooterWrapTellTitle = styled.div`
    font-size: 14px;
    line-height: 1.57;
    margin-bottom: 10px;

    @media only screen and (max-width: 900px) {
        color: #fff;
        opacity: 0.4;
    }
`

export const FooterWrapTell = styled.a`
    display: block;
    font-size: 24px;
    line-height: 30px;
    color: #000;
    cursor: pointer;

    @media only screen and (max-width: 900px) {
        color: #fff;
    }

    @media only screen and (max-width: 375px) {
        font-size: 18px;
    }
`

export const FooterWrapCopyright = styled.p`
    text-align: center;
    color: rgb(0, 0, 0, 0.5);
    font-size: 14px;
    line-height: 1.57;

    @media only screen and (max-width: 900px) {
        color: #fff;
        opacity: 0.4;
    }
`