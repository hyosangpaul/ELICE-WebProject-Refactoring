import React from "react";
import { ButtonSC, H1SC, MainDivSC } from "./UserMainSC";

const UserMain = () => {
    
    return(
        <MainDivSC>
            <H1SC>USERNAME님 환영 합니다.</H1SC>
            <ButtonSC>
                {/* 컴포넌트 생성 후 Link 태그로 변경 */}
                <button>유저 정보</button>
                <button>정보 수정</button>
                <button>회원 탈퇴</button>
            </ButtonSC>
        </MainDivSC>
    )
}

export default UserMain;