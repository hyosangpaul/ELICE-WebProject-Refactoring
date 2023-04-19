import "dotenv/config";
import app from "./src/app";
// 테스트용 문구입니다.
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("정상적으로 서버를 시작하였습니다.", `PORT : ${PORT}`);
});
