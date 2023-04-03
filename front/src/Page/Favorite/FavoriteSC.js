import styled from "styled-components"

// 20230403 상품리스트 추가시 체크하기
export const CartInfo = styled.div`
    width : 60%;
    margin : 1em;
    padding : 1em;
    box-shadow: 0 5px 10px grey;
    & h3 {
        border-bottom: 1px grey solid;
        padding-bottom: 10px;
      }
    & label {
        display : block;
        padding-bottom : 20px;
    }
    & input {
        width : 80%;
    }
    & h6 {
        font-weight : bold;
        weight : 30%;
    }
`

export const CartItem = styled.div`
    border : 1px solid gray;
    & div {
        display : inline;
        margin : 15px;
    }
`
export const ImgDiv = styled.div`
    border : 1px solid red;

    & img {
        width : 100px;
    }
`
export const DeleteAllBtn = styled.button`
    padding : 10px;
    border-radius : 5px;
    border-color : white;
    background-color : grey;
    color : white;
`