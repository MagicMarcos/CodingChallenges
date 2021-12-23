// 1QB , 2 RB , 3 WR , 1 TE , 1 Def/SpecialTeams , 1 Flex(WR/RB/TE) -> stay under 50k cap

function validateLineup(lineup) {
  // lineup length
  if (lineup.length !== 9) return false;

  //checks for proper positions
  const validPositions = validatePositions(lineup);

  // under 50K
  const validSalary = validateSalary(lineup);

  // no more than 4 players / team
  const validTeams = validateTeamCount(lineup);

  // result of validation
  return validatePositions && validSalary && validTeams;
}

function validateTeamCount(lineup) {
  // stores our team counts
  let teamObj = {};
  lineup.forEach(player => {
    if (teamObj[player['Team']]) {
      teamObj[player['Team']]++;
    } else {
      teamObj[player['Team']] = 1;
    }
  });
  // checks if any team counts > 4
  for (let team in teamObj) {
    if (teamObj[team] > 4) {
      return false;
    }
  }
  return true;
}

function validatePositions(currentLineup) {
  // obj containg position obj - counts positions
  let currLineup = {};
  for (let player of currentLineup) {
    if (currLineup[player['Position']]) {
      currLineup[player['Position']] += 1;
    } else {
      currLineup[player['Position']] = 1;
    }
  }
  // checks for valid position req
  if (currLineup['QB'] !== 1) {
    return false;
  } else if (currLineup['RB'] > 3 || currLineup['RB'] < 2) {
    return false;
  } else if (currLineup['WR'] > 4 || currLineup['WR'] < 3) {
    return false;
  } else if (currLineup['TE'] > 2 || currLineup['TE'] < 1) {
    return false;
  } else if (currLineup['DEF'] && currLineup['ST']) {
    return false;
  } else if (currLineup['DEF']) {
    if (currLineup['DEF'] !== 1) return false;
  } else if (currLineup['ST']) {
    if (currLineup['ST'] !== 1) return false;
  }
  return true;
}

function validateSalary(lineup) {
  // Salary cap is 45k
  let cap = lineup.reduce((a, c) => a + Number(c['Salary']), 0);
  return cap === 45000;
}

var lineup = [
  {
    Name: 'Matt Ryan',
    Team: 'ATL',
    Position: 'QB',
    Salary: '5000',
  },
  {
    Name: 'Devonte Freeman',
    Team: 'ATL',
    Position: 'RB',
    Salary: '5000',
  },
  {
    Name: 'Jahvid Best',
    Team: 'DET',
    Position: 'RB',
    Salary: '5000',
  },
  {
    Name: 'Calvin Johnson',
    Team: 'DET',
    Position: 'WR',
    Salary: '5000',
  },
  {
    Name: 'Julio Jones',
    Team: 'ATL',
    Position: 'WR',
    Salary: '5000',
  },
  {
    Name: 'Julian Edelman',
    Team: 'NE',
    Position: 'WR',
    Salary: '5000',
  },
  {
    Name: 'Kyle Rudolph',
    Team: 'MIN',
    Position: 'TE',
    Salary: '5000',
  },
  {
    Name: 'Jordy Nelson',
    Team: 'GB',
    Position: 'WR',
    Salary: '5000',
  },
  {
    Name: 'Cincinatti Bengals',
    Team: 'CIN',
    Position: 'DEF',
    Salary: '5000',
  },
];

console.log(validateLineup(lineup));
