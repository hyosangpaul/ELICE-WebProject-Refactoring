// 관리자페이지 (필요없을듯)
export const getAdmin = async (req, res) => {
  res.send("admin page");
};
//주문관리
export const handleOrder = async (req, res) => {
  res.send("주문관리");
};

//카테고리 추가
export const addCategory = async (req, res) => {
  res.send("카테고리 추가");
};

//카테고리 수정
export const editCategory = async (req, res) => {
  res.send("카테고리 수정");
};

//카테고리 삭제
export const deleteCategory = async (req, res) => {
  res.send("카테고리 삭제");
};
