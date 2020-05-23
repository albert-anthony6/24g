<template>
    <div class="alerts">
        <p class="alert__text">Welcome, Albert</p>
    </div>
</template>

<script>

    export default {
        name: 'Alerts'
    }
</script>

<style lang="scss" scoped>
    .alerts{
        /* display: none; */
        /* display: inline-block; */
        background-color: blue;
        color: #fff;
        padding: 1rem 2rem 1rem 2rem;
        width: 100vw;
        position: absolute;
        top: 0; 
        left: 0;
        z-index: 999;
        animation: showAlert .5s;

        &__text{
            font-weight: 300;
            font-size: 1.5rem;
        }

        @keyframes showAlert {
            from{
                transform: translateY(-50px);
            }
            to {
                transform: translateY(0);
            }
        }
    }
</style>