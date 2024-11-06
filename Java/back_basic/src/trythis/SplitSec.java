package trythis;

import java.util.Scanner;

public class SplitSec {
	public static void main(String[] args) {
		System.out.println("시간을 초단위로 입력하세요: ");
		Scanner scan = new Scanner(System.in);
		int sec = scan.nextInt();
		int h = sec / 3600;
		int m = sec % 3600 / 60;
		int s = sec % 60;
		System.out.printf("%d초는 %d시간 %d분 %d초입니다.\n", sec, h, m, s);
	}
}
