<template>
    <div>
      <input v-model="localModelValue" :placeholder="label" :name="name" :id="id" :type="type" @blur="validate"/>
{{ emailValidationMsg }}
    </div>
  </template>
  <script setup>
    import { string, oneOfType, bool, number } from 'vue-types'

const props = defineProps({
  label: string(),
  id: string(),
  name: string(),
  type: string().def('text'),
  isValid:bool(),
  modelValue: oneOfType([string(), number(), bool()])
})
const emailValidationMsg=ref("");
const reg=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
const  isEmailValid= ()=> {
    emailValidationMsg.value = (localModelValue == "")? "" : (reg.test(localModelValue)) ? 'has-success' : 'has-error';
     return emailValidationMsg;

    }

const validate=()=>{
     if(props.type=='email')
     {
              
        isEmailValid();
         if(emailValidationMsg.value=='has-success')
         {
           isValid=false;
         }
     }
  
}

const { localModelValue} = useLocalModelValue({ props})
const { localModelValue:isValid} = useLocalModelValue({ props })

</script>