<template>
    <div class="videolist">
        <h2 class="videolist__title">{{video.title}}</h2>
        <video class="videolist__video" :poster=video.thumb></video>
    </div>
</template>

<script>

    export default {
        name: 'VideoList',
        props: ["video"]
    }
</script>

<style lang="scss" scoped>
    .videolist{
        /* background-color: red; */
        margin-bottom: 2rem;
        cursor: pointer;
        &__title{
            font-size: 2rem;
            font-weight: 300;
        }

        &__video{
            width: 100%;
        }
    }
</style>