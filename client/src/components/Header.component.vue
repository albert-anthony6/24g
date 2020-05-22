<template>
    <header class="nav">
        <img src='../assets/24g_logo.svg' class="nav__logo" alt="24G Logo">
        <h1 class="nav__h1">Video Player</h1>
    </header>
</template>

<script>

    export default {
        name: 'Header'
    }
</script>

<style lang="scss" scoped>
    .nav{
        background-color: #333;
        height: 10rem;
        padding: 2rem 0 2rem 4rem;
        display: flex;
        align-items: center;

        &__logo{
            height: 80%;
        }

        &__h1{
            font-weight: 300;
            margin-left: 2rem;
            color: #fff;
            text-transform: uppercase;
        }
    }
</style>