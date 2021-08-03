import React from 'react';


function Btn(props) {
  return (
      <div>
        {(props.status === 0)
            ? <button
                className='BtnStart'
                onClick={props.start}
            >Start</button>
            : null
        }
        {(props.status === 1)
            ? <div>
                <button
                    className='BtnStop'
                    onClick={props.stop}
                >Stop</button>
                <button
                    className='BtnReset'
                    onClick={props.reset}
                >Reset</button>
            </div>
            : null
        }
        {(props.status === 2)
            ? <div>
              <button
                  className='BtnContinue'
                  onClick={props.BtnContinue}
              >Continue</button>
              <button
                  className='BtnReset'
                  onClick={props.reset}
              >Reset</button>
            </div>
            : null
        }

      </div>
  );
}

export default Btn;