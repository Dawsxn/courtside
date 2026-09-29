package com.courtside;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.webmvc.test.autoconfigure.AutoConfigureMockMvc;
import org.springframework.context.annotation.Import;
import org.springframework.test.web.servlet.MockMvc;

/** The app starts against a real Postgres, and the public/private split holds. */
@Import(TestcontainersConfiguration.class)
@SpringBootTest
@AutoConfigureMockMvc
class ApiSmokeTests {

	@Autowired
	MockMvc mvc;

	@Test
	void healthIsPublicAndUp() throws Exception {
		mvc.perform(get("/actuator/health"))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$.status").value("UP"));
	}

	@Test
	void openApiSpecIsPublic() throws Exception {
		mvc.perform(get("/api/v1/openapi"))
				.andExpect(status().isOk());
	}

	@Test
	void everythingElseRequiresAuthentication() throws Exception {
		mvc.perform(get("/api/v1/anything"))
				.andExpect(status().isUnauthorized());
	}

}
