# App Name: Cocktails

### Background
To create a React App that helps you find cocktail inspirations using the public API https://www.thecocktaildb.com/api.php

### Technologies Used:

- JavaScript
- HTML
- CSS

### Getting Started:

API has a few different type of data it can fetch
- Lookup a random www.thecocktaildb.com/api/json/v1/1/random.php
- List of cocktails by first letter: www.thecocktaildb.com/api/json/v1/1/search.php?f=a
- Search by cocktail name www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita\
- Filters by category
  - www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink
  - www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail

Given these, decided on a app that has the four functionalities
1. Random: display 1 random cocktail
2. Full Directory: list of all cocktails by alphabet
3. Filter Function: filter for cocktail types based on certain parameters (e.g. category/ ingredients / alcoholic)
4. Search Function : search by cocktail name to display 1 cocktail

### Process & Challenges:
- not much documentation available for the API, so had to figure out what was the response and how to get it into the format needed
- creation of navigation bars and route paths were done used react-router
- Cocktail of the Day Page: To fetch and display a random cocktail. created a cocktail component so that it could be used subsequently if needed
- Directory: api had listings based on alphabets. made use of that to pull out the cocktails based on alphabets. useParmas was used to dynamically create the individual pages insted of creating 26 pages.
  - *Pending* currently if there's no cocktail in the alphabet a blank page is returned (e.g. X). need to redirect that or fix.
- Search: search function requires the cocktail ID and can't search with just the cocktail name. Had to use the name to search the id before being able to search out the full details of the cocktail.
- Filter: used the various filter listings to populate the filter parameters.
  - available api has the ability to filter base on one parameter. plan to use that api to pull out the first list of cocktails before using a function to filter for the other cocktail more parameters are selected.
