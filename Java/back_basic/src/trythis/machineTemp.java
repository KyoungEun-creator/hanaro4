package trythis;

import java.util.Scanner;

public class machineTemp {
	public static void main(String[] args) {
		System.out.println("기계의 온도를 입력하세요: ");
		double machineTemp = new Scanner(System.in).nextDouble();
		if (machineTemp >= 40) {
			System.out.println("팬(Fan) 가동");
		} else {
			System.out.println("팬(Fan) 중지");
		}
	}
}
