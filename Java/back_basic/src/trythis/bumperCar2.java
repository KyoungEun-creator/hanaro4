package trythis;

import java.util.Scanner;

public class bumperCar2 {
	public static void main(String[] args) {
		System.out.println("어린이의 신장(cm)을 입력하세요: ");
		Scanner scan = new Scanner(System.in);
		int height = scan.nextInt();
		System.out.println((height >= 125) && (height < 165));
	}
}
