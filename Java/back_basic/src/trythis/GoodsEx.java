package trythis;

public class GoodsEx {
	public static void main(String[] args) {
		Goods shampoo = new Goods();
		shampoo.name = "앨라스틴";
		shampoo.price = 13000;
		shampoo.numberOfStock = 30;
		shampoo.sold = 50;

		System.out.printf("상품이름: %s\n상품가격: %d\n재고수량: %d\n팔린수량: %d", shampoo.name, shampoo.price, shampoo.numberOfStock,
			shampoo.sold);
	}

	static class Goods {
		String name;
		int price;
		int numberOfStock;
		int sold;
	}
}
