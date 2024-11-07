package trythis;

public class TriangleArea {
	public static void main(String[] args) {
		int width = 2;
		int height = 3;

		while (true) {
			double area = (width * height) / 2.0;

			if (area > 150) {
				break;
			}
			System.out.printf("삼각형의 넓이: %.1f\n", area);
			width += 2;
			height += 3;
		}
	}
}
