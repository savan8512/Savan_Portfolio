import React from "react"
import { project } from "../data/dummydata"
import CountUp from "react-countup"
import { Heading } from "../common/Heading"

//yarn or npm add react-countup

export const Counter = () => {
  return (
    <>
      <div className='hero counter'>
        <div className="hhh"><Heading title='out of 100'/></div>
        
        <div className='container grid3 grid4 tt'>
          {project.map((item) => (
            <div className='box' data-aos='zoom-in'>
              <i className="icon1">{item.icon}</i>
              <h1 className='heading'>
                <CountUp enableScrollSpy duration={2} end={item.num} />
              </h1>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
