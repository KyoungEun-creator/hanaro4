package trythis;

import java.util.Scanner;

public class GovMoney {
	public static void main(String[] args) {
		System.out.println("인원 수를 입력하시오: ");
		int familyMem = new Scanner(System.in).nextInt();
		if (familyMem == 1) {
			System.out.println("400,000원 지원");
		} else if (familyMem == 2) {
			System.out.println("600,000원 지원");
		} else if (familyMem == 3) {
			System.out.println("800,000원 지원");
		} else if (familyMem >= 4) {
			System.out.println("1,000,000원 지원");
		}
	}
}
