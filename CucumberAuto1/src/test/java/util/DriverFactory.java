package util;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class DriverFactory 
{
	protected static WebDriver Driver=null;
	
	public WebDriver GetDriver()
	{
		System.setProperty("webdriver.chrome.driver","D:\\Cucumber Setup\\chromedriver_win32 (1)\\chromedriver.exe");
		return Driver =new ChromeDriver();
	}
	
}
