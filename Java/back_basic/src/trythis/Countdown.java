package trythis;

public class Countdown {
	public static void main(String[] args) {
		System.out.println("카운트다운 시작~");
		countdown(10);
	}

	public static void countdown(int seconds) {
		for (int s = seconds; s >= 0; s--) {
			System.out.printf("%d..\n", s);
		}
		System.out.println("발사!!");
	}
}
