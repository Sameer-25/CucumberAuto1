@Smoke
Feature: access facebook


Scenario: validate first name field
Given User need to be on facebook login page
When User enter first name
When User enter last name
|lastname1|lastname2|
|ss|tt|
|pp|qq|
Then User check first name is present
 
Scenario: validate Last name field
Given User need to be on facebook login page
When User enter first name
When User enter last name
|lastname1|lastname2|
|ss|tt|
|pp|qq|
Then User check first name is present