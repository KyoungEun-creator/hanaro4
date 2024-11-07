package trythis;

import java.util.Scanner;

public class ElectricityFee {
	public static void main(String[] args) {
		System.out.println("전기 사용량을 입력하세요: ");
		double elecUsage = new Scanner(System.in).nextDouble();
		// 기본요금
		int defaultPrice;
		// 단가
		double unitPrice;

		if (elecUsage <= 200) {
			unitPrice = 99.3;
			defaultPrice = 910;
		} else if (elecUsage <= 400) {
			unitPrice = 187.9;
			defaultPrice = 1600;
		} else {
			unitPrice = 280.6;
			defaultPrice = 7300;
		}
		// 전기요금
		double elecFee = defaultPrice + unitPrice * elecUsage;

		System.out.printf("사용량: %.1f km/h\n기본요금: %d 원\n단가: %.1f 원\n전기요금: %.1f 원", elecUsage, defaultPrice, unitPrice,
			elecFee);
	}
}
