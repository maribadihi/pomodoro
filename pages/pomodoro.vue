<template>
  <div class="flex h-screen">
	
	<div class=" w-1/3 flex justify-center items-center h-screen">
		
		<button class="w-24 h-24 rounded-full bg-black focus:outline-none" @click="play()"><i class="fa fa-play fa-2x text-white" id="play-btn"></i></button>
        <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
         
         <span class="countdown font-mono text-6xl">
          <span style="--value:45;">{{ myCounter }}</span>
        </span>
         
        </div>
        

	</div>


    <div class="w-2/3 bg-gray-100  grid grid-rows-5 grid-flow-col gap-2 grid-cols-3 my-3"  v-if="showInfo">
        <div  class="col-start-3 flex justify-around">
            <label >statistic</label>
            <label >profile</label>
        </div>
        <div class="row-span-3 row-start-2 col-start-2">
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
          label="Enter Email"
          class="border p-2 basis-full bg-inherit m-3"
          isValid="isValidEmail"
        />
        ggggggggggggg{{ isValidEmail }}
        <br/>
        <span class="text-red-600">{{emailValidationMsg}}</span>

        <br/>
        <mbutton type="primary" content="start" @click="start"/>
        <br/>
        <mbutton type="secondary" content="cancel" @click="cancel"/>
      </div>
      <div class="col-start-1 col-span-3 flex justify-around row-start-5">
            <label>Today</label>
            <label>Week</label>
            <label>Month</label>
        </div>
    </div>

  </div>
</template>
<script setup>


const name = ref("");
const email = ref("");
const showInfo = ref(false);
const emailValidationMsg=ref("");
const myCounter=ref(20);
const isValidEmail=ref(true);
const interval=ref('')


    const start=()=>{

     if(isValidEmail==true)
     {
        interval.value=setInterval(() => {
        if(myCounter.value>0){
            myCounter.value=myCounter.value-1
        }
        }, 2000)
        showInfo.value=false;   
     }
  
}
const cancel=()=>{
    showInfo.value=false;
}

const play=()=>{
    myCounter.value=20;
    clearInterval(interval.value);
    showInfo.value=true;
}
</script>
