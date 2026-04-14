/**
 * Name: Jeethesh Pallinti
 * Date: 04.14.2026
 * CSC 372-01
 * * A simple button component to reset the game state.
 */

/**
 * @param {Object} props
 * @param {function} props.onReset - Function to clear the game.
 */
function ResetButton({ onReset }) {
  return (
    <button id="reset-btn" onClick={onReset}>
      Reset Game
    </button>
  );
}

export default ResetButton;