import React from 'react'

import PlaySwitch from '../controls/PlaySwitch'
import ToggleSwitch from '../controls/ToggleSwitch'
import Slider from '../controls/Slider'
import Knob from '../controls/Knob'
import ButtonSet from '../controls/ButtonSet'

export default class Distortion extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const set = ['none', '2x', '4x']

    const {
      name,
      effect,
      wet,
      on,
      toggleEffect,
      changeEffectWetValue,
      changeEffectValue
    } = this.props

    return (
      <div className="Effect">
        <ToggleSwitch
          value="Distortion"
          current={on}
          handleClick={toggleEffect}
        />

        <h2>Wet</h2>
        <Slider
          name={name}
          min="0"
          max="1"
          value={wet}
          handleValueChange={changeEffectWetValue}
        />

        <h2>Distortion</h2>
        <Slider
          name={name}
          property="distortion"
          min="0"
          max="100"
          on={on}
          value={effect.distortion}
          handleValueChange={changeEffectValue}
        />

        <h2>Oversample</h2>
        <ButtonSet
          name={name}
          property="oversample"
          set={set}
          value={effect.oversample}
          handleValueChange={changeEffectValue}
        />
      </div>
    )
  }
}
