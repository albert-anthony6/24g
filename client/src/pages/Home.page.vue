<template>
    <div class="home">
        <SelectedVideo v-bind:user="user" v-bind:video="videos[0]" v-on:newcomment="updateVideos"/>
    </div>
</template>

<script>
    import axios from 'axios';
    import SelectedVideo from '../components/SelectedVideo.component';
    axios.defaults.withCredentials = true;

    export default {
        name: 'Home',
        components: {
            SelectedVideo
        },
        data() {
            return {
                videos: [],
                user: null
            }
        },
        methods: {
            updateVideos(){
                sessionStorage.setItem('homeVideos', '');
                this.fetchData();
            },
            fetchData(){
                if (sessionStorage.homeVideos) {
                    console.log('Getting from session storage...');
                    this.videos = JSON.parse(sessionStorage.homeVideos);
                } else {
                    console.log('Getting from API and setting res to session storage...');
                    axios.get('http://localhost:8000/api/v1/videos')
                    .then(res => {
                        sessionStorage.setItem('homeVideos', JSON.stringify(res.data.data.videos));
                        this.videos = JSON.parse(sessionStorage.homeVideos);
                    })
                    .catch(err => console.log("ERROR: " + err.response.data.message));
                }
            }
        },
        created() {
            this.fetchData();
        },
        mounted(){
            if (sessionStorage.user) {
            // this.videoId = video._id
            this.user = JSON.parse(sessionStorage.user);
            }
        }
    }
</script>

<style lang="scss" scoped>
    
</style>