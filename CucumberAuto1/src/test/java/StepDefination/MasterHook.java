
package StepDefination;

import util.DriverFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import util.DriverFactory;

//This is Master Hook file

public class MasterHook extends DriverFactory
{

	@Before
	public void setup()
	{
		
		Driver=GetDriver();
		
	}
	
	
	@After
	public void teardown()
	{
		Driver.close();
		Driver.quit();
		
	}
	
}
