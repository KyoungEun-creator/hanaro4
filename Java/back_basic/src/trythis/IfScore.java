package trythis;

import java.util.Scanner;

public class IfScore {
	public static void main(String[] args) {
		System.out.println("점수를 입력하시오: ");
		int score = new Scanner(System.in).nextInt();
		if (score >= 80)
			System.out.println("축하합니다! 합격입니다.");
	}
}
