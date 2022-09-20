# Exercise Name

## Introduction

Nathan has completed his very rst programming test and is now wondering about his score. He received an email containing the nal report about
the task he solved in the test, but it omitted the score.
Nathan never gives up, so he decided to compute his result from the report. He found out that:
his program was tested on several test cases;
every test case has given one of the following results: "OK", "Wrong answer", "Time limit exceeded" or "Runtime error";
test cases were organized into groups numbered by consecutive natural numbers;
his program scored points for a group only when the result of every test case in the group was "OK".
In the report, test cases are named according to the following rule: if the test case is the only test case in the group, its name is [task name] + [group
number]. If there is more than one test in the group, its name is extended by a lowercase English letter which is different for each test case. Example
test case names are: test1, test2a, test2b. In this example, test2a and test2b form one group and test1 forms another.
Nathan's score is the number of groups his program passed multiplied by 100 and divided by the total number of groups. If the result is fractional,
the number of points is rounded to the highest integer not greater than the result. For example, if the program passed two groups out of three, the
result is 2 * 100 / 3 = 66.(6), so Nathan would gain 66 points.
Write a function
function solution(T, R);
that, given the names and results of all the test cases, returns the number of points Nathan scored. T and R are arrays (containing strings) of length
N. T[I] is a string corresponding to the I-th test case name; R[I] is the result of this test case, containing one of four possible values ("OK", "Wrong
answer", "Time limit exceeded" or "Runtime error").
For example, for data:
T[0] = "test1a"
T[1] = "test2"
T[2] = "test1b"
T[3] = "test1c"
T[4] = "test3"
R[0] = "Wrong answer"
R[1] = "OK"
R[2] = "Runtime error"
R[3] = "OK"
R[4] = "Time limit exceeded"
the function should return 33. Nathan's program passed only the second group.
For another set of data:
T[0] = "codility1"
T[1] = "codility3"
T[2] = "codility2"
T[3] = "codility4b"
T[4] = "codility4a"
R[0] = "Wrong answer"
R[1] = "OK"
R[2] = "OK"
R[3] = "Runtime error"
R[4] = "OK"
the function should return 50. Nathan's program passed the second and third groups.
Assume that:
N is an integer within the range [1..300];
arrays T and R have the same length;
every test case appears in table T exactly once;
tests groups are numbered by consecutive natural numbers from 1;
tests cases in groups containing at least two tests are distinguished by a lowercase letter su x in alphabetical order from a;
every element in T is a valid test name;
the task name is identical for every test case, contains only English lowercase letters and is of a length not greater than 30 letters;
each string in array R has one of the following values: "OK", "Wrong answer", "Time limit exceeded", "Runtime error".

## Time Limit

- 120 minutes

## Test inputs

- (["test1a", "test2", "test1b", "test1c", "test3"], ["Wrong answer", "OK", "Runtime error", "OK", "Time limit exceeded"]) => 33
- (["codility1", "codility3", "codility2", "codility4b", "codility4a"], ["Wrong answer", "OK", "OK", "Runtime error", "OK"]) => 50
