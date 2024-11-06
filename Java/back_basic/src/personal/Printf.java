package personal;

public class Printf {
	public static void main(String[] args) {
		String name = "코난";
		int age = 10;
		double height = 80.5;
		System.out.println("-------------");
		System.out.println("my name is " + name);
		System.out.println("my age is " + age + "years old");
		System.out.println("height is " + height + "cm");
		System.out.println("-------------");
		System.out.printf("my name is %s\nmy age is %d years old\nmy height is %.1fcm\n", name, age, height);
	}
}
