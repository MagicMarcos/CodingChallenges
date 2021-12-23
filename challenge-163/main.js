//replit.com/join/kcmatscgbi-magicmarcos
'use strict';
// I split each rule check into individual functions that return true or false
// additionally because certain objects were utilized multiple times, I created separate functions to increase readibility
// the current line-up is invalid as it fails to pass rule 5 - teams that are not in our constest are present in the lineup

function validateLineup(contest, players, lineup) {
  // if any of these function return false then lineup is invalid
  return (
    validatePlayerCount(contest, players, lineup) &&
    validateUniquePlayers(players, lineup) &&
    validateSalaryCap(contest, players, lineup) &&
    validateMaxPlayersPerTeam(players, lineup) &&
    validateContestTeams(contest) &&
    validateGameCount(players, lineup)
  );
}

// generates object that relates a playes id to all their information
const playersObject = players => {
  let playersObj = {};

  for (let player of players) {
    playersObj[player.playerId] = player;
  }

  return playersObj;
};

// generates object that tallies total team appearances based on id
const teamsObject = (players, lineup) => {
  let playersObj = playersObject(players);

  let teamObj = {};
  for (let player of lineup) {
    let teamId = playersObj[player.playerId].teamId;
    if (teamObj[teamId]) {
      teamObj[teamId]++;
    } else {
      teamObj[teamId] = 1;
    }
  }

  return teamObj;
};

// validates size of lineup vs required lineup size
function validatePlayerCount(contest, players, lineup) {
  let playersObj = playersObject(players);
  let playerCount = 0;

  for (let position of contest.rosterPositions) {
    playerCount += position.count;
  }

  return playerCount === lineup.length;
}

// validates whether all players are unique
function validateUniquePlayers(players, lineup) {
  let uniquePlayers = new Set();

  for (let player of lineup) {
    uniquePlayers.add(player.playerId);
  }

  return lineup.length === uniquePlayers.size;
}

// validates whether lineups total salary  <=  salary cap
function validateSalaryCap(contest, players, lineup) {
  let salaryCap = contest.salaryCap;

  let playersObj = playersObject(players);
  // salary check
  let lineupSalary = 0;
  for (let player of lineup) {
    lineupSalary += playersObj[player.playerId].salary;
  }
  return salaryCap >= lineupSalary;
}

// validates whether lineup does not exceed max num of players per team
function validateMaxPlayersPerTeam(players, lineup) {
  let teamObj = teamsObject(players, lineup);

  for (let team in teamObj) {
    if (teamObj[team] > 3) {
      return false;
    }
  }
  return true;
}

// validates whether all teams in lineup are available to be bet on
function validateContestTeams(contest) {
  let teamObj = teamsObject(players, lineup);

  let validTeams = [];
  for (let team of contest.games) {
    validTeams.push(team.awayTeamId);
    validTeams.push(team.homeTeamId);
  }

  let lineupTeamIds = Object.keys(teamObj);

  return lineupTeamIds.length <= validTeams.length;
}

// validates whether bet is being placed on at least 2 games
function validateGameCount(players, lineup) {
  let teamObj = teamsObject(players, lineup);

  let lineupTeamIds = Object.keys(teamObj);

  return lineupTeamIds.length >= 2;
}

// Variables
var lineup = [
  {
    playerId: 11,
    rosterPosition: 'QB',
  },

  {
    playerId: 2,
    rosterPosition: 'RB',
  },
  {
    playerId: 5,
    rosterPosition: 'RB',
  },
  {
    playerId: 1,
    rosterPosition: 'WR',
  },
  {
    playerId: 9,
    rosterPosition: 'WR',
  },
  {
    playerId: 10,
    rosterPosition: 'WR',
  },
  {
    playerId: 3,
    rosterPosition: 'FLEX',
  },
  {
    playerId: 7,
    rosterPosition: 'TE',
  },
  {
    playerId: 6,
    rosterPosition: 'FLEX',
  },
];

var contest = {
  name: 'Example Contest',
  salaryCap: 50000,
  rosterPositions: [
    {
      name: 'QB',
      count: 1,
    },
    {
      name: 'RB',
      count: 2,
    },
    {
      name: 'WR',
      count: 3,
    },
    {
      name: 'TE',
      count: 1,
    },
    {
      name: 'FLEX',
      count: 1,
    },
    {
      name: 'DST',
      count: 1,
    },
  ],
  games: [
    {
      gameId: 1,
      awayTeam: 'NE',
      awayTeamId: 2,
      homeTeam: 'PIT',
      homeTeamId: 4,
      gameTime: '1477449000000',
    },
    {
      gameId: 2,
      awayTeam: 'GB',
      awayTeamId: 5,
      homeTeam: 'SEA',
      homeTeamId: 6,
      gameTime: '1477447200000',
    },
  ],
};

var players = [
  {
    firstName: 'Cam',
    lastName: 'Newton',
    playerId: 11,
    salary: 7000,
    teamId: 5,
  },
  {
    firstName: 'Legarrette',
    lastName: 'Blount',
    playerId: 2,
    salary: 3700,
    teamId: 2,
  },
  {
    firstName: 'Denard',
    lastName: 'Robinson',
    playerId: 1,
    salary: 3100,
    teamId: 3,
  },
  {
    firstName: 'Antonio',
    lastName: 'Brown',
    playerId: 3,
    salary: 7200,
    teamId: 5,
  },
  {
    firstName: 'Jordi',
    lastName: 'Nelson',
    playerId: 9,
    salary: 6600,
    teamId: 5,
  },
  {
    firstName: 'Jermaine',
    lastName: 'Kearse',
    playerId: 10,
    salary: 3500,
    teamId: 6,
  },
  {
    firstName: 'Julian',
    lastName: 'Edelman',
    playerId: 6,
    salary: 4900,
    teamId: 2,
  },
  {
    firstName: 'Sony',
    lastName: 'Michel',
    playerId: 5,
    salary: 3400,
    teamId: 2,
  },
  {
    firstName: 'Larry',
    lastName: 'Donnell',
    playerId: 8,
    salary: 2900,
    teamId: 7,
  },
  {
    firstName: 'Charles',
    lastName: 'Clay',
    playerId: 7,
    salary: 3400,
    teamId: 8,
  },
  {
    firstName: 'Patriots',
    lastName: '',
    playerId: 4,
    salary: 2700,
    teamId: 2,
  },
  {
    firstName: 'Tom',
    lastName: 'Brady',
    playerId: 12,
    salary: 41000,
    teamId: 2,
  },
];

console.log('lineup', validateLineup(contest, players, lineup));
