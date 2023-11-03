<template>
    <div class="loginPage">
        <div class="w-96 max-w-md">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4 text-left">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Email
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username" type="email" placeholder="Email" v-model="username">
                    <span class="text-red-500" v-if="error != null">{{ error }}</span>
                </div>
                <div class="mb-6 text-left">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input
                        class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password" type="password" placeholder="********" v-model="password">
                    <span class="text-red-500" v-if="error != null">{{ error }}</span>
                </div>
                <div class="flex items-center justify-between">
                    <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button" @click="login">
                        Sign In
                    </button>
                    <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Forgot Password?
                    </a>
                </div>
                <div class="mt-5">
                    <p class="text-gray-500 text-sm font-normal mb-2">Please Use Email : <span
                            class="font-bold text-gray-700">test@example.com</span></p>
                    <p class="text-gray-500 text-sm font-normal">Please Use Password : <span
                            class="font-bold text-gray-700">123456</span></p>
                </div>
            </form>
            <p class="text-center text-gray-500 text-xs">
                &copy;2023 Test Corp. All rights reserved.
            </p>
        </div>
    </div>
</template>
  
<script>
import { useAuthStore } from '@/store/index';
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    data() {
        return {
            username: '',
            password: '',
            error: null
        }
    },
    methods: {
        login() {
            try {
                useAuthStore.login(this.username, this.password);
                this.$router.push('/dashboard');
                this.errorMessage = '';
            } catch (error) {
                this.errorMessage = 'Invalid username or password. Please try again.';
            }
        },
    },
    created() {
    }
}
</script>
  
<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
  