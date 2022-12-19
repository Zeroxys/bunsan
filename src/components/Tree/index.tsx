import React, { useState } from 'react'
import { styles } from './styles';
import { Root } from '../../mocks/data';
import { Node } from '../Node';

export const TreeComponent = () => {
  const style = styles()

  return (
    <div className={style.wrapper}>
      <Node data={Root} />
    </div>
  )
}
