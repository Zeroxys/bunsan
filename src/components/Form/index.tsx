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
    type: '',
    isAdmin:false,
    allocation : 1000,
    items: [],
    id:1,
    icon: faCode,
  },
  {
    type: 'Developer',
    isAdmin:false,
    allocation : 1000,
    items: [],
    id:1,
    icon: faCode,
  },
  {
    type: 'QA-Tester',
    isAdmin:false,
    allocation : 500,
    items: [],
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

const Node = ({ setSource, dataSource : {icon, items, isAdmin, type } }) => {
  const [hideComponent, setHideComponent] = useState(false)
  const [showSelect, setShowSelect] = useState(false)
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
            <p>{type}</p>      
          </div>
        </div>
        <div className={style.options}>
          <FontAwesomeIcon icon={faRemove} size="1x" />
          <FontAwesomeIcon 
            onClick={() => setShowSelect(true)} 
            icon={faEdit} size="1x" />
          {isAdmin ? <FontAwesomeIcon icon={faPlus} size="1x" /> : null}
        </div>

        {showSelect ? <div>
            <Select 
              defaultChecked={false}
              onChange={({target: { value }}) => {
              setShowSelect(false)
              const option = options.find(option => option.type === value)
              setSource(option)
            }}>
              {options.map((options) => <option>{options.type}</option>)}
            </Select>
        </div> : null}

        {items.map( item => {
          return (
            <Node source={item}/>
          )
        })}

      </div>
  )
}

export const TreeComponent = () => {

  const [source, setSource] = useState(Data)
  const style = styles()
  return (
    <div className={style.wrapper}>
      <Node dataSource={source} setSource={setSource}/>
    </div>
  )
}
