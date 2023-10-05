import java.util.*;

public class OnlineExamSystem {
	private String username;
	private String password;
	private boolean isLoggedIn;
	private int timeRemaining;
	private int questionCount;
	private int[] userAnswers;
	private int[] correctAnswers;

	public OnlineExamSystem(String username, String password) {
		this.username = username;
		this.password = password;
		System.out.println("Sucessfully You are registered!  :)");
		this.isLoggedIn = false;
		this.timeRemaining = 10; // in minutes
		this.questionCount = 10;
		this.userAnswers = new int[questionCount];
		this.correctAnswers = new int[questionCount];
		// initialize correct answers with random values (0 or 1)
		for (int i = 0; i < questionCount; i++) {
			correctAnswers[i] = (int) Math.round(Math.random());
		}
	}

	public void login() {
		System.out.println("Log in to give the Exam ");
		Scanner sc = new Scanner(System.in);
		System.out.print("Username: ");
		String inputUsername = sc.nextLine();
		System.out.print("Password: ");
		String inputPassword = sc.nextLine();
		if (inputUsername.equals(username) && inputPassword.equals(password)) {
			isLoggedIn = true;
			System.out.println("Login successful Best of Luck Dear");
		} else {
			System.out.println("Login failed. Please try again.");
		}
	}

	public void logout() {
		isLoggedIn = false;
		System.out.println("Logout successful.");
	}

	public void startExam() {
		if (!isLoggedIn) {
			System.out.println("Please login first.");
			return;
		}
		Scanner scanner = new Scanner(System.in);
		System.out.println("You have " + timeRemaining + " minutes to complete the exam.");
		for (int i = 0; i < questionCount; i++) {
			System.out.println("Question " + (i + 1) + ":");
			System.out.println("1. Option 1");
			System.out.println("2. Option 2");
			System.out.print("Your answer (1 or 2): ");
			int answer = scanner.nextInt();
			userAnswers[i] = answer;
		}

		System.out.println("Would you like to submit? \n1:Yes \n2:NO ");
		int n = scanner.nextInt();
		if (n == 1) {
			submitExam();
		} else {
			// auto-submit exam when time is up
			try {
				Thread.sleep(timeRemaining * 10 * 1000);
			} catch (InterruptedException e) {
				e.printStackTrace();
				submitExam();
			}

		}

	}

	public void submitExam() {
		if (!isLoggedIn) {
			System.out.println("Please login first.");
			return;
		}
		int score = 0;
		for (int i = 0; i < questionCount; i++) {
			if (userAnswers[i] == correctAnswers[i]) {
				score++;
			}
		}
		System.out.println("Your score is " + score + " out of " + questionCount + ".");
		System.out.println("Best of luck :)");
		logout();
	}

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter your username and password");
		String uName = sc.nextLine();
		String pWord = sc.nextLine();
		OnlineExamSystem examSystem = new OnlineExamSystem(uName, pWord);
		examSystem.login();
		examSystem.startExam();
	}
}
