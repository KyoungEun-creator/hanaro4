package trythis;

import java.util.Scanner;

public class GoodsEx {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		Goods[] GoodsArray = new Goods[3];

		for (int i = 0; i < GoodsArray.length; i++) {
			GoodsArray[i] = new Goods();
			GoodsArray[i].name = scan.next();
			GoodsArray[i].price = scan.nextInt();
			GoodsArray[i].numberOfStock = scan.nextInt();
			GoodsArray[i].sold = scan.nextInt();
		}

		System.out.println("상품명 가격 재고량 판매량");
		for (int i = 0; i < GoodsArray.length; i++) {
			System.out.printf("%s %d %d %d\n", GoodsArray[i].name, GoodsArray[i].price, GoodsArray[i].numberOfStock,
				GoodsArray[i].sold);
		}
	}

	static class Goods {
		String name;
		int price;
		int numberOfStock;
		int sold;
	}
}
