import styled from 'styled-components'

const StopwatchStyles = styled.div`
  background: #131419;
  margin: 100px auto;
  padding: 40px 40px;
  border-radius: 10px;
  box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.05),
    5px 5px 15px rgba(0, 0, 0, 0.5);
.header {
  font-family: "Poppins", sans-serif;
  color: #38a8b8;
  font-size: 40px;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 10px;
  margin-bottom: 30px;
}

.display {
  display: flex;
  justify-content: center;
  font-size: 50px;
  font-weight: 400;
  letter-spacing: 6px;
  margin-bottom: 20px;
  background: #131419;
  padding: 20px 20px;
  border-radius: 10px;
  box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.05),
    5px 5px 15px rgba(0, 0, 0, 0.5);
  color: #FFF;
  font-family: 'Roboto Condensed', sans-serif;
  animation: neon-1 .5s ease-in-out infinite alternate;
}
@keyframes neon-1 {
    from {
        text-shadow: 0 0 2px rgba(202, 228, 225, 0.92), 0 0 12px rgba(202, 228, 225, 0.34), 0 0 6px rgba(191, 226, 255, 0.52), 0 0 10px rgba(191, 226, 255, 0.92), 0 0 15px rgba(191, 226, 255, 0.78), 0 0 15px rgba(191, 226, 255, 0.92);
    }
    to {
        text-shadow: 0 0 2px rgba(202, 228, 225, 0.98), 0 0 12px rgba(202, 228, 225, 0.42), 0 0 6px rgba(191, 226, 255, 0.58), 0 0 10px rgba(191, 226, 255, 0.84), 0 0 18px rgba(191, 226, 255, 0.88), 0 0 18px #FFF;
    }
}

.btn-container {
  display: flex;
  justify-content: center;
}

.btn {
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 40px;
  background: #131419;
  color: #38a8b8;
  padding: 10px;
  width: 100px;
  font-size: 18px;
  font-weight: 400;
  margin: 15px auto;
  box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.1),
    2px 2px 6px rgba(0, 0, 0, 0.8);
}

.btn:hover {
  box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.1),
    inset 2px 2px 6px rgba(0, 0, 0, 0.8);
}

.red {
  color: #FF8373;
}

.green {
  color: #63DC90;
}

.yellow {
  color: #FFE573;
}
`

export default StopwatchStyles;