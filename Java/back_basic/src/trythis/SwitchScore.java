package trythis;

import java.util.Scanner;

public class SwitchScore {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		System.out.print("점수를 입력하시오 --> ");
		int score = scan.nextInt();

		getGrade(score);

		Scanner scan2 = new Scanner(System.in);
		System.out.print("학점을 입력하시오 --> ");
		String grade = scan2.next();

		getMsg(grade);

	}

	private static void getGrade(int score) {
		switch (score / 10) {
			case 10, 9 -> System.out.println("A");
			case 8 -> System.out.println("B");
			case 7 -> System.out.println("C");
			case 6 -> System.out.println("D");
			default -> System.out.println("F");
		}
	}

	private static void getMsg(String grade) {
		switch (grade) {
			case "A", "B" -> System.out.print("참 잘했음~!");
			case "C", "D" -> System.out.print("좀 더 노력해~~");
			case "F" -> System.out.print("다음 학기에 다시 만나요^.^");
		}
	}
}
