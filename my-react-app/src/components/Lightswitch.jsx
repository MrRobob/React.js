import { useState } from 'react';

export default function LightSwitch() {
    const [on, setOn] = useState(false);
  
    const turn_on = () => {
      setOn(true);
    };
  
    const turn_off = () => {
      setOn(false);
    }
  
    return (
      <div className="actions">
        <button className="button" onClick={turn_on}>On</button>
        <button className="button" onClick={turn_off}>Off</button>
        <p>{on ? '🌞' : '🌚'}</p>
      </div>
    );
  }