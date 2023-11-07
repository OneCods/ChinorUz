import styled from "styled-components";

export const HeroWrapper = styled.div`
   padding: 50px 40px 50px 0px;
   /* width: 100%; */
   overflow-x: hidden;
   border-radius: 10px;

   @media only screen and (min-width: 1350px) {
    padding: 50px 0px 50px 0px;
   }

   @media only screen and (max-width: 768px) {
    padding: 50px 20px 50px 0px;
   }
`