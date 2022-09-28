import {is_weixin, is_android} from '../utils'
enum EPlayType {
    AUTO = 'AUTO',
    INTERACTION = 'INTERACTION'
}
const type = is_weixin() && !is_android() ? EPlayType.AUTO : EPlayType.INTERACTION

class AutoPlay {
    private audioWrap: Element
    constructor (bgm: string) {
        this.audioWrap = document.createElement('div')
        this.audioWrap.innerHTML = `<audio id="music" preload="auto" loop=${true} src=${bgm} muted autoPlay></audio>`
        document.body.appendChild(this.audioWrap)
        if (is_weixin() && !is_android()) {
            document.addEventListener('WeixinJSBridgeReady', this.playMusic, false)
        } else {
            document.addEventListener('touchend', this.playMusic, false)
        }
    }
    private playMusic = () => {
        const audio: any = document.getElementById('music')
        audio.muted = false
        audio && audio.play()
        this.removeListener(type)
        console.log('～开始播放～')
    }
    private removeListener = (type: string) => {
        if (type === EPlayType.AUTO) {
            document.removeEventListener('WeixinJSBridgeReady', this.playMusic)
        } else {
            document.removeEventListener('touchend', this.playMusic)
        }
        
    }
    stop = () => {
        const audio: any = document.getElementById('music')
        audio && audio.pause()
        console.log('～停止播放～')
    }
    replay = () => {
        const audio: any = document.getElementById('music')
        audio && audio.play()
        console.log('～重新播放～')
    }
}
console.log(11111)
export default AutoPlay