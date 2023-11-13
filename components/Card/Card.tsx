import { CardItem, CardItemBottom, CardItemBottomBtn, CardItemBottomPrice, CardItemContent, CardItemImg, CardItemName, CardList } from "./Style"
import CardImg from "../../assets/img/laptop.jpeg";
import { HeaderMenuSaleIcon } from "../../assets/icons/HeaderMenuIcon";
import { BasketIcon } from "../../assets/icons/HeaderIcon";
import Link from "next/link";


function Card() {

    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <CardList>
            {
                data.map((item, index) => {
                    return (
                       <Link href={'/card_inner'} key={index}>
                        <CardItem >
                            <CardItemImg src={CardImg.src} />
                            <CardItemContent>
                                <CardItemName>Apple MacBook Air 13 MGND3 Gold (M1 8-Core, GPU 7-Core, 8GB, 256Gb)</CardItemName>
                                <CardItemBottom>
                                    <CardItemBottomPrice>12000$</CardItemBottomPrice>
                                    <CardItemBottomBtn>
                                         <BasketIcon width="24px" height="24px" color="#000" />
                                    </CardItemBottomBtn>
                                </CardItemBottom>
                            </CardItemContent>
                        </CardItem>
                       </Link>
                    )
                })
            }
        </CardList>
    )
}

export default Card