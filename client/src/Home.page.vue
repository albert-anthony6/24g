<template>
    <div class="home">
        <Alerts/>
        <Header/>
    </div>
</template>

<script>
    import Alerts from './components/Alerts.component';
    import Header from './components/Header.component';

    export default {
        name: 'Home',
        components: {
            Alerts,
            Header
        }
    }
</script>

<style lang="scss" scoped>

</style>