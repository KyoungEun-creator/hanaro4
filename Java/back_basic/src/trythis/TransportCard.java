package trythis;

import java.util.Scanner;

public class TransportCard {
	public static void main(String[] args) {
		System.out.println("최초 충전금액: ");
		int money = new Scanner(System.in).nextInt();
		int i = 1;
		while (money >= 1500) {
			money -= 1500;
			System.out.printf("%d회 사용한 후 현재 잔액은 %d원\n", i, money);
			i++;
		}
	}
}
