<template>
  <div class="home">
    <button @click="debounceButton">{{debounce}}</button>
    <br />
    <button @click="throttleButton">{{throttle}}</button>
  </div>
</template>

<script>
// import {debounce, throttle} from '@/utils/debouce-throttle'
// const testDebounce = debounce()
// const testThrottle = throttle()
export default {
  name: 'Home',
  components: {
  },
  data(){
    return{
      debounce:'测试防抖',
      throttle:'测试节流'
    }
  },
  methods: {
    debounceButton () {
      this.$testDebounce(() => {
        console.log('测试防抖')
      }, 1500)
    },
    throttleButton () {
      this.$testThrottle(() => {
        console.log('测试节流')
      }, 2000)
    }
  }
}
</script>
<style lang="scss" scoped>
  button{
    padding: 10px 20px;
    margin-bottom: 20px;
  }
</style>
