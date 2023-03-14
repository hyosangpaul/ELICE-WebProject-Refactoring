import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function BodySlides () {
    return (
      <div style = {{
        display : 'flex',
        justifyContent : 'center'
        }}>
      <Carousel fade style = {{width : 800}}> 
      {/* carousel 정렬 및 크기 맞추기 + 관련 이미지 추가 */}
        <Carousel.Item>
          <img
            style = {{width : 800, height : 500}}
            className="d-block"
            src="https://img.freepik.com/free-photo/top-view-non-binary-kids-playing-with-colorful-game_23-2148779611.jpg?w=826&t=st=1675181807~exp=1675182407~hmac=0a33b30e9d9bfb45a36bf7f57a3c2f5614704470aac58d9c18230f331814b610"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style = {{width : 800, height : 500}}
            className="d-block"
            src="https://img.freepik.com/free-photo/set-children-toys_93675-130772.jpg?w=996&t=st=1675182576~exp=1675183176~hmac=4f3489c9e69334468ce2ac41a84e1b695b4089bd968bd9b15fb23f0458cf4bd3"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style = {{width : 800, height : 500}}
            className="d-block"
            src="https://img.freepik.com/free-photo/full-shot-child-playing-with-colorful-toys_23-2149357268.jpg?w=996&t=st=1675182692~exp=1675183292~hmac=8cb0966119ec099fd1c85824ee7df1c99c4c873405161c2f71e46e84d1753f50"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      </div>
    );
  }

  export default BodySlides;