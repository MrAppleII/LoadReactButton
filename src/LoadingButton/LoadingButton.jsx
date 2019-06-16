import React, { Component } from "react"
import styled, { keyframes } from "styled-components"
import PropTypes from "prop-types"
/*
    File:LoadingButton.jsx
    Description: Creates a button that pass in children and a prop that 
    controls whether or not the loading spinner is visible.

    PROPS
  backgroundColor:  This sets the color of the spinner ONLY.
  buttonColor:  This sets the color of the button itself
  BorderRadius: "7px",
  showLoadingIcon:  This sets if the icon is loading or not. 
  padding: 7,
   isFullWidth: sets if the button is full width, 

*/
class LoadingButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      minButtonWidth: null,
      spinnerHeight: this.props.spinnerHeight,
      minButtonHeight: null,
      RadiusForSpinner: 10,
      buttonClassName: "",
      isFirstRun: true,
    }
    this.menuWindow = React.createRef()
  }
  componentDidMount() {
    this.PickSpinnerHeight()
    if (this.props.isLoading) {
      this.setState({
        buttonClassName: "fromLeft",
      })
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.isLoading != this.props.isLoading) {
      this.setState({
        isFirstRun: false,
      })
    }
  }
  componentWillUnmount() {}

  PickSpinnerHeight = () => {
    if (this.menuWindow.current != null) {
      //  console.log(this.menuWindow.current.scrollWidth);
      var additionalSpacing =
        this.menuWindow.current.scrollHeight +
        this.menuWindow.current.scrollWidth
      var additionalHeight =
        this.menuWindow.current.scrollHeight -
        this.menuWindow.current.scrollHeight / 2 -
        22
      var mheight = this.menuWindow.current.scrollHeight

      //console.log(~(window.innerHeight-this.menuWindow.current.getBoundingClientRect().top))
    //  console.log(this.menuWindow.current.scrollHeight)
      if (additionalHeight <= 0) {
        additionalHeight = 0
      }
      if(this.props.isFullWidth!=true){
        this.setState({
          spinnerHeight: mheight / 2 - 10,
          minButtonWidth:""+( additionalSpacing + mheight / 2 + 10)+"px",
          RadiusForSpinner: mheight / 4,
          minButtonHeight:
            this.menuWindow.current.scrollHeight + additionalHeight + 8,
        })

      }else{
        this.setState({
          spinnerHeight: mheight / 2 - 10,
          minButtonWidth: "100%",
          RadiusForSpinner: mheight / 4,
          minButtonHeight:
            this.menuWindow.current.scrollHeight + additionalHeight + 8,
        })
      }
  
    }
  }

  render() {
    const { props } = this
    const spinnerRadius = this.state.RadiusForSpinner
    const spinnerQuarter = spinnerRadius / 2 + spinnerRadius / 5.5
    const bColor = this.props.backgroundColor
    try {
      return this.props.isLoading ? (
        <GenericButton
          ref={this.menuWindow}
          color={this.props.buttonColor}
          textcolor={this.props.textColor}
          style={{
            minWidth: this.state.minButtonWidth , 
            minHeight: "" + this.state.minButtonHeight + "px",
            padding: "" + this.props.padding + "px",
          }}
          onClick={this.props.onClick}
        >
          <Holder>
            <ButtonText className={this.state.isFirstRun ? "" : "left"}>
              {this.props.children}
            </ButtonText>
            <FadeInDiv>
              <OuterWrapper radius={spinnerRadius}>
                <SpinnerWrapper radius={spinnerRadius} quarter={spinnerQuarter}>
                  <El1
                    Color={bColor}
                    radius={spinnerRadius}
                    quarter={spinnerQuarter}
                    width={this.props.spinnerWidth}
                    height={this.state.spinnerHeight}
                  />
                  <El2
                    Color={bColor}
                    radius={spinnerRadius}
                    quarter={spinnerQuarter}
                    width={this.props.spinnerWidth}
                    height={this.state.spinnerHeight}
                  />
                  <El3
                    Color={bColor}
                    radius={spinnerRadius}
                    quarter={spinnerQuarter}
                    width={this.props.spinnerWidth}
                    height={this.state.spinnerHeight}
                  />
                  <El4
                    Color={bColor}
                    radius={spinnerRadius}
                    quarter={spinnerQuarter}
                    width={this.props.spinnerWidth}
                    height={this.state.spinnerHeight}
                  />
                  <El5
                    Color={bColor}
                    radius={spinnerRadius}
                    quarter={spinnerQuarter}
                    width={this.props.spinnerWidth}
                    height={this.state.spinnerHeight}
                  />
                  <El6
                    Color={bColor}
                    radius={spinnerRadius}
                    quarter={spinnerQuarter}
                    width={this.props.spinnerWidth}
                    height={this.state.spinnerHeight}
                  />
                  <El7
                    Color={bColor}
                    radius={spinnerRadius}
                    quarter={spinnerQuarter}
                    width={this.props.spinnerWidth}
                    height={this.state.spinnerHeight}
                  />
                  <El8
                    Color={bColor}
                    radius={spinnerRadius}
                    quarter={spinnerQuarter}
                    width={this.props.spinnerWidth}
                    height={this.state.spinnerHeight}
                  />
                </SpinnerWrapper>
              </OuterWrapper>
            </FadeInDiv>
          </Holder>
        </GenericButton>
      ) : (
        <GenericButton
          ref={this.menuWindow}
          textcolor={this.props.textColor}
          color={this.props.buttonColor}
          style={{
            minWidth: this.state.minButtonWidth,
            minHeight: "" + this.state.minButtonHeight + "px",
            padding: "" + this.props.padding + "px",
          }}
          onClick={this.props.onClick}
        >
          <Holder>
            <ButtonText className={this.state.isFirstRun ? "" : "fromLeft"}>
              {this.props.children}
            </ButtonText>
          </Holder>
        </GenericButton>
      )
    } catch (e) {
      if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
        console.log(e)
      }
      return null
    }
  }
}

export default LoadingButton

LoadingButton.defaultProps = {
  spinnerWidth: 1,
  spinnerHeight: 12,
  backgroundColor: "#FFF",
  BorderRadius: "7px",
  showLoadingIcon: true,
  textColor: "#FFFFFF",
  padding: 7,
  buttonColor: "#ff6347",
  isFullWidth:false,
}
LoadingButton.propTypes = {
  showLoadingIcon: PropTypes.bool,
  spinnerWidth: PropTypes.number,
  spinnerHeight: PropTypes.number,
  margin: PropTypes.string,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  BorderRadius: PropTypes.string,
  buttonColor: PropTypes.string,
  isFullWidth:PropTypes.bool,
}
const MoveToLeft = keyframes`
from{
    left:10%;
    opacity:0.1;
}
to{
    left:0%;
    opacity:1;
}
`
const MoveFromLeft = keyframes`
from{
    right:10%;
    opacity:0.1;
}
to{
  opacity:1;
    right:0%;
}

`
const ButtonText = styled.div`
  position: relative;
  will-change: opacity, right,left;
  &.left {
    animation: ${MoveToLeft};
    animation-duration: 0.4s;
  }
  &.fromLeft {
    animation: ${MoveFromLeft};
    animation-duration: 0.4s;
  }
`
//const quarter = radius / 2 + radius / 5.5
const FadeIn = keyframes`
  from {opacity: 0} 
  to {opacity: 1}
`
const FadeInDiv = styled.div`
  animation: ${FadeIn};
  animation-duration: 0.6s;
  will-change: opacity;
`
const GenericButton = styled.button`
  background-color: white;
  -webkit-box-pack: center;
  flex-grow: 0;
  border: 0;
  border-style: solid;
  border-radius: 2px;
  border: 1px solid rgba(38, 38, 38, 0.05);
  max-height: 32px !important;
  font-size: 16px !important;
  color: ${props => props.textcolor};
  background-color: ${props => props.color};

  cursor: pointer;
  height: auto;
  padding-top: 4px;
  padding-bottom: 4px;

  outline: none;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Roboto,
    "Helvetica Neue", Arial, sans-serif;
  -webkit-appearance: none;
  will-change: scale;

  :active {
    outline: none;
    transition: scale 0.3s ease 0s;
    transform: scale(0.95);
  }
  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
const Holder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  vertical-align: text-bottom;
  justify-content: center;
`

const OuterWrapper = styled.div`
position: relative;
top: 50%;
align-self: center;
height:100%;
margin-left:  ${props => "" + props.radius + "px"};;

`
const SpinnerWrapper = styled.div`
  position: relative;
  font-size: 0;
  top: ${props => "" + props.radius + "px"};
  left: ${props => "" + props.radius + "px"};
  width: ${props => "" + props.radius * 3 + "px"};
  height: ${props => "" + props.radius * 3 + "px"};
`
/************* Fade Animation for the spinner */
const fade = keyframes`
  50% {opacity: 0.3} 
  100% {opacity: 1}
`

const BaseElement = styled.div`
  position: absolute;
  width: ${props => "" + props.width + "px" || "1px"};
  height: ${props => `` + props.height + `px` || "12px"};
  margin: ${props => props.margin || "2px"};
  background-color: ${props => props.Color || "#000000"};
  border-radius: ${props => props.BorderRadius || "4px"};
  transition: 2s;
  animation-fill-mode: "both";
`
const El1 = styled(BaseElement)`
  animation: ${fade} 1.2s ${1 * 0.12}s infinite ease-in-out;
  top: ${props => "" + props.radius + "px"};
  left: 0;
`
const El2 = styled(BaseElement)`
  animation: ${fade} 1.2s ${2 * 0.12}s infinite ease-in-out;
  top: ${props => "" + props.quarter * 1 + "px"};
  left: ${props => "" + props.quarter * 1 + "px"};
  transform: rotate(-45deg);
`
const El3 = styled(BaseElement)`
  animation: ${fade} 1.2s ${3 * 0.12}s infinite ease-in-out;
  top: 0;
  left: ${props => "" + props.radius + "px"};
  transform: rotate(90deg);
`
const El4 = styled(BaseElement)`
  animation: ${fade} 1.2s ${4 * 0.12}s infinite ease-in-out;
  top: ${props => "" + props.quarter * -1 + "px"};
  left: ${props => "" + props.quarter + "px"};
  transform: rotate(45deg);
`
const El5 = styled(BaseElement)`
  animation: ${fade} 1.2s ${5 * 0.12}s infinite ease-in-out;
  top: ${props => "" + props.radius * -1 + "px"};
  left: 0;
`
const El6 = styled(BaseElement)`
  animation: ${fade} 1.2s ${6 * 0.12}s infinite ease-in-out;
  top: ${props => "" + props.quarter * -1 + "px"};
  left: ${props => "" + props.quarter * -1 + "px"};
  transform: rotate(-45deg);
`
const El7 = styled(BaseElement)`
  animation: ${fade} 1.2s ${7 * 0.12}s infinite ease-in-out;
  top: 0;
  left: ${props => "" + props.radius * -1 + "px"};
  transform: rotate(90deg);
`
const El8 = styled(BaseElement)`
  animation: ${fade} 1.2s ${8 * 0.12}s infinite ease-in-out;
  top: ${props => "" + props.quarter * 1 + "px"};
  left: ${props => "" + props.quarter * -1 + "px"};
  transform: rotate(45deg);
`
