-- Join players with seasons_stats
SELECT players.id,
  players.player,
  players.height,
  players.weight,
  players.college,
  players.born,
  seasons_stats.position,
  seasons_stats.tm
FROM players
INNER JOIN seasons_stats ON
players.id = seasons_stats.player_id;


-- Join seasons_stats with players
SELECT seasons_stats.player_id,
  players.college,
  seasons_stats.year,
  seasons_stats.position,
  seasons_stats.Two_Point_Percentage,
  seasons_stats.FG_Percentage,
  seasons_stats.FT_Percentage,
  seasons_stats.TS_Percentage
FROM seasons_stats
INNER JOIN players ON
players.id = seasons_stats.player_id;
