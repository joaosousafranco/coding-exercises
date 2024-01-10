# Cards War

## Introduction

Alec and Bob are playing a game called Cards War. Both players have one deck containing N cards each. The hierarchy of card values is as follows:
ace (marked with the symbol A), king (K), queen (Q), jack (J), ten (T) and from nine to two (9−2).
The game is played in turns. In every turn, each player draws one card from the top of their deck. The player who draws the higher card wins the
current turn. If both players draw the same card, nobody wins and they proceed to the next turn. After each turn, the drawn cards are put aside and
not used again in the current game.
Let's consider a single game, where:
Alec's deck consists of (from top to bottom): ace, ve, eight, six, queen, king;
Bob's deck consists of (from top to bottom): jack, jack, six, ve, three, king.
Alec wins the rst, third, fourth and fth turns. Bob wins the second turn. Note that nobody wins the last turn since both players draw the same
card (king).
You have seen both players' decks prepared for the next duel. How many turns will Alec win in the game?
Write a function:
function solution(A, B);
that, given two non-empty strings A, B consisting of N card symbols (representing Alec's and Bob's decks, respectively), returns the number of turns
that Alec will win.
For example, given "A586QK" and "JJ653K", your function should return 4, as explained above.
Given "23A84Q" and "K2Q25J", your function should also return 4, since Alec wins the second, third, fourth and sixth turns.
Assume that:
N is an integer within the range [1..1,000];
strings A and B consist only of the following characters: 2-9, T, J, Q, K and/or A;
strings A and B are of equal length.
In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.

## Time Limit

- 10 minutes

## Test inputs

- ("A586QK", "JJ653K") => 4
- ("23A84Q", "K2Q25J") => 4
