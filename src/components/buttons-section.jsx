import { Button } from "./Button"
const paths = [
    './src/assets/soundeffects/Cev_H2.mp3',
    './src/assets/soundeffects/Dsc_Oh.mp3',
    './src/assets/soundeffects/Heater-1.mp3',
    './src/assets/soundeffects/Heater-2.mp3',
    './src/assets/soundeffects/Heater-3.mp3',
    './src/assets/soundeffects/Heater-4_1.mp3',
    './src/assets/soundeffects/Heater-6.mp3',
    './src/assets/soundeffects/Kick_n_Hat.mp3',
    './src/assets/soundeffects/RP4_KICK_1.mp3'
]

const names = [
    'Q',
    'W',
    'E',
    'A',
    'S',
    'D',
    'Z',
    'X',
    'C'
]
  
export function Buttons() {
    return (
        <div id="buttons-container">
            {names.map((name, index) => {
                return <Button key={ name } name={ name} path={paths[index]} triggerKey={name} />
            })}
        </div>
    )
}
  