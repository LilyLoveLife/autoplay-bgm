# autoplay-bgm
Autoplay background music for h5.

 ## Scope
It plays when user touches the screen.
<br>For WeiXin on ios, it would autoplay bgm without any touch.

 ## Installation
```javascript
 npm add autoplay-bgm --save
 
 ```
 ## Usage

 * #### For ESM
```javascript
import AutoplayBgm from 'autoplay-bgm'

const autoplay = new AutoplayBgm(bgmStr) // init, and autoplay bgm

autoplay.stop() // stop bgm

autoplay.play() // replay bgm

```

   * #### For <script>
  ```javascript
  <script type="module" async>
        import AutoPlay from 'autoplay-bgm'
        var audio = new AutoPlay('/testAudio.mp3')
        window.audio = new AutoPlay('/testAudio.mp3')
        window.stop = function  () {
            console.log('～111～')
            window.audio.stop()
        }
        window.replay = () => {
            console.log('～222～')
            audio.replay()
        }
        const str1 = '<button id="stop" type="button" onclick=\"stop()\">停止</button>'
        const str2 = '<button type="button" onclick="replay()">重新播放</button>'
        var btnsWrap = document.createElement('div')
        btnsWrap.innerHTML = str1 + str2
        document.body.appendChild(btnsWrap)                
    </script>
  ```
