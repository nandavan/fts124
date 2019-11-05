package google2;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

// classe gatilho 
@RunWith(Cucumber.class)
@CucumberOptions(
		dryRun = false, 
		monochrome = true,
		features = { "src/test/resources/features/" },
		glue = { "google2/" },
		plugin = {
					"pretty",
					"html:target/cucumber-extentsreport.html",
					"json:target/cucumber-extentsreport.json",
					"com.cucumber.listener.ExtentCucumberFormatter:target/extentreports/dashboard.html"
				
		}
		
		)
public class Runner {
	
	

}
