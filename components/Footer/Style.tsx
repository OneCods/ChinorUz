import styled from "styled-components";

export const FooterWrap = styled.footer`
    padding: 60px 0;
    border-top: 1px solid #f1f1f6;
`

export const FooterWrapList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 40px;
    margin-bottom: 40px;
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
`

export const FooterWrapTellContent = styled.div`
    text-align: center;
    margin-bottom: 40px;
`

export const FooterWrapTellTitle = styled.div`
    font-size: 14px;
    line-height: 1.57;
    margin-bottom: 10px;
`

export const FooterWrapTell = styled.a`
    display: block;
    font-size: 24px;
    line-height: 30px;
    color: #000;
    cursor: pointer;
`

export const FooterWrapCopyright = styled.p`
    text-align: center;
    color: rgb(0, 0, 0, 0.5);
    font-size: 14px;
    line-height: 1.57;
`