import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { StepsContainer, StepsItem } from './styled'
import * as GlobalConst from '../global-const'
import Color from '../colors'
import * as Obj from '../method/object'

const CustomStepBar = (props) => {
  const { maxStep, currentStep, roundCorner, separator, height, activeColor, inactiveColor } = props
  const stepHeight = GlobalConst.getValue().CUSTOM_STEP_BAR_HEIGHT
  const stepRoundCorner = roundCorner !== undefined ? roundCorner : GlobalConst.getValue().CUSTOM_STEP_BAR_ROUND_CORNER
  const stepSeparator = separator !== undefined ? separator : GlobalConst.getValue().CUSTOM_STEP_BAR_SEPARATOR

  const stepWidth = 100 / maxStep
  let renderStep = <View style={{ flexDirection: 'row'}} />

  let activeStyle = {
    height: stepHeight,
    backgroundColor: GlobalConst.getValue().CUSTOM_STEP_BAR_ACTIVE_COLOR,
    width: `${stepWidth}%`,
    borderRightColor: Color.white,
    borderRightWidth: stepSeparator ? 1 : 0,
  }

  const currentStepStyle = {
    borderRightWidth: 0,
    borderTopRightRadius: stepRoundCorner ? stepHeight / 2 : 0,
    borderBottomRightRadius: stepRoundCorner ? stepHeight / 2 : 0,
  }

  let inactiveStyle = {
    height: stepHeight,
    backgroundColor: GlobalConst.getValue().CUSTOM_STEP_BAR_INACTIVE_COLOR,
    width: '100%'
  }

  activeStyle = Obj.appendObject(activeStyle, 'height', height)
  activeStyle = Obj.appendObject(activeStyle, 'backgroundColor', activeColor)
  inactiveStyle = Obj.appendObject(inactiveStyle, 'height', height)
  inactiveStyle = Obj.appendObject(inactiveStyle, 'backgroundColor', inactiveColor)

  for (i = 1; i <= currentStep; i++) {
    let child
    if (i <= currentStep) {
      child = <StepsItem key={i} style={[activeStyle, i === currentStep && currentStepStyle]} />
    }

    renderStep = Obj.appendChildToView(renderStep, child)
  }

  return (
    <View>
      <StepsContainer style={[inactiveStyle, { borderRadius: stepRoundCorner ? stepHeight / 2 : 0, overflow: 'hidden' }]} />
      <StepsContainer style={{ position: 'absolute', width: '100%', borderRadius: stepRoundCorner ? stepHeight / 2 : 0, overflow: 'hidden' }}>
        {renderStep}
      </StepsContainer>
    </View>
  )
}

CustomStepBar.propTypes = {
  maxStep: PropTypes.number.isRequired,
  currentStep: PropTypes.number.isRequired,
  roundCorner: PropTypes.bool,
  separator: PropTypes.bool,
  activeColor: PropTypes.string,
  inactiveColor: PropTypes.string,
}

CustomStepBar.defaultProps = {
  maxStep: 2,
  currentStep: 0,
  roundCorner: true,
  separator: true,
}

export default CustomStepBar