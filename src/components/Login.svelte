<script>
    import { doLogin } from './login';
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();


    //import { doGetArticles } from './login';
    import { onMount } from "svelte";
    
    let email = '';
    let password = '';
  
      function test() {
        console.log('test');
        let r = doGetArticles(123);
        console.log(r);
      }
      function login() {
        console.log('login');
        let r = doLogin(email, password);
        console.log(r);
        if (r) {
            dispatch('message', {
                text: 'login_ok'
            })
        } else {
            dispatch('message', {
                text: 'login_fail'
            })
        }
      }
  </script>
  
  
  
  <svelte:head>
      <title>About</title>
  </svelte:head>
  
  <h1>CONNECT TO SAKURA.ECO</h1>
  <input bind:value={email} placeholder="enter your email">
  <input bind:value={password} placeholder="enter your password">
  
  <button on:click|once={login}>
      Sign In
  </button>
  <button on:click|once={test}>
      Test
  </button>
  