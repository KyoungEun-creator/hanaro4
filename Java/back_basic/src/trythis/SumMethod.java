package trythis;

import java.util.Scanner;

public class SumMethod {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		System.out.println("정수 2개를 입력하세요");
		printSum(scan.nextInt(), scan.nextInt());
	}

	public static void printSum(int a, int b) {
		int start = Math.min(a, b);
		int end = Math.max(a, b);
		int sum = 0;
		StringBuilder sb = new StringBuilder();

		for (int i = start; i <= end; i++) {
			sum += i;
			sb.append(i);
			if (i < end) {
				sb.append(" + ");
			}
		}
		sb.append(" = ").append(sum);
		System.out.println(sb.toString());
	}
}
