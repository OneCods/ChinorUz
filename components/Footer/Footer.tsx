import { Container } from "../Container/Container"
import { FooterWrap, FooterWrapCopyright, FooterWrapList, FooterWrapListItem, FooterWrapTell, FooterWrapTellContent, FooterWrapTellTitle } from "./Style"

import { footerListData } from "../../data/footerData"

function Footer() {

    console.log(footerListData);

    const nowFullYear = new Date().getFullYear()
    
    return (
        <FooterWrap>
            <Container>
                <FooterWrapList>
                    {
                        footerListData.map((item, index) => {
                            return(
                                <FooterWrapListItem key={index}>
                                     {item.name}
                                </FooterWrapListItem>
                            )
                        })
                    }   
                </FooterWrapList>
                <FooterWrapTellContent>
                    <FooterWrapTellTitle>Всегда на связи</FooterWrapTellTitle>
                    <FooterWrapTell href="tel:+998900431160">90-043-11-60</FooterWrapTell>
                    <FooterWrapTell href="tel:+998902570131">90-257-01-31</FooterWrapTell>
                </FooterWrapTellContent>
                <FooterWrapCopyright>© {nowFullYear} Маркетплейс HALTA.uz</FooterWrapCopyright>
            </Container>
        </FooterWrap>
    )
}

export default Footer