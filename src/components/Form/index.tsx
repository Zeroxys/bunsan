import React, {useState} from 'react'
import { Select, Tooltip } from "sancho";
import { css } from '@emotion/css'
import { styles } from './styles';
import { Data } from '../../mocks/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faCode,
  faGear,
  faCaretDown,
  faInfo,
  faPlus,
  faRemove,
  faCaretUp,
  faEdit
} from '@fortawesome/free-solid-svg-icons'

const options = [
  {
    type: 'Developer',
    isAdmin:false,
    allocation : 1000,
    id:1,
    icon: faCode,
  },
  {
    type: 'QA-Tester',
    isAdmin:false,
    allocation : 500,
    id:2,
    icon: faGear
  },
  {
    type: 'Manager',
    isAdmin:true,
    items: [],
    allocation : 300,
    id:3,
    icon: faUser
  },
]

const Node = ({ source:{icon, items, isAdmin }}) => {
  const [hideComponent, setHideComponent] = useState(false)
  const style = styles()
  return (
    <div className={style.wrapper}>
        <div className={style.dropdown}>
          <FontAwesomeIcon 
            onClick={() => setHideComponent(!hideComponent)} 
            icon={ hideComponent ? faCaretUp : faCaretDown} 
            size="1x" />
        </div>
        <div>
          <div className={style.treeWrapper}>
            <FontAwesomeIcon icon={icon} size="2x" />
            Manager          
          </div>
        </div>
        <div className={style.options}>
          <FontAwesomeIcon icon={faRemove} size="1x" />
          <FontAwesomeIcon icon={faEdit} size="1x" />
          {isAdmin ? <FontAwesomeIcon icon={faPlus} size="1x" /> : null}
        </div>

        {items.map( item => {
          return (
            <Node source={item}/>
          )
        })}

      </div>
  )
}

export const TreeComponent = () => {

  const style = styles()
  return (
    <div className={style.wrapper}>
      <Node source={Data}/>
    </div>
  )
}
