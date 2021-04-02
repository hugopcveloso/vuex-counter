<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Counter />

    <CounterSquared />
    <Buttons />
    <ColorCode />
  </div>
</template>

<script>
import Counter from "../components/Counter";
import CounterSquared from "../components/CounterSquared";
import Buttons from "../components/Buttons";
import ColorCode from "../components/ColorCode";
export default {
  name: "Home",
  components: {
    Counter,
    CounterSquared,
    Buttons,
    ColorCode,
  },
};
</script>

<style lang="sass" >
div
  margin-bottom: 10px

.counter
  font-size: 80px

.buttons
  button
    color: black
    font-size: 40px
    width: 100px
    margin: 0 10px
</style>
