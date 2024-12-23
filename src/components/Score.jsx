import './Score.css'
import LogoIcon from '/images/logo.svg'

export function Score({ score }) {

    return (
      <>
        <div className="score">
          <div className='score-logo'>
            <img src={LogoIcon} />
          </div>
          <div className='score-label'>
            <span>Score: You {score.userScore} - {score.computerScore} Computer</span>
          </div>
        </div>
      </>
    )
  }
  