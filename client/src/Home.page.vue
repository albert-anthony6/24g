<template>
    <div class="home">
        <Alerts/>
        <Header/>
        <SelectedVideo v-bind:video="videos[0]"/>
    </div>
</template>

<script>
    import Alerts from './components/Alerts.component';
    import Header from './components/Header.component';
    import axios from 'axios';
    import SelectedVideo from './components/SelectedVideo.component';

    export default {
        name: 'Home',
        components: {
            Alerts,
            Header,
            SelectedVideo
        },
        data() {
            return {
                videos: []
            }
        },
        created() {
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
    }
</script>

<style lang="scss" scoped>
    
</style>