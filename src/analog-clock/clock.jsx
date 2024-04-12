import React, { useState } from "react";
import { useEffect, useRef } from "react";
import "./style.css";

const width = 300;

export const Clock = () => {
  const href = useRef();
  const mref = useRef();

  const [time, setTime] = useState({ hour: 0, min: 1, sec: 0 });

  useEffect(() => {
    const hid = setInterval(() => {
      setTime(({ hour, min, sec }) => {
        let [newHour, newMin, newSec] = [hour, min, sec];
        if (newSec == 60) {
          newSec = 0;
          if (min == 60) {
            newMin = 0;
            newHour = newHour + 1;
          } else {
            newMin = newMin + 1;
          }
        } else {
          newSec = newSec + 1;
        }
        return { hour: newHour, min: newMin, sec: newSec };
      });
    }, 1000);
    return () => {
      clearInterval(hid);
    };
  }, []);

  // console.log(time);

  return (
    <div className="container">
      {Array.from({ length: 60 }).map((n, i) => {
        return (
          <div
            key={i}
            style={{
              // background: "red",
              position: "absolute",
              width: `${width}px`,
              height: "20px",
              transform: `rotate(${(360 / 60) * (i + 1)}deg)`,
              textAlign: "left",
              fontSize: "10px",
              // rotate: `${360 / i}deg`,
            }}
          >
            {i}
          </div>
        );
      })}

      <div
        id="sec-h"
        ref={mref}
        className="sec-h absolute hand bg-green"
        style={{
          width: `${width - 10}px`,
          transform: `rotate(${(360 / 60) * time.sec}deg)`,
        }}
      >
        {/* sec */}
      </div>
      <div
        id="min-h"
        ref={mref}
        className="min-h absolute hand bg-green"
        style={{
          width: `${width}px`,
          transform: `rotate(${(360 / 60) * time.min}deg)`,
        }}
      >
        {/* min */}
      </div>
      <div
        id="hour-h"
        ref={href}
        className="hour-h absolute hand bg-red"
        style={{
          width: `${width - 50}px`,
          transform: `rotate(${(360 / 60) * time.hour}deg)`,
        }}
      >
        {/* hour */}
      </div>
    </div>
  );
};
