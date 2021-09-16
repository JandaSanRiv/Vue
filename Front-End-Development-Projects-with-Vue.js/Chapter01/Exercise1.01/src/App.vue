<template>
  <div>
    <LifeCyclesVue />
    <TriggerMethods />
    <EjemploVForArray />
    <EjemploVFor />
    <ejemplo-v-model />
    <Exercise />

    <Ejemplo />
    <Exercise103 />
    <TestPUG />
    <Directive />
  </div>
</template>

<script>
import Exercise from './components/Exercise1-01'
import Ejemplo from './components/Ejemplo'
import Exercise103 from './components/Exercise1-03'
import TestPUG from './components/TestPug'
import Directive from './components/Directives'
import EjemploVModel from './components/EjemploVModel'
import EjemploVFor from './components/EjemploVFor'
import EjemploVForArray from './components/EjemploVForArray'
import TriggerMethods from './components/TriggerMethods'
import LifeCyclesVue from './components/LifeCycles'

export default {
  components: {
    Exercise,
    Ejemplo,
    Exercise103,
    TestPUG,
    Directive,
    EjemploVModel,
    EjemploVFor,
    EjemploVForArray,
    TriggerMethods,
    LifeCyclesVue,
  },
}
</script>

<style lang="scss">
@import 'styles/global';
</style>
