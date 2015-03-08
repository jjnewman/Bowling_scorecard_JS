var Game = function() {
  this.rolls = [];
};

Game.prototype.roll = function(pins) {
  this.rolls.push(pins);
};

Game.prototype.overall_score = function() {
  this.overall_score = 0; 
  roll_number = 0;

  for (var i = 0; i <=9; i++) {
    if (this.isStrike(roll_number)) {
      this.overall_score += this.strikeScore(roll_number);
      roll_number +=1;
    } 
    else if (this.isSpare(roll_number)) {
      this.overall_score += this.spareScore(roll_number);
      roll_number +=2;
    }
    else {
      this.overall_score += this.regularScore(roll_number);
      roll_number +=2;
    };
  };
  this.overall_score;
};

Game.prototype.isStrike = function (roll_number) {
  return this.rolls[roll_number] == 10;
}

Game.prototype.strikeScore = function (roll_number) {
  return 10 + this.rolls[roll_number + 1] + this.rolls[roll_number + 2]
}

Game.prototype.isSpare = function (roll_number) {
  return this.rolls[roll_number] + this.rolls[roll_number + 1] == 10;
}

Game.prototype.spareScore = function (roll_number) {
  return 10 + this.rolls[roll_number + 2]
}

Game.prototype.regularScore = function (roll_number) {
  return this.rolls[roll_number] + this.rolls[roll_number + 1]
}
