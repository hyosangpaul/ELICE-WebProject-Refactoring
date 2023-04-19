import User from "../db/models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//회원가입
export const postJoin = async (req, res) => {
  const { name, email, password, password2, phoneNumber, address } = req.body;

  //이메일 중복확인
  const user = await User.findOne({ email });
  if (user) {
    throw new Error("이 이메일은 현재 사용중입니다. 다른 이메일을 입력해 주세요.");
  }
  // //패스워드가 같은지 확인

  // if (password !== password2) {
  //   throw new Error("패스워드가 일치하지 않습니다.");
  // }

  // 패스워드 해쉬화
  let saltRounds = await bcrypt.genSalt(10);
  let hashedPassword = await bcrypt.hash(password, saltRounds);

  try {
    await User.create({
      name,
      email,
      password: hashedPassword,
      phoneNumber,
      address,
    });
    return res.send("join");
  } catch (error) {
    throw new Error(error);
  }
};

//로그인
export const postLogin = async (req, res) => {
  const { email, password } = req.body;

  // //DB에 있는 사용자 인지 확인
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("해당 이메일은 가입한 사용자가 아닙니다.");
  }

  // //비밀번호 확인
  // //1번째는 프론트에서 가져온 비밀번호, 2번째는 db비밀번호
  const comparePassword = await bcrypt.compare(password, user.password);

  if (!comparePassword) {
    throw new Error("비밀번호가 일치하지 않습니다.");
  }
  // 로그인 성공 -> JWT 웹 토큰 생성
  const secretKey = process.env.JWT_SECRET_KEY || "secret-key";

  // jwt 토큰에 유저 아이디 담기
  const token = jwt.sign({ userId: user._id, role: user.role }, secretKey);
  res.json(token);

  const isAdmin = user.role === "admin";

  if (isAdmin) {
    res.redirect("/");
  }
  return { token, isAdmin };
};

//마이 페이지
export const seeMyPage = async (req, res) => {
  const userId = req.params.userId;

  try {
    const user = await User.findOne({ userId });
    const info = {
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
      address: user.address,
    };
    res.status(200).json(info);
  } catch (error) {
    throw new Error(error);
  }
};

//회원 정보 수정
export const changeUser = async (req, res) => {
  try {
    const { name, email, phoneNumber, address } = req.body;
    let user = await User.findOne({ name });
    // // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!user) {
      const errorMessage = "가입 내역이 없습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }
    await User.updateOne({
      email,
      phoneNumber,
      address,
    });
    res.write("<script>alert('success')</script>");
  } catch (error) {
    return error;
  }
};

//회원탈퇴
export const deleteUser = async (req, res) => {
  const userId = req.params.userId;
  const { password } = req.body;

  const user = await User.findOne({ userId });
  // //입력한 비밀번호 해쉬화

  // // //비밀번호 확인
  // // //1번째는 프론트에서 가져온 비밀번호, 2번째는 db비밀번호
  const comparePassword = bcrypt.compareSync(password, user.password);

  if (!comparePassword) {
    throw new Error("비밀번호가 일치하지 않습니다.");
  }

  try {
    await User.deleteOne({ userId });
    res.json({ message: "안전하게 삭제 완료했습니다." });
  } catch (error) {
    res.json({ message: "삭제에 실패했습니다.", error });
  }
};

//로그아웃
// jwt를 이용해 토큰 제거 하는게 쉽지않음 일단 보류

export const logOut = async (req, res) => {
  res.cookie("token", null, { maxAge: 0 });

  return res.send("logout");
};
