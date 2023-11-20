import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Slide = ({ display })=>{
    return(
    <div className="counter grid grid-flow-row grid-cols-1">
        {display.map((img, index) => (
            <TransitionGroup component="span">
                <CSSTransition
                    classNames="ctr"
                    timeout={{ enter: 300, exit: 300 }}
                    key={Math.random()}
                    unmountOnExit
                    >
                    <img
                    className="counter__value"
                    height={300}
                    width={300}
                    src={`/img/${img}`}
                    alt={`img-${index}`}
                    />
                </CSSTransition>
            </TransitionGroup>
        ))}
  </div>
  )
}
export default Slide