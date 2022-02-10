import {css} from "styled-components";


export const DynamicIconStyles = css`
  color: ${(props: any) => props.color || 'var(--primary-base__contrast);'};
  width: ${(props: any) => props.size || '1em'};
  height: ${(props: any) => props.size || '1em'};
`