package personal;

import java.util.Scanner;

public class PrintScanner {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		System.out.println("Enter your name: ");
		String name = scan.next();
		System.out.println("Enter your address: ");
		String address = scan.next();
		System.out.println("Enter your age: ");
		int age = scan.nextInt();
		System.out.println("Enter your height: ");
		double height = scan.nextDouble();

		System.out.printf("name: %s\naddress: %s\nage: %d\nheight: %.1f\n", name, address, age, height);
	}
}
