// import { useState } from 'react'
import './Score.css'
import LogoIcon from '/images/logo.svg'

export function Score({ score }) {

    return (
      <>
        <div className="score">
          <div>
            <img src={LogoIcon} />
          </div>
          <div>
            <div>
              <div>Score: {score}</div>
            </div>
          </div>
        </div>
      </>
    )
  }
  