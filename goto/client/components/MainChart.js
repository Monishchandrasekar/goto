import React from 'react'
import {
  VictoryChart,
  VictoryLabel,
  VictoryGroup,
  VictoryPolarAxis,
  VictoryArea,
  VictoryTheme
} from 'victory'
import ChartCenter from './ChartCenter'
import CenterLabel from './CenterLabel'

class MainChart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.processData(this.props.data),
      maxima: this.getMaxima(this.props.data)
    }
  }

  getMaxima(data) {
    const groupedData = Object.keys(data[0]).reduce((memo, key) => {
      memo[key] = data.map(d => d[key])
      return memo
    }, {})
    return Object.keys(groupedData).reduce((memo, key) => {
      memo[key] = Math.max(...groupedData[key])
      return memo
    }, {})
  }

  processData(data) {
    const maxByGroup = this.getMaxima(data)
    const makeDataArray = d => {
      return Object.keys(d).map(key => {
        return {x: key, y: d[key] / maxByGroup[key]}
      })
    }
    return data.map(datum => makeDataArray(datum))
  }

  render() {
    let characterData = this.props.data
    return (
      <VictoryChart
        polar
        theme={VictoryTheme.material}
        domain={{y: [0, 1]}}
        innerRadius={10}
        events={[
          {
            childName: 'all',
            target: 'data',
            eventHandlers: {
              onMouseOver: () => {
                return [
                  {target: 'labels', mutation: () => ({active: true})},
                  {target: 'data', mutation: () => ({active: true})}
                ]
              },
              onMouseOut: () => {
                return [
                  {target: 'labels', mutation: () => ({active: false})},
                  {target: 'data', mutation: () => ({active: false})}
                ]
              }
            }
          }
        ]}
      >
        <VictoryGroup
          colorScale={['#B6E2D3', 'orange', 'tomato']}
          style={{data: {fillOpacity: 0.2, strokeWidth: 2}}}
          labelComponent={
            <CenterLabel color={{base: 'gold', highlight: 'darkOrange'}} />
          }
        >
          {this.state.data.map((data, i) => {
            return <VictoryArea key={i} data={data} />
          })}
        </VictoryGroup>
        {Object.keys(this.state.maxima).map((key, i) => {
          return (
            <VictoryPolarAxis
              key={i}
              dependentAxis
              style={{
                axisLabel: {padding: 20},
                axis: {stroke: 'none'},
                grid: {stroke: 'grey', strokeWidth: 0.25, opacity: 0.5}
              }}
              tickLabelComponent={<VictoryLabel labelPlacement="vertical" />}
              labelPlacement="parallel"
              axisValue={i + 1}
              label={key}
              tickFormat={() => ''}
              tickValues={[0, 0.25, 0.5, 0.75]}
            />
          )
        })}
        <VictoryPolarAxis
          labelPlacement="parallel"
          tickFormat={() => ''}
          style={{
            axis: {stroke: 'none'},
            grid: {stroke: 'grey', opacity: 0.5}
          }}
        />
        <ChartCenter />
      </VictoryChart>
    )
  }
}

export default MainChart
