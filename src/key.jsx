import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Key extends Component {
    constructor(props) {
      super(props)
      
      this.state = {
        pressed: false
      }
  
      this.press = this.press.bind(this)
      this.release = this.release.bind(this)
      this.getClassName = this.getClassName.bind(this)
    }
  
    componentDidMount() {
      /**
       * Use PEP (Pointer Events Polyfill) to detect touches that move accross dom elements.
       * (requires that a touch-action attribute is present in html to activate it)
       */
      ReactDOM.findDOMNode(this).addEventListener('pointerdown', this.press)
      ReactDOM.findDOMNode(this).addEventListener('pointerup', this.release)
      ReactDOM.findDOMNode(this).addEventListener('pointerenter', this.press)
      ReactDOM.findDOMNode(this).addEventListener('pointerleave', this.release)
      ReactDOM.findDOMNode(this).addEventListener('pointercancel', this.release)
    }
  
    press(e) {
      // When not on touch device, filter out events when mouse button not pressed
      const isTouchDevice = 'ontouchstart' in window.document.documentElement;
      if (this.state.pressed || (!isTouchDevice && e.buttons !== 1)) {
          return
      }
      this.setState({ pressed: true })
      this.props.onPress(this.props.note)
    }
  
    release() {
      this.setState({ pressed: false })
      this.props.onRelease(this.props.note)
    }
  
    getClassName() {
        let classes = ['key', this.props.note[0], 'o' + this.props.note[1]]
        if (this.state.pressed) {
            classes.push('down')
        }
        return classes.join(' ')
    }
  
    render() {
      return <a className={this.getClassName()}><span/></a>
    }
  }
  