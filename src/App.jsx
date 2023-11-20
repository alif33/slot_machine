import React, { useState, createRef } from 'react';

const Slots = () => {
  const fruits = ["🍒", "🍉", "🍊", "🍓", "🍇", "🥝"];
  const [state, setState] = useState({
    fruit1: "🍒",
    fruit2: "🍒",
    fruit3: "🍒",
    rolling: false,
  });

  // Refs for each slot
  const slotRefs = [createRef(), createRef(), createRef()];

  const roll = () => {
    setState((prevState) => ({ ...prevState, rolling: true }));

    setTimeout(() => {
      setState((prevState) => ({ ...prevState, rolling: false }));
    }, 700);

    slotRefs.forEach((slot, i) => {
      const selected = triggerSlotRotation(slot.current);
      setState((prevState) => ({ ...prevState, [`fruit${i + 1}`]: selected }));
    });
  };

  const triggerSlotRotation = (ref) => {
    function setTop(top) {
      ref.style.top = `${top}px`;
    }

    let options = ref.children;
    let randomOption = Math.floor(Math.random() * fruits.length);
    let chosenOption = options[randomOption];
    setTop(-chosenOption.offsetTop + 2);
    return fruits[randomOption];
  };

  return (
    <div className="SlotMachine">
      {slotRefs.map((slotRef, index) => (
        <div key={index} className="slot">
          <section>
            <div className="container" ref={slotRef}>
              {fruits.map((fruit, i) => (
                <div key={i}>
                  <span>{fruit}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      ))}
      <div
        className={!state.rolling ? "roll rolling" : "roll"}
        onClick={!state.rolling && roll}
        disabled={state.rolling}
      >
        { state.rolling ? "Rolling..." : "ROLL" }
      </div>
    </div>
  );
};

export default Slots;
