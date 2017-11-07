import React from 'react';

export default class Submit extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      checked: false,
      hasClicked: false
    }
  }

  checkingButton = () => {
    this.isChecked = true
    this.setState({
      checked: true,
      hasClicked: true
    })
    setTimeout(() => this.setState({
      checked: false,
    }), 2000)
  }

  render () {
    return (
      <div className='submit'>
        <input type='email' />
        <button onClick={this.checkingButton}>
          {this.state.checked ?
            <div className='checkbox' />
           :
            <span className={`submit-text ${this.state.hasClicked ? 'submit-text-checked' : ''}`}>
      	 	   Submit
            </span>
          }
        </button>
        <style jsx>{`
          .submit {
    		    display: flex;
    		    height: 55px;
    		    width: 588px;
          }
          .submit input {
    		    border: none;
    		    border-radius: 10rem 0 0 10rem;
    		    height: 100%;
    		    width: 75%;
    	    }
          .submit input:focus {
            border: none;
          }
    	    .submit button {
    		    background-color: var(--dark-accent);
    		    border: none;
    		    border-radius: 0 10rem 10rem 0;
  			    color: var(--white);
            display: flex;
            justify-content: center;
    		    height: 100%;
    		    width: 25%;
    	    }
          .submit-text-checked {
            -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
            -moz-animation: fadein 2s; /* Firefox < 16 */
            -ms-animation: fadein 2s; /* Internet Explorer */
            -o-animation: fadein 2s; /* Opera < 12.1 */
            animation: fadein 0.5s;
          }

          @keyframes fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
          }
          .submit button .checkbox {
            background-image: url('/static/assets/checked.svg');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            width: 40px;
            height: 40px;
          }
          @media (max-width: 1024px) {
            .submit {
              max-width: 100%;
              height: 34px;
            }
            .submit-text {
            font-size: 1.6rem;
            }
          }
  	`}</style>
    </div>
    )}
	}
