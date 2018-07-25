package StepDefination;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import util.DriverFactory;

public class myFirstStepDef extends DriverFactory
{


	
@Given("^User need to be on facebook login page$")
	public void User_need_to_be_on_facebook_login_page()
{
	
	//GetDriver().get("https://www.facebook.com/");
	Driver.get("https://www.facebook.com/");
	
}
	
	
	
	
@When("^User enter first name$")
	public void User_enter_first_name()
	{
	Driver.findElement(By.xpath("//input[@name='firstname']")).sendKeys("abc");
	
	}
	
@Then("^User check first name is present$")
	
	public void User_check_first_name_is_present()
	{
	
	String str=Driver.findElement(By.xpath("//input[@name='firstname']")).getText();
	Assert.assertEquals("abc", str );
	
	}

@When("^User enter last name$")

public void User_enter_last_name(DataTable tbl)
	{
		List<List<String>> lstname=tbl.raw();
		Driver.findElement(By.xpath("//input[@name='lastname']")).sendKeys(lstname.get(1).get(1));
	}

}
