import styled from "styled-components";
// 20230402 px값 전부 % , em으로 변경

export const Container = styled.div`
    display : flex;
    padding : 5em;
`
export const CartInfo = styled.div`
    width : 60%;
    margin : 1em;
    box-shadow: 0 5px 10px grey;
    & h3 {
        border-bottom: 1px grey solid;
        padding-bottom: 10px;
      }
    & label {
        display : block;
        padding-bottom : 1em;
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
        margin : 1em;
    }
`

export const ImgDiv = styled.div`
    border : 1px solid red;

    & img {
        width : 1em;
    }
`

export const FormPaymentInfo = styled.form`
  box-shadow: 0 5px 10px grey;
  padding : 1em;
  width : 40%;
  margin : 1em;
  & h3 {
    border-bottom: 1px grey solid;
    padding-bottom: 1em;
  }

  & h4 {
    border-top: 1px grey solid;
    padding-top: 1em;
  }
  
  & button {
    width : 100%;
    height : 2em;
    background : grey;
    border : none;
    color : white;
  }
`
export const DeleteAllBtn = styled.button`
    padding : 1em;
    margin : 1em;
    border-radius : 5px;
    border-color : white;
    background-color : grey;
    color : white;
`