# Problem: Diamond
Write a program that takes an integer n (1 ≤ n ≤ 100) and prints a diamond with size n, as in the following examples:

![GitHub Light](https://user-images.githubusercontent.com/103949296/170815879-5e555852-473a-46da-bb06-acd73e128564.png#gh-light-mode-only)
![GitHub Dark](https://user-images.githubusercontent.com/103949296/170815912-f9a3ff4a-c89d-43a8-b7e9-974ad9a2a3d4.png#gh-dark-mode-only)

## Hints and Guidelines

What we know from the problem explanation is that the diamond is with size n x n.

From the example input and output we can conclude that all rows contain exactly n symbols, and all the rows, except for the top and bottom ones, have 2 stars. We can mentally divide the diamond into 2 parts:

- **Upper** part. It starts from the upper tip down to the middle.
- **Lower** part. It starts from the row below the middle one and goes down to the lower tip (inclusive).

### Upper Part

- If n is an odd number, it starts with 1 star.
- If n is an even number, it starts with 2 stars.
- With each row down, the stars get further away from each other.
- The space between, before, and after the stars is filled up with dashes.

### Lower Part

- With each row down, the stars get closer to each other. This means that space (the dashes) between them is getting smaller and space (the dashes) on the left and the right is getting larger.
- The bottom-most part has 1 or 2 stars, depending on whether n is an even or odd number.

### Upper and Lower Parts of the Diamond

- On each row, except the middle one, the stars are surrounded by inner and outer dashes.
- On each row, there is space between the two stars, except on the first and the last row (sometimes the star is 1).

As an entering parameter n of our function we give it a Number value:


![10 Diamond-01](https://user-images.githubusercontent.com/103949296/170816161-5d9faadb-9dbd-42a2-af25-8cbdda60f0b0.png)

We start drawing the upper part of the diamond. The first thing we need to do is to calculate the number of the outer dashes leftRight (the dashes on the outer side of the stars). It is equal to (n - 1) / 2, rounded down. To round the number we will use the method Math.floor(...) to remove the residue. We can have this case if our input is odd.

![10 Diamond-02](https://user-images.githubusercontent.com/103949296/170816201-d510b0e4-aea0-4d26-8330-374525284c0b.png)

After we have calculated leftRight, we start drawing the upper part of the diamond. We can start by running a loop from 0 to n / 2 + 1 (rounded down). At each iteration of the loop the following steps must be taken:

- We draw on the console the left dashes (with length leftRight) and right after them the first star:

![10 Diamond-03](https://user-images.githubusercontent.com/103949296/170816256-b8033954-9479-47d9-980a-1d53530a2c8a.png)

- We will calculate the distance between the two stars. We can do this by subtracting from n the number of the outer dashes, and the number 2 (the number of the stars, i.e. the diamond's outline). We need to store the result of the subtraction in a variable mid.

![10 Diamond-04](https://user-images.githubusercontent.com/103949296/170816276-8cb0f1eb-239d-47a0-a6e9-2c93cd614ddf.png)

- If the mid is lower than 0, we know that on the row there should be only 1 star. If it is higher or equal to 0 then we have to print dashes with length mid and one star after them.

- We draw on the console the right outer dashes with length leftRight:

![10 Diamond-05](https://user-images.githubusercontent.com/103949296/170816302-5d3a5436-a97c-40f3-9f2a-467292ef9391.png)

- At the end of the loop, we decrease leftRight by 1 (the stars are moving away from each other).
We are ready with the upper part.

Printing the lower part is very similar to that of the upper part. The difference is that instead of decreasing leftRight with 1 at the end of the loop, we will increase leftRight with 1 at the beginning of the loop. Also, the loop will be from 0 to 
  (n - 1) / 2.



