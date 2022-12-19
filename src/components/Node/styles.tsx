import { css } from '@emotion/css'

export const styles = (root) => {
  return {
    nodeWrapper : css`
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
    `,
    nodeContent : css`
      width:100px;
      border-left:${root ? '0px' : '1px'} solid black;  
      display:flex;
      justify-content:center;
      align-items:center;
      position:relative;
      `,
    dropdown: css`
      margin-left: 10px;
    `,
    treeWrapper : css`
      display:flex;
      flex-direction:column;
      padding:.25rem;
  `,
    options:css`
      display:flex;
      flex-direction:column;
      justify-content: space-around;
      padding: .35rem;
      height: 2.875rem;
    `,
    selectWidth:css`
      left:0;
    `,
    addContainer : css`
    width:100px;
    position:absolute;
    right:-100%;
  `,
    hideContainer : css`
      display:flex;
      flex-direction: column; 
      width: 100px;
      marginLeft: 40px;
    `
  }
}
