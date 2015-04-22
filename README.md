# Bowling Scorecard Challenge

-------------------------------
##Post-completion comments
- The "Bowling_scorecard" repo was converted from Ruby into Javascript after the logic had been finalised, so this repo is the equivalent in JS. I was glad that I coded it in Ruby first otherwise it may have been a step too far!
- The conversion to JS didn't cause any particular headaches and it was a good way to get more practice under my belt.

  [![Code Climate](https://codeclimate.com/github/jjnewman/Bowling_scorecard_JS/badges/gpa.svg)](https://codeclimate.com/github/jjnewman/Bowling_scorecard_JS)

-------------------------------


__Test time__: Friday, the entire day + the week if you need it.
Feel free to use google, your notes, books, etc but work on your own
Task:

### Count and sum the scores of a bowling game of one player (in Javascript).

A bowling game consists of 10 frames in which the player tries to knock down 10 pins. In every frame the player can throw one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

#### Strikes

The player has a strike if she knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the _next two rolls._ That is the next frame, except if the player rolls a strike again.

#### Spares

The player has a spare if she knocks down all 10 pins with the two roles of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first role of next frame).

#### 10th frame

If the player rolls a strike or spare in the 10th frame she can roll the additional balls for the bonus. But she can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus- not for the regular frame count.

10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus)
1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus)
Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

#### Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores to 300 points.
