package trythis;

import java.util.Scanner;

public class AccountEx {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		System.out.println("계좌번호, 예금주, 잔액을 입력하세요.");
		int a = scan.nextInt();
		String n = scan.next();
		double amnt = scan.nextDouble();
		// Account Hana = new Account();
		// Hana.setAccountNo(a);
		// Hana.setName(n);
		// Hana.setBalance(amnt);

		// Account Hana = new Account(a, n, amnt);
		Account Hana = new Account();
		Hana.insert(a, n, amnt);
		Hana.display();
		Hana.deposit(3000);
		Hana.withdraw(3000);
		Hana.checkBalance();
		Hana.display();
	}

}

class Account {
	private int accountNo;
	private String name;
	private double balance;

	// public Account(int accountNo, String name, double balance) {
	// 	this.accountNo = accountNo;
	// 	this.name = name;
	// 	this.balance = balance;
	// }

	// public void setName(String name) {
	// 	this.name = name;
	// }
	//
	// public void setBalance(double balance) {
	// 	this.balance = balance;
	// }
	//
	// public void setAccountNo(int accountNo) {
	// 	this.accountNo = accountNo;
	// }

	// 계좌 정보 입력
	void insert(int a, String n, double amnt) {
		System.out.println("---------------");
		System.out.println("계좌 정보 입력이 완료되었습니다.\n");
		this.accountNo = a;
		this.name = n;
		this.balance = amnt;
	}

	;

	// 해당 금액 입금(입금내역 출력 포함) 후 잔액 출력
	void deposit(double amnt) {
		this.balance += amnt;
		System.out.println("---------------");
		System.out.printf("%s님의 잔액은 %.1f원입니다.\n", name, balance);
	}

	;

	// 해당 금액 출금(출금내역 출력 포함) 후 잔액 출력 (잔액이 부족한 경우 잔액 부족 메시지 출력)
	void withdraw(double amnt) {
		System.out.println("---------------");
		if (this.balance >= amnt) {
			this.balance -= amnt;
			System.out.printf("%s님의 잔액은 %.1f원입니다.\n", name, balance);
		} else {
			System.out.println("잔액이 부족하여 출금할 수 없습니다.\n");
		}

		if (this.balance < amnt) {
			System.out.println("잔액이 부족하여 출금할 수 없습니다.\n");
			return;
		}
		this.balance -= amnt;
		System.out.printf("%s님의 잔액은 %.1f원입니다.\n", name, balance);
	}

	;

	// 현 잔액 출력
	void checkBalance() {
		System.out.println("---------------");
		System.out.printf("%s님의 잔액은 %.1f원입니다.\n", name, balance);
	}

	;

	// 계좌 정보 출력
	void display() {
		System.out.println("---------------");
		System.out.printf("계좌번호: %d\n예금주: %s\n잔액: %.1f원\n", accountNo, name, balance);
	}

	;
}
