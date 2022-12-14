import { css } from '@emotion/css'

export const styles = () => {
  return {
    wrapper : css`
      display:flex;
      justify-content:center;
      align-items:center;
    `,
    dropdown: css`
      margin-left: 5px;
    `,
    treeWrapper : css`
      display:flex;
      flex-direction:column;
      padding:.25rem;
  `,
    options:css`
      display:flex;
      flex-direction:column;
      padding:.35rem;
    `
  }
}
