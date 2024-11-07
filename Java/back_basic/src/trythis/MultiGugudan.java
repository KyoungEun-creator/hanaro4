package trythis;

import java.util.Scanner;

public class MultiGugudan {
	public static void main(String[] args) {
		System.out.println("구구단의 시작단 입력: ");
		int start = new Scanner(System.in).nextInt();
		System.out.println("구구단의 끝단 입력: ");
		int end = new Scanner(System.in).nextInt();

		if (start < end) {
			for (int i = start; i <= end; i++) {
				for (int j = 1; j < 10; j++) {
					System.out.printf("%d * %d = %d\n", i, j, i * j);
				}
			}
		} else {
			for (int i = start; i >= end; i--) {
				for (int j = 1; j < 10; j++) {
					System.out.printf("%d * %d = %d\n", i, j, i * j);
				}
			}
		}
	}
}
