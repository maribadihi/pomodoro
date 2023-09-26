<template>
    <div>
      <input 
      class="w-full bg-white border border-gray-500 placeholder-bg-slate-300 text-sm rounded-lg block p-2.5 dark:bg-gray-700 dark:border-gray-500"
      v-model="localModelValue" 
      :placeholder="label" 
      :name="name"
      :id="id" 
      :type="type"
      @blur="validate"/>
    <br/>
    <span class="text-red-600">{{emailValidationMsg}}</span>
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
    
    return (localModelValue.value == "")? true : (reg.test(localModelValue.value)) ;
     

    }

const validate=()=>{
     if(props.type=='email')
     {           
       debugger
         if(isEmailValid())
         {
           emailValidationMsg.value=''
           localIsValid.value=true;
         }
         else
         {          
            emailValidationMsg.value='Please enter a valid email address'
            localIsValid.value=false;
         }
     }
  
}

const { localModelValue} = useLocalModelValue({ props})
const { localModelValue: localIsValid} = useLocalModelValue({ props, property: 'isValid' })

</script>