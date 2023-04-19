import Payment from "../db/models/paymentModel";

//배송지정보,주문정보 저장
export const postPayment = async (req, res) => {
  const { name, phoneNumber, address, requirement, productName, total } = req.body;

  try {
    await Payment.create({
      name,
      phoneNumber,
      address,
      requirement,
      productName,
      total,
    });
  } catch (error) {
    throw new Error(error);
  }

  res.send("디비에 배송지 정보 저장완료");
};
