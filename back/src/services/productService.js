import Product from "../db/models/productModel";
import productRouter from "../routers/productRouter";
// import { shortId } from "../db/schemas/types/shortId";



//상품리스트 전체 보여주기
export const showAllProducts = async (req, res, next) => {
  if (req.query.write) {
    res.render("products/edit");
    return;
  }
  const products = await Product.find().lean();
  res.render("products/list", { products });
};

//상품조회
export const findOneProduct = async (req, res, next) => {
  const { _id } = req.params;
  await Product.findOne({ _id }); // shortId 로 게시글 찾기

  // if (req.query.edit) {
  //   res.send();
  //   return;
  // }
  res.send ("상품조회완료")
  // res.render("products/view", { post });
};

//상품등록
export const addProduct = async (req, res, next) => {
  const { productName, categoryId, manufacturer, shortDesc, detailDesc, imgUrl, totalstocks, price, searchKeywords } = req.body;






  try {
    // if (!productName || !categoryId || !detailDesc || !imgUrl || !price) {
    //   throw new Error("제목과 내용을 입력해 주세요");
    // }

    // 서버에 postReqest를 보내서 브라우저에서 CREATE 작업을 수행
    // 게시글 생성
    await Product.create({
      // id: { shortId },
      productName, categoryId, manufacturer, shortDesc, detailDesc, imgUrl, totalstocks, price, searchKeywords
    });
    res.send("연결완료");
  } catch (err) {
    next(err);
  }
};
//상품수정
//shortId 로 게시글 수정하는 코드를 작성
//shortId를 새 요청값( req.params) 에 저장
export const editProduct = async (req, res, next) => {
  const { shortId } = req.params;

  try {
    // shortId 로 게시글 찾기
    const { title, content } = req.body;
    var post = await Post.findOne({ shortId });
    console.log(post);

    if (!post) throw new Error("해당 상품이 존재하지 않습니다.");

    if (!title || !content) throw new Error("상품명과 상세설명을 입력 해 주세요");

    await Product.updateOne(
      { shortId },
      {
        title,
        content,
      }
    );
    post = await Product.findOne({ shortId });

    console.log(post);

    res.redirect(`/products/${post.shortId}`);
  } catch (err) {
    next(err);
  }

  if (req.query.edit) {
    res.render("/products/edit", { post });
    return;
  }

  res.render("post/view", { post });
};
//shortId의 게시글을 삭제

//deleteProduct
export const deleteProduct = async (req, res, next) => {
  try {
    const { shortId } = req.params;
    const post = await Product.deleteOne({ shortId });

    if (!post) throw new Error("게시글이 존재하지 않습니다.");

    // shortId 로 게시글 삭제
    await Product.deleteOne({ shortId });

    const posts = await Product.find({});
    res.render("post/list", { posts });
  } catch (err) {
    next(err);
  }
};
