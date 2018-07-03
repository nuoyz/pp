import React, { Component } from 'react';
import Key from './key'

let Tone = window.Tone

export default class Piano extends Component {
    constructor(props) {
        super(props)
        this.synth = new Tone.SimpleSynth().toMaster()
    }
    play(note) {
        if (window.solfeggio && note === window.solfeggio.key) {
          window.score += 1
          window.emitter.emit('scoreUpdate')
        } else if (window.solfeggio && note !== window.solfeggio.key) {
          window.emitter.emit('scoreUpdate', {isError: true})
        }
        this.synth.triggerAttack(note)
    }
    release() {
        this.synth.triggerRelease()
    }
    render() {
        let keys = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4']
        let keyList = keys.map(key =>
            <Key onPress={this.play.bind(this)} onRelease={this.release.bind(this)} note={key} />
        )

        // touch-action attribute required by PEP (Pointer Events Polyfill)
        return (<div className="piano"
                    ref={node => node && node.setAttribute('touch-action', 'none')}>
                    {keyList}
                </div>)
    }
}