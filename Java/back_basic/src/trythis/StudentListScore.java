package trythis;

import java.util.Scanner;

public class StudentListScore {
	public static void main(String[] args) {
		System.out.println("학생 수를 입력하세요: ");
		int studentNum = new Scanner(System.in).nextInt();

		int[] scores = new int[studentNum];

		for (int i = 0; i < studentNum; i++) {
			System.out.printf("%d번 학생의 점수를 입력하세요: ", i);
			int score = new Scanner(System.in).nextInt();
			scores[i] = score;
		}

		System.out.printf("%d명의 학생 성적은 다음과 같습니다.\n", studentNum);

		for (int k : scores) {
			System.out.print(k + " ");
		}
		System.out.println();

		for (int i = 0; i < studentNum; i++) {
			System.out.printf("%d번 학생의 등급은 %s입니다.\n", i, level(scores[i]));
		}
	}

	public static String level(int score) {
		return switch (score / 10) {
			case 9, 10 -> "A";
			case 8 -> "B";
			case 7 -> "C";
			default -> "F";
		};
	}
}
