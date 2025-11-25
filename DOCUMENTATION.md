# Lilly Technical Challenge Documentation

## Approach

For this challenge I chose the simplest possible approach, which was just going through each objective on the list one-by-one and only moving onto the next when the previous objective has been completed, treating each objective like a stepping stone. Although the challenge included several objectives, the overall scope remained manageable so I decided that it wasn't necessary to overcomplicate the challenge completion process for myself. 

For completing this challenge I did make essential use of external resources such as tutorials and guides. Having had limited experience using Python and JavaScript before, W3 schools and GeeksForGeeks (GFG) were very useful for looking at syntax of these programming languages. GFG was also very useful for looking up commands for FastAPI and how to use them as I was having an issue with the Uvicorn web server commands outside of the README that looking up commands helped with.

https://www.geeksforgeeks.org/python/python-seek-function/
https://www.w3schools.com/python/default.asp
https://www.geeksforgeeks.org/python/fastapi-uvicorn/

## Problems Faced and innovative solutions
*Use this space to document and discuss any issues you faced while undertaking this challenge and how you solved them. We recommend doing this proactively as you experience and resolve the issues - make sure you don't forget! (Screenshots are helpful, though not required)*.

One of the problems faced during this challenge involved the implementation of the average function in main.py. My initial solution calculated the average by incrementing a running total within the loop while also manually tracking the number of items being counted using a counter. While this approach was straightforward, it lacked any validation which caused the function to return null values to the frontend and I came up with a better idea for the function as a whole as I refreshed my Python skills.

To address this, I refactored the function to be more robust as I felt my original approach was too primitive. Rather than summing up all of the values within the loop, I first validated each entry and appended only the valid values to a dedicated prices array. This enabled me to use Python's built-in sum() function for aggregation, while a total number of valid records was derived using len().

## Evaluation

I felt that this assignment overall was a very good challenge as it made me expand my knowledge of JavaScript and Python which are two languages I haven't had mUch experience with in the past. I believe that overall the backend went better than the front-end as I feel my overall weakness is frontend design. The JavaScript coding went better than expected as it was quite simple to get everything working and a lot of the key parts of all the functions were quite similar to each other that made coding them not too complex.

 If I had more time with this assignment I would definitely spend a bit more time working on the design of the web page so it looks more professional. Currently I feel it looks a little too basic but it does function as it is supposed to in a user friendly way. If given more time, I would also include some more functions for the data such as sorting the list and the ability to remove medicine on the front end.