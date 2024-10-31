package com.hana.greetings;

public class Hi {
	public static void main(String[] args) {
		System.out.println("Hi~! ");
		int i = 0;
		System.out.println("i = " + i);

		playSwitch();
	}

	private static void playSwitch() {
		int score = System.currentTimeMillis() % 2 == 0 ? 81 : 70;
		final String grade = score > 80 ? "A" : "B";
		switch (grade) {
			case "A" -> System.out.println("Excellent");
			case "B" -> System.out.println("Good");
			case "C" -> System.out.println("Not bad");
			default -> System.out.println("default");
		}
	}
}
