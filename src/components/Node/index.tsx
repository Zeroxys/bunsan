import React, { useState } from 'react'
import { Select } from "sancho";
import { styles } from './styles';
import { Options } from '../../mocks/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlus,
  faRemove
} from '@fortawesome/free-solid-svg-icons'

export const Node = ({ data }) => {
  const [source, setSource] = useState(data)
  const [total, setTotal] = useState(data.allocation)
  const [showAdd, setShowAdd] = useState(false)

  const {icon, type } = source
  const style = styles(type === 'Root')

  const removeChild = () => {
    setSource((prevState) => {
      console.log('prev',prevState)
      return {}
    })
  }

  const addNewChild = ({
    target: { value }
  }) => {
    const optionToAppend = Options.find(option => option.type === value)
    const newSource = {
      ...source,
      children :  [...source.children , {...optionToAppend}]
    }

    setTotal(data.allocation + optionToAppend?.allocation)
    setSource(newSource)
    setShowAdd(!showAdd)
  }

  return (
    <div className={style.nodeWrapper}>
      <div className={style.nodeContent}>
        <div>
          <div className={style.treeWrapper}>
            <FontAwesomeIcon icon={icon} size="2x" />
            <p>{type}</p>      
          </div>
        </div>
        <div className={style.options}>
          {type === 'Manager' || type === 'Root' ? 
            null
            : <FontAwesomeIcon 
            onClick={removeChild} 
            icon={faRemove} size="1x" /> 
          }
          
          {type === 'Manager' || type === 'Root' ? 
            <FontAwesomeIcon 
              onClick={() => setShowAdd(!showAdd)}
              icon={faPlus} 
              size="1x" /> : null}
        </div>

        <div className={style.addContainer}>
          {showAdd ? <div className={style.selectWidth}>
              <Select 
                defaultChecked={false}
                onChange={(e) => addNewChild(e)}>
                {Options.map((options, key) => <option key={key}>{options.type}</option>)}
              </Select>
          </div> : null}
        </div>

      </div>

      <div className={style.hideContainer}>
        {source.children ? source.children.map( item => {
          item.id = Math.floor(Math.random() * Date.now())
          return (<div key={item.id} style={{display:'flex', flexDirection:'row', marginLeft:30}}>
              <Node data={item}/>
            </div>)
        }) : null}
      </div>

      {type === 'Root' ? <p>{`monthly expense allocation : ${total}`}</p> : null}
    </div>
  )
}
