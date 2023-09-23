<template>
  <div class="flex h-screen">
    <!-- <div class="w-1/3 basis-1/3 flex justify-center">pomodoro</div> -->

    <!-- <div class="py-24 w-1/3 flex items-center justify-center space-x-8">

    <div class="w-36 h-36 bg-black rounded-full flex">

      -->
	
	<div class=" w-1/3 flex justify-center items-center h-screen">
		
		<button class="w-24 h-24 rounded-full bg-black focus:outline-none" @click="play()"><i class="fa fa-play fa-2x text-white" id="play-btn"></i></button>
        <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
         
         <span class="countdown font-mono text-6xl">
          <span style="--value:45;">{{ myCounter }}</span>
        </span>
         
        </div>
        

	</div>


        <!-- <button class="w-0 h-0 flex flex-wrap  items-center justify-center
  border-t-[50px] border-t-transparent
  border-l-[75px] border-l-green-500
  border-b-[50px] border-b-transparent"/> -->
    <!-- </div>
</div> -->


    <div class="w-2/3 bg-gray-100 row-span-3 row-start-2 col-start-2"  v-if="showInfo">
      <div class="flex flex-wrap justify-center mx-auto ">
        <mput 
          v-model="name"
          name="first_name"
          id="fname"
          label="First Name"
          class="border p-2 basis-full bg-inherit m-3"
        />
        <mput 
          v-model="email"
          type="email"
          name="femail"
          id="femail"
          label="Email"
          class="border p-2 basis-full bg-inherit m-3"
          isValid="isValidEmail"
        />
       ddddddddddd {{ isValidEmail }}
        <br/>
        <mbutton type="primary" content="start" @click="start"/>
        <br/>
        <mbutton type="secondary" content="cancel" />
      </div>
    </div>
    <!-- <div class="basis-full gap-x-36 flex  mt-3">
                  <div class="flex flex-wrap mx-auto my-3">
                    <p class="font-bold text-2xl p-1 m-2">New Task</p>
                    <mput v-model="email" type="email" name="femail" id="femail" label="Email" 
                    class="border p-2 basis-full bg-inherit m-3" />
      
                    <mput v-model="email" type="email" name="femail" id="femail" label="Email"
                    class="border p-2 basis-full bg-inherit m-3" />
                 
                    <button class="basis-full border rounded-xl bg-black text-white m-3 p-2" @click="validForm()">Start</button>
                    <button class="basis-full border rounded-xl bg-slate-200 text-black m-3 p-2" @click="reset()">Cancel</button>
                  </div>
                </div> -->
  </div>
</template>
<script setup>
import { useInterval } from '@vueuse/core'


const name = ref("");
const email = ref("");
const showInfo = ref(false);
const emailValidationMsg=ref("");
const myCounter=ref("");
const isValidEmail=ref(true);

const reg=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/


 const  isEmailValid= ()=> {
    emailValidationMsg.value = (email.value == "")? "" : (reg.test(email.value)) ? 'has-success' : 'has-error';
     return emailValidationMsg;
    }
    const start=()=>{
     isEmailValid();
     debugger
     if(emailValidationMsg.value=='has-success')
     {
        myCounter.value = useInterval(1000)
        showInfo.value=false;   
     }
  
}
const play=()=>{
    showInfo.value=true;
}
</script>
