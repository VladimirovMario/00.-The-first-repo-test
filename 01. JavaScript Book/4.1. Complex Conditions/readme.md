	Point in Figure
	
The figure consists of 6 blocks with size h * h, placed as in the figure below. The lower left angle of the building is on position {0, 0}. The upper right angle of the figure is in position {2*h, 4*h}. The coordinates given in the figure are for h = 2:

![13 Point-in-the-figure-01](https://user-images.githubusercontent.com/103949296/167994320-59aa05d7-d551-406b-b913-f3eca696b06e.png)

Write a program, that enters an integer h and the coordinates of given point {x, y} (integers) and prints whether the points are inside the figure (inside), outside the figure (outside), or on any of the borders of the figure (border).

Sample Input and Output


![Sample Input and Output](https://user-images.githubusercontent.com/103949296/167996168-241ba738-4fcc-4570-a33b-086294a204e8.png)


Hints and Guidelines
A possible logic for solving the task (not the only correct one):

 We might split the figure into two rectangles with a shared side:

![13 Point-in-the-figure-03](https://user-images.githubusercontent.com/103949296/167995017-ac1f3575-e07a-4428-ac66-b8e8ac325f90.png)

A point is outer (outside) for the figure when it is outside both of the rectangles.
A point is inner (inside) for the figure if it is inside one of the rectangles (excluding their borders) or lies on their shared side.
In another case, the point lies on the border of the rectangle (border).
Sample code (parts of the code are blurred to stimulate logical thinking and solving skills):

![13 Point-in-the-figure-02](https://user-images.githubusercontent.com/103949296/167995101-5cec87aa-8368-4dfc-be64-4ce5afbd4ebf.png)
