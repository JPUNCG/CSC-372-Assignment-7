/**
 * Name: Jeethesh Pallinti
 * Date: 04.14.2026
 * CSC 372-01
 * * Component to track and display the tally of wins, losses, and ties.
 */

/**
 * @param {Object} props
 * @param {Object} props.score - Object containing wins, losses, and ties.
 */
function ScoreBoard({ score }) {
  return (
    <section id="score-section">
      <h3>Scoreboard</h3>
      <p className="score-item">Wins: {score.wins}</p>
      <p className="score-item">Losses: {score.losses}</p>
      <p className="score-item">Ties: {score.ties}</p>
    </section>
  );
}

export default ScoreBoard;