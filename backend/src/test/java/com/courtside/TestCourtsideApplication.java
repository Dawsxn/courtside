package com.courtside;

import org.springframework.boot.SpringApplication;

public class TestCourtsideApplication {

	public static void main(String[] args) {
		SpringApplication.from(CourtsideApplication::main).with(TestcontainersConfiguration.class).run(args);
	}

}
