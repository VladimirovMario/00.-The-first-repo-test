 # Problem: Odd / Even Position
 
 Write a program that reads n numbers and calculates the sum, the min and the max value of the numbers on even, and odd positions (counting from 1).
 If no min / max element exists, print "No".

 ### Sample Input and Output

 ![GitHub Light](https://user-images.githubusercontent.com/103949296/169476100-1a05a654-7ea1-4b38-b2f9-85c66bc6414e.png#gh-light-mode-only)
 ![GitHub Dark](https://user-images.githubusercontent.com/103949296/169476177-cb54324d-45bc-416c-936c-bdbd28b9a7aa.png#gh-dark-mode-only)
 
 ### Hints and Guidelines
 
 The problem combines some of the previous problems: finding the min, the max value, and the sum, as well as processing the elements on even and odd positions.
 Check them out. In this problem, it's better to work with fractions (not integers). The sum, the minimum, and the maximum value are also fractions.
 We must use a neutral start value upon finding the minimum / maximum, for example 1000000.0 and -1000000.0. If the final result is the neutral value, print "No".
