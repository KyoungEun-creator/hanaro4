package trythis;

import java.util.Scanner;

public class biggerNum {
	public static void main(String[] args) {
		System.out.println("첫 번째 정수를 입력하세요: ");
		Scanner scan = new Scanner(System.in);
		int a = scan.nextInt();
		System.out.println("두 번째 정수를 입력하세요: ");
		int b = scan.nextInt();
		System.out.printf("입력하신 수 %d, %d 중에서 큰 수는 %d입니다.", a, b, (a > b) ? a : b);
	}
}
