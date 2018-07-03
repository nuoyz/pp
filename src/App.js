import React, { Component } from 'react';
//import Tone from 'tone'
import Piano from './piano'
import Key from './key'
import Score from './score'
import logo from './logo.svg';
import './App.css';

let Tone = window.Tone
window.score = 0
window.keyArray = [
  {key: 'C4', value: '多'},
  {key: 'D4', value: '来'},
  {key: 'E4', value: '米'},
  {key: 'F4', value: '发'},
  {key: 'G4', value: '索'},
  {key: 'A4', value: '拉'},
  {key: 'B4', value: '西'},
]



export default class App extends Component {
    constructor(props) {
        super(props)
        this.songs = [
            { name: '\u2605 Twinkle', score: [
                ['C4,4', 'C4,4', 'G4,4', 'G4,4', 'A4,4', 'A4,4', 'G4,2'],
                ['F4,4', 'F4,4', 'E4,4', 'E4,4', 'D4,4', 'D4,4', 'C4,2'],
                ['G4,4', 'G4,4', 'F4,4', 'F4,4', 'E4,4', 'E4,4', 'D4,2'],
                ['G4,4', 'G4,4', 'F4,4', 'F4,4', 'E4,4', 'E4,4', 'D4,2'],
                ['C4,4', 'C4,4', 'G4,4', 'G4,4', 'A4,4', 'A4,4', 'G4,2'],
                ['F4,4', 'F4,4', 'E4,4', 'E4,4', 'D4,4', 'D4,4', 'C4,2'],
            ]},
            { name: '\uD83D\uDEB6 Noa', score: [
                ['C4,4', 'C4,4', 'C4,4', 'E4,4', 'D4,4', 'D4,4', 'D4,4', 'F4,4'],
                ['E4,4', 'E4,4', 'D4,4', 'D4,4', 'C4,2'],
                ['E4,4', 'E4,4', 'E4,4', 'E4,4', 'G4,2', 'F4,2'],
                ['D4,4', 'D4,4', 'D4,4', 'D4,4', 'F4,2', 'E4,2'],
                ['C4,4', 'C4,4', 'C4,4', 'E4,4', 'D4,4', 'D4,4', 'D4,4', 'F4,4'],
                ['E4,4', 'E4,4', 'D4,4', 'D4,4', 'C4,2'],
            ]},
            { name: '\uD83C\uDF82 Birthday', score: [
                ['D4,8', 'D4,8', 'E4,4', 'D4,4', 'G4,4', 'F4,2'],
                ['D4,8', 'D4,8', 'E4,4', 'D4,4', 'A4,4', 'G4,2'],
                ['D4,8', 'D4,8', 'D5,4', 'B4,4', 'G4,4', 'F4,4', 'E4,4'],
                ['C5,8', 'C5,8', 'B4,4', 'G4,4', 'A4,4', 'G4,2'],
            ]},
            { name: '\uD83D\uDC07 Rabbit', score: [
                ['C4,8', 'D4,8', 'E4,8', 'F4,8', 'G4,4', 'G4,4'],
                ['A4,4', 'A4,4', 'G4,2', 'null,'],
                ['A4,4', 'A4,4', 'G4,2', 'null,'],
                ['G4,8', 'F4,8', 'F4,8', 'F4,8', 'F4,8', 'E4,8', 'E4,4'],
                ['E4,8', 'D4,8', 'D4,8', 'D4,8', 'D4,8', 'C4,8', 'C4,4'],
                ['C4,8', 'E4,8', 'G4,4'],
                ['C4,8', 'E4,8', 'G4,4'],
                ['G4,4', 'G4,4', 'C4,2'],
            ]},
            { name: '\u2744 Frost', score: [
                ['D4,8', 'F4,8', 'D4,8', 'F4,8'],
                ['E4,4', 'E4,4', 'null,'],
                ['E4,8', 'G4,8', 'C4,8', 'E4,8'],
                ['D4,4', 'D4,4', 'null,'],
                ['F4,8', 'F4,8', 'F4,8', 'F4,8'],
                ['A4,8', 'F4,8', 'A4,8', 'F4,8'],
                ['G4,8', 'G4,8', 'G4,8', 'G4,8'],
                ['B4,8', 'A4,8', 'A4,8', 'F4,8'],
                ['D4,8', 'F4,8', 'D4,8', 'F4,8'],
                ['E4,4', 'E4,4', 'null,'],
                ['E4,8', 'G4,8', 'C4,8', 'E4,8'],
                ['D4,4', 'D4,4', 'null,'],
            ]},
            { name: '\uD83D\uDD77 Spider', score: [
                ['C4,8', 'C4,8', 'C4,8', 'D4,8'],
                ['E4,4', 'E4,4'],
                ['D4,8', 'C4,8', 'D4,8', 'E4,8'],
                ['C4,2', 'null,'],
                ['E4,8', 'E4,8', 'E4,8', 'F4,8'],
                ['G4,4', 'G4,4'],
                ['F4,8', 'E4,8', 'F4,8', 'G4,8'],
                ['E4,2', 'null,'],
                ['C5,4', 'C5,8', 'C5,8'],
                ['B4,4', 'B4,4'],
                ['A4,8', 'A4,8', 'A4,8', 'A4,8'],
                ['G4,2', 'null,'],
                ['C4,8', 'C4,8', 'C4,8', 'D4,8'],
                ['E4,4', 'E4,4'],
                ['D4,8', 'C4,8', 'D4,8', 'E4,8'],
                ['C4,2', 'null,'],
            ]},
            { name: '\uD83D\uDC26 Little bird', score: [
                ['D4,2', 'null,', 'A4,2', 'null,'],
                ['G4,4', 'F4,8', 'E4,8', 'F4,4', 'D4,4'],
                ['E4,4', 'E4,4', 'A4,4', 'null,', 'G4,8'],
                ['F4,4', 'D4,8', 'F4,8', 'E4,2', 'null,'],
                ['E4,8', 'F4,8', 'E4,8', 'D4,8', 'C4,4', 'B3,8', 'B3,8'],
                ['D4,4', 'D4,4', 'E4,2', 'null,'],
                ['A4,4', 'G4,8', 'F4,4', 'E4,8', 'F4,8'],
                ['D4,4', 'D4,4', 'D4,4', 'null,'],
            ]},
            { name: '\u263A Kaisla\'s song', score: [
                ['F4,4', 'F4,4', 'G4,4', 'G4,4'],
                ['A4,4', 'A4,8'],
                ['G4,4', 'G4,8', 'G4,8', 'G4,8', 'null,'],
                ['F4,4', 'F4,4', 'G4,4', 'G4,4'],
                ['A4,4', 'A4,8'],
                ['G4,2', 'null,'],
                ['F4,4', 'F4,4', 'G4,4', 'G4,4'],
                ['A4,4', 'A4,8'],
                ['G4,4', 'G4,8', 'G4,8', 'G4,8', 'null,'],
                ['F4,4', 'F4,4', 'G4,4', 'G4,4'],
                ['A4,4', 'A4,8'],
                ['G4,2', 'null,'],
                ['F4,4', 'F4,4', 'G4,4', 'G4,4'],
                ['A4,4', 'A4,8'],
                ['G4,4', 'G4,8', 'G4,8', 'G4,8', 'null,'],
                ['F4,4', 'F4,4', 'G4,4', 'G4,4'],
                ['A4,4', 'A4,8'],
                ['G4,1', 'null,'],
            ]},
            /*{ name: '\u266B Do-Re-Mi', score: [
                ['C4,4', 'D4,4', 'E4,4', 'F4,4', 'G4,4', 'A4,4'],
                ['B4,4', 'C5,4', 'D5,4', 'E5,4', 'F5,4', 'G5,4'],
                ['G5,4', 'F5,4', 'E5,4', 'D5,4', 'C5,4', 'B4,4'],
                ['A4,4', 'G4,4', 'F4,4', 'E4,4', 'D4,4', 'C4,4'],
            ]}*/
        ]
        this.colorSchemes = [
            'basic', 'ruby', 'plain'
        ]

        this.state = {
            song: this.songs[0],
            color: this.colorSchemes[0],
            labels: true
        }
    }
    nextSong() {
        const currentIndex = this.songs.indexOf(this.state.song)
        const next = currentIndex + 1 < this.songs.length
            ? currentIndex + 1
            : 0;
        this.setState({ ...this.state, song: this.songs[next] })
    }
    selectColor(newColor) {
        this.setState({ ...this.state, color: newColor })
    }
    toggleLabels() {
        this.setState({ ...this.state, labels: !this.state.labels })
    }
    getClassName() {
        return 'color-' + this.state.color
            + ' labels-' + (this.state.labels ? 'letters' : 'piano')
    }
    render() {
        return <section className={this.getClassName()}>
                <Score song={this.state.song} onNextSong={this.nextSong.bind(this)} />
                <Settings song={this.state.song} onNextSong={this.nextSong.bind(this)}
                            colorSchemes={this.colorSchemes} onSelectColor={this.selectColor.bind(this)}
                           onToggleLabels={this.toggleLabels.bind(this)} />
                <Piano />
            </section>
    }
}


class Settings extends Component {
    render() {
        let selectColor = (color) => () => this.props.onSelectColor(color)
        let colorList = this.props.colorSchemes.map(color =>
            <div className={'color-' + color} onClick={selectColor(color)}></div>
        )
        return <div className="settings">
                <div className="color-select">
                    Color: {colorList}
                    <div className="labels-piano" onClick={this.props.onToggleLabels}></div>
                </div>
            </div>
    }
}


