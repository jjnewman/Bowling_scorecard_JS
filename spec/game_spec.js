describe("Game", function(){
  var game;

  beforeEach(function() {
    game = new Game();
  });

  var multiple_rolls = function (pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      game.roll(pins)
    }
  };

  it("can return the score of ten gutter frames", function(){
    multiple_rolls(0,20);
    game.overall_score();
    expect(game.overall_score).toEqual(0);
  });

  it("can return the score of ten non-bonus frames", function(){
    multiple_rolls(1,20);
    game.overall_score();
    expect(game.overall_score).toEqual(20);
  });

  it("can return the score of a single strike frame and 9 non-bonus frames", function(){
    multiple_rolls(1,2);
    game.roll(10);
    multiple_rolls(1,16);
    game.overall_score();
    expect(game.overall_score).toEqual(30);
  });

  it("can return the score if there are consecutive strikes", function() {
    multiple_rolls(10,2);
    multiple_rolls(1,16);
    game.overall_score();
    expect(game.overall_score).toEqual(49);
  });

  it("can return the score of a single spare frame and 9 non-bonus frames", function(){
    multiple_rolls(5,3);
    multiple_rolls(1,17);
    game.overall_score();
    expect(game.overall_score).toEqual(37)
  });

  it ("can return the score of consecutive spare frames", function(){
    multiple_rolls(5,4);
    multiple_rolls(1,16);
    game.overall_score();
    expect(game.overall_score).toEqual(42);
  });

  it ('can return the score if the 10th frame is a strike', function(){
    multiple_rolls(1,18);
    game.roll(10);
    multiple_rolls(1,2);
    game.overall_score();
    expect(game.overall_score).toEqual(30);
  });

  it ('can return the score if the 10th frame is a spare', function(){
    multiple_rolls(1,18);
    multiple_rolls(5,2);
    game.roll(1);
    game.overall_score();
    expect(game.overall_score).toEqual(29);
  });

  it ('can return the score of a perfect game', function(){
    multiple_rolls(10,12);
    game.overall_score();
    expect(game.overall_score).toEqual(300);
  });
});



