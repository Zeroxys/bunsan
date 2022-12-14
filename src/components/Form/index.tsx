import React, {useState} from 'react'
import { Select, Tooltip } from "sancho";
import { css } from '@emotion/css'
import { styles } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faCode,
  faGear,
  faCaretDown,
  faInfo,
  faPlus,
  faCaretUp
} from '@fortawesome/free-solid-svg-icons'

const options = [
  {
    type: 'Developer',
    allocation : 1000,
    id:1,
    icon: faCode,
  },
  {
    type: 'QA-Tester',
    allocation : 500,
    id:2,
    icon: faGear
  },
  {
    type: 'Manager',
    allocation : 300,
    id:3,
    icon: faUser
  },
]

export const TreeComponent = () => {
  
  const style = styles()

  return (
    <div className={style.wrapper}>
      <div className={style.dropdown}>
        <FontAwesomeIcon icon={faCaretDown} size="1x" />
      </div>
      <div>
        <div className={style.treeWrapper}>
          <FontAwesomeIcon icon={faUser} size="1x" />
          Manager          
        </div>
      </div>
      <div className={style.options}>
        {/* <Tooltip content="This is some tooltip content" > */}
          <FontAwesomeIcon icon={faInfo} size="1x" />
        {/* </Tooltip> */}
        <FontAwesomeIcon icon={faPlus} size="1x" />
      </div>
    </div>
  )
}
