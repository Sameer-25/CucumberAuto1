$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("myfeature1.feature");
formatter.feature({
  "line": 2,
  "name": "access facebook",
  "description": "",
  "id": "access-facebook",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.before({
  "duration": 4262640466,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "validate first name field",
  "description": "",
  "id": "access-facebook;validate-first-name-field",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User need to be on facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enter first name",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enter last name",
  "rows": [
    {
      "cells": [
        "lastname1",
        "lastname2"
      ],
      "line": 9
    },
    {
      "cells": [
        "ss",
        "tt"
      ],
      "line": 10
    },
    {
      "cells": [
        "pp",
        "qq"
      ],
      "line": 11
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User check first name is present",
  "keyword": "Then "
});
formatter.match({
  "location": "myFirstStepDef.User_need_to_be_on_facebook_login_page()"
});
formatter.result({
  "duration": 2943363397,
  "status": "passed"
});
formatter.match({
  "location": "myFirstStepDef.User_enter_first_name()"
});
formatter.result({
  "duration": 2769790150,
  "status": "passed"
});
formatter.match({
  "location": "myFirstStepDef.User_enter_last_name(DataTable)"
});
formatter.result({
  "duration": 140617387,
  "status": "passed"
});
formatter.match({
  "location": "myFirstStepDef.User_check_first_name_is_present()"
});
formatter.result({
  "duration": 96996016,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[abc]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat StepDefination.myFirstStepDef.User_check_first_name_is_present(myFirstStepDef.java:44)\r\n\tat ✽.Then User check first name is present(myfeature1.feature:12)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2706903724,
  "status": "passed"
});
formatter.before({
  "duration": 2543939236,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "validate Last name field",
  "description": "",
  "id": "access-facebook;validate-last-name-field",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "User need to be on facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User enter first name",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User enter last name",
  "rows": [
    {
      "cells": [
        "lastname1",
        "lastname2"
      ],
      "line": 18
    },
    {
      "cells": [
        "ss",
        "tt"
      ],
      "line": 19
    },
    {
      "cells": [
        "pp",
        "qq"
      ],
      "line": 20
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User check first name is present",
  "keyword": "Then "
});
formatter.match({
  "location": "myFirstStepDef.User_need_to_be_on_facebook_login_page()"
});
formatter.result({
  "duration": 5501647280,
  "status": "passed"
});
formatter.match({
  "location": "myFirstStepDef.User_enter_first_name()"
});
formatter.result({
  "duration": 189737541,
  "status": "passed"
});
formatter.match({
  "location": "myFirstStepDef.User_enter_last_name(DataTable)"
});
formatter.result({
  "duration": 128872406,
  "status": "passed"
});
formatter.match({
  "location": "myFirstStepDef.User_check_first_name_is_present()"
});
formatter.result({
  "duration": 53357136,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[abc]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat StepDefination.myFirstStepDef.User_check_first_name_is_present(myFirstStepDef.java:44)\r\n\tat ✽.Then User check first name is present(myfeature1.feature:21)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 3356773589,
  "status": "passed"
});
});