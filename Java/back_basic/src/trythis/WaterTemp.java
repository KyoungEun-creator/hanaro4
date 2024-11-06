package trythis;

import java.util.Scanner;

public class WaterTemp {
	public static void main(String[] args) {
		System.out.println("수심을 입력하세요: ");
		Scanner scan = new Scanner(System.in);
		int deep = scan.nextInt();
		double temp = 20 - ((double)deep / 10) * 0.7;
		System.out.printf("수온: %.1f", temp);
	}
}
