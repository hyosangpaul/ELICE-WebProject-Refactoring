import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
// 20230403 Styled-component divide to component
import { CartInfo, CartItem, ImgDiv, DeleteAllBtn } from './FavoriteSC';
import { WISHLIST_KEY } from '../../Constants/Key'

const Favorite = () => {
  const [items, setItems] = useState([]);
  const [countObject, setCountObject] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    
    const savedWishList = localStorage.getItem(WISHLIST_KEY)
    const wishList = savedWishList ? JSON.parse(savedWishList) : []
    setItems(wishList)


    // count가 각 1개씩 들어가도록 초기세팅
    const newCountObject = wishList.reduce((acc, current) => {
        acc[current.id] = 1
        return acc
    }, {})

    setCountObject(newCountObject)

    // setLoaded(true)
  }, []);
  
  const deleteHandler = (id) => {
    const savedWishList = localStorage.getItem(WISHLIST_KEY)
    const wishList = savedWishList ? JSON.parse(savedWishList) : []
      // 불러오고
    console.log(wishList)
    const filterWishList = wishList.filter((a) => a.id !== id)
      // 위 로직으로 클릭한 값의 id만 삭제하고 나머지 배열로 추출
    console.log('filterWishList : ', filterWishList)
    setItems(filterWishList)
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(filterWishList));
    //클릭 한 값 제거되고 난 후 나머지 그대로 다시 로컬스토리지에 저장!
    alert("삭제하기 완료!")
   }
  
  const ItemsTrue = () => {
    return (
    <CartInfo>
            {items.map((item)=>{
                return <CartItem key = {item.id}>
                  <ImgDiv><img src={item.imgUrl} alt="썸네일" /></ImgDiv>
                    <div>{item.productName}</div>
                      <button onClick = {(e) => {
                        e.preventDefault();
                        navigate(`/Iteminfo/${item.id}`)
                    }}>구매하기</button>
                      <button onClick = {() => deleteHandler(item.id)}>삭제하기</button>
                </CartItem>
            })}
            <DeleteAllBtn
                  onClick = {() => {
                      localStorage.removeItem(WISHLIST_KEY)
                      alert('찜목록이 모두 삭제되었습니다.')
                      // 로컬스토리지에 토큰이 삭제된 상태를 인식시키기 위하여 새로고침으로 href로 이동
                      window.location.href = '/favorites'
                  }}
                  >전체삭제</DeleteAllBtn>
    </CartInfo>
    );
  }

    const ItemsFalse = () => {
      return  (
      <Container style = {{
        display: 'flex',
        justifyContent: 'center',
        margin : '5em'
      }}>
          <Row style={{
            display : 'flex',
            justifyContent : 'center',
            backgroundColor: 'grey',
            height: '300px',
            width: '60%',
            margin: '7em'
          }}>
            <Col style={{ display: 'flex', justifyContent: 'center', margin: '3em' }}>
              <span class="material-symbols-outlined">diagnosis</span>
              <div>찜한 상품이 없습니다.</div>
            </Col>
          </Row>
        </Container>                
        );
    }
      
  return (
    <div>
    {items.length ? <ItemsTrue/> : <ItemsFalse/>}
    </div>
  )
}

export default Favorite;