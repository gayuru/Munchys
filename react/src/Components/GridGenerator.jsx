import { chunk } from 'lodash'
import * as React from 'react'
import { Col, Row, Grid } from 'react-flexbox-grid'
import styled from 'styled-components';

const Spacer = styled.div`
  height: ${props => props.height};
`
type GridGeneratorProps = {
  cols: 1 | 2 | 3 | 4 | 6 | 12
}
const GridGenerator: React.FC<GridGeneratorProps> = ({ cols, children }) => {
 
const colWidth = 12 / cols
const rows = chunk(React.Children.toArray(children), cols)
return (
    <Grid>
      {rows.map((cols) => (
        <div>
        <Row>
          {cols.map((col) => (
            <Col sm={12} md={colWidth}>
              {col}
            </Col>
          ))}
        </Row>
        <Spacer height="3vh"/>
        </div>
      ))}
    </Grid>
  )
}
export default GridGenerator