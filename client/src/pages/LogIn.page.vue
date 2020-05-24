<template>
    <div class="login-signup">
        <SignIn/>
        <SignUp/>
    </div>
</template>

<script>
import SignIn from '../components/SignIn.component';
import SignUp from '../components/SignUp.component';

export default {
    name: 'LogIn',
    components: {
        SignIn,
        SignUp
    }
}
</script>