/**
 * Name: Jeethesh Pallinti
 * Date: 04.14.2026
 * CSC 372-01
 * * Component to display whether the user won, lost, or tied.
 */

/**
 * @param {Object} props
 * @param {string} props.outcome - The result ('win', 'lose', 'tie', or '').
 */
function ResultDisplay({ outcome }) {
  if (!outcome) return <div id="result-empty"></div>;

  return (
    <section id="result-section">
      <h3 className="result-text">Result: {outcome.toUpperCase()}!</h3>
    </section>
  );
}

export default ResultDisplay;