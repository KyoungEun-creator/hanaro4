package trythis;

import java.util.Scanner;

public class BusLane {
	public static void main(String[] args) {
		System.out.println("1.월~금 2.토 3.공휴일");
		System.out.println("요일을 선택하세요(1~3): ");
		int date = new Scanner(System.in).nextInt();

		if (date == 2 || date == 3) {
			System.out.println("토요일, 공휴일은 단속하지 않아요~");
		} else {
			System.out.println("버스 전용차로 단속 중입니다.");

			System.out.println("1.버스 2.승용차");
			System.out.println("차종을 선택하세요(1,2): ");
			int vehicle = new Scanner(System.in).nextInt();

			if (vehicle == 1) {
				System.out.println("버스 기사님, 안전 운행하세요~!");
			} else {
				System.out.println("버스 전용차로 위반!");
			}
		}

	}
}
