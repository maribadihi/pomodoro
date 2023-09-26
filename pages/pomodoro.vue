<template>
  <div class="flex h-screen">
    <div class="w-1/3 flex flex-wrap justify-center items-center h-screen">
      <button
        class="w-[200px] h-[200px] rounded-full bg-black focus:outline-none flex items-center justify-center"
        @click="play()"
      >
        <svg
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.23832 3.04445C5.65196 2.1818 3.75 3.31957 3.75 5.03299L3.75 18.9672C3.75 20.6806 5.65196 21.8184 7.23832 20.9557L20.0503 13.9886C21.6499 13.1188 21.6499 10.8814 20.0503 10.0116L7.23832 3.04445ZM2.25 5.03299C2.25 2.12798 5.41674 0.346438 7.95491 1.72669L20.7669 8.6938C23.411 10.1317 23.411 13.8685 20.7669 15.3064L7.95491 22.2735C5.41674 23.6537 2.25 21.8722 2.25 18.9672L2.25 5.03299Z"
            fill="#fff"
          />
        </svg>
      </button>
      <div
        class="w-full flex flex-col p-2 bg-neutral rounded-box text-neutral-content justify-center items-center"
      >
        <span class="countdown font-mono text-6xl">
          <span style="--value: 45">{{ myCounter }}</span>
        </span>
      </div>
    </div>

    <div
      class="w-2/3 bg-gray-100 grid grid-rows-5 grid-flow-col gap-2 grid-cols-3 my-3"
      v-if="showInfo"
    >
      <div class="col-start-3 flex justify-around">
        <label>statistic</label>
        <label>profile</label>
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
        is valid:{{ isValidEmail }}

        <br />
        <span class="text-red-600">{{ emailValidationMsg }}</span>
        <div class="flex flex-wrap justify-center items-center w-full">
          <mbutton type="primary" content="start" @click="start" />
          <mbutton type="secondary" content="cancel" @click="cancel" />
        </div>
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
const emailValidationMsg = ref("");
const myCounter = ref(20);
const isValidEmail = ref(true);
const interval = ref("");

const start = () => {
  if (isValidEmail == true) {
    interval.value = setInterval(() => {
      if (myCounter.value > 0) {
        myCounter.value = myCounter.value - 1;
      }
    }, 2000);
    showInfo.value = false;
  }
};
const cancel = () => {
  showInfo.value = false;
};

const play = () => {
  myCounter.value = 20;
  clearInterval(interval.value);
  showInfo.value = true;
};
</script>
