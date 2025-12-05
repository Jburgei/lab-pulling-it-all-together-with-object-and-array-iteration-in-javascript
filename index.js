function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

function allPlayers() {
  const game = gameObject();

  //  empty object to hold all players
  const players = {};

  const homePlayers = game.home.players;
  const awayPlayers = game.away.players;

  // home players
  for (const name in homePlayers) {
    players[name] = homePlayers[name];
  }

  // away players
  for (const name in awayPlayers) {
    players[name] = awayPlayers[name];
  }

  return players;
}


//Required functions

//points for a given player
function numPointsScored(playerName) {
    return allPlayers()[playerName].points;
}
//shoe size for a given player
function shoeSize (playerName) {
    return allPlayers()[playerName].shoe;
}
//colors for a given team
function teamColors(teamName) {
    const game = gameObject();
   
    if (game.home.teamName === teamName) {
        return game.home.colors;
    } else if (game.away.teamName === teamName) {
        return game.away.colors;
    }

    //incase team name is wrong 
    return undefined;
}

//array with both team names
function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}

//jersey numbers for all players on a team
function playerNumbers(teamName) {
    const game = gameObject();
    const team = game.home.teamName === teamName ? game.home : game.away;
    const numbers = [];

    const players = team.players;
    for (const name in players) {
        numbers.push(players[name].number);
    }
    return numbers;
}

//full stats object for a player
function playerStats(playerName) {
    const players = allPlayers();
    return players[playerName];
}

//Rebounds for the player with the biggest shoe size

function bigShoeRebounds() {
  const players = allPlayers();   
  let biggestPlayer = null;       

  // go through each player
  for (const name in players) {
    if (
      biggestPlayer === null ||                    
      players[name].shoe > players[biggestPlayer].shoe 
    ) {
      biggestPlayer = name;
    }
  }

  
  return players[biggestPlayer].rebounds;
}


// Bonus functions

//player who scored the most points
function mostPointsScored() {
    const players = allPlayers();
    let topPlayer = null;
    let maxPoints = 0;

    for (const name in players) {
        const pts = players[name].points;
        if (pts > maxPoints) {
            maxPoints = pts;
            topPlayer = name;
        }
    }
    return topPlayer;
}

//team that has the most total points
function winningTeam() {
    const game = gameObject();

    let homeTotal = 0;
    for (const name in game.home.players) {
        homeTotal += game.home.players[name].points;
    }
    let awayTotal = 0;
    for (const name in game.away.players) {
        awayTotal += game.away.players[name].points;
    }
    if (homeTotal > awayTotal) {
        return game.home.teamName;
    } else if (awayTotal > homeTotal) {
        return game.away.teamName;
    } else {
        return "tie";
    }
    }

// player with the longest name
function playerWithLongestName() {
  const players = allPlayers();
  let longestName = "";
  let longestPlayer = null;

  for (const name in players) {
    if (name.length > longestName.length) {
      longestName = name;
      longestPlayer = name;
    }
  }

  return longestPlayer;
}

//super bonus functions

// true if longest-name player also has the most steals
function doesLongNameStealATon() {
  const players = allPlayers();
  const longNamePlayer = playerWithLongestName();

  // find max steals overall
  let maxSteals = 0;
  for (const name in players) {
    if (players[name].steals > maxSteals) {
      maxSteals = players[name].steals;
    }
  }

  // compare steals of longest-name player
  return players[longNamePlayer].steals === maxSteals;
}

// exports for Jest
module.exports = {
  gameObject,
  numPointsScored,
  shoeSize,
  teamColors,
  teamNames,
  playerNumbers,
  playerStats,
  bigShoeRebounds,
  mostPointsScored,
  winningTeam,
  playerWithLongestName,
  doesLongNameStealATon,
};