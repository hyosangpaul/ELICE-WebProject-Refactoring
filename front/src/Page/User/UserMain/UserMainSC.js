import styled from "styled-components";

// 컴포넌트 생성 후 Link 태그로 변경
export const ButtonSC = styled.div`
    display : flex;
    justify-Content : center;
    
    & button {
        padding : 3em;
        margin : 1em;
    }
`

export const H1SC = styled.h1`
    text-align : center;
    padding : 1em;
`

export const MainDivSC = styled.div`
    padding : 8em;
`