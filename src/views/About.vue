<template>
  <div class="hello">
    77777
    <div @click="debounceButton">测试防抖</div>
    <br />
    <div @click="throttleButton">测试节流</div>
  </div>
</template>
<script>
import {debounce, throttle} from '@/utils/debouce-throttle'

const testDebounce = debounce()
const testThrottle = throttle()

export default {
  name: 'About',
  methods: {
    debounceButton () {
      testDebounce(() => {
        console.log('测试防抖')
      }, 1500)
    },
    throttleButton () {
      testThrottle(() => {
        console.log('测试节流')
      }, 1000)
    }
  }
}
</script>
