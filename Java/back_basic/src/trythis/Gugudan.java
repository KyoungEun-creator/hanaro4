package trythis;

import java.util.Scanner;

public class Gugudan {
	public static void main(String[] args) {
		System.out.println("원하시는 단을 입력하세요(2-9): ");
		int dan = new Scanner(System.in).nextInt();
		for (int i = 1; i < 10; i++) {
			System.out.printf("%d * %d = %d\n", dan, i, dan * i);
		}
	}
}
