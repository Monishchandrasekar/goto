import React, {Component} from 'react'

const blue = {
  base: '#29A0B1',
  highlight: '#167D7F'
}

const teal = {
  base: '#167D7F'
}

const innerRadius = 30

class ChartCenter extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const {origin} = this.props
    const circleStyle = {
      stroke: teal.base,
      strokeWidth: 2,
      fill: 'white'
    }
    return (
      <g>
        <circle
          title="College Admissions"
          cx={origin.x}
          cy={origin.y}
          r={innerRadius}
          style={circleStyle}
        />
        <text
          x="50%"
          y="50%"
          stroke="#51c5cf"
          textAnchor="middle"
          strokeWidth="0.5px"
          dy=".3em"
        >
          College Admissions
        </text>
      </g>
    )
  }
}

export default ChartCenter
