package sample;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		tags={},
		monochrome=true,
		dryRun=false,
		
		features={"D:\\CucumberCourse\\CucumberAuto1\\src\\test\\resources\\feature"},
		glue={"StepDefination"},
		
		plugin={"pretty","html:target/cucumber-html",
				"json:target/cucumber-report.json",
				"com.cucumber.listener.ExtentCucumberFormatter:target/ExtentReport.html" }
			)


public class RunMyFirstFeature 

{

	
	
}
