<template>
name:
<input v-bind="nameModel"/>
{{ errors.name }}
<br/>
phone:
<input v-bind="phoneModel"/>
{{ errors.phone }}
<br/>
email:
<input v-bind="emailModel"/>
{{ errors.email }}
</template>
<script setup>
import *  as yup from 'yup';
import {useForm} from 'vee-validate';

let userSchema = yup.object({
  name: yup.string().required().test((value,context)=>{
      return isValidName(value) || context.createError({message:'name is not valid'})
  }),
  email: yup.string().email(),
  phone: yup.string().test((value,context)=>{
   return isIranianPhone(value) || context.createError({message:'phone is not valid'})
  })
});
const isIranianPhone=(value)=>{
     var regex = new RegExp('^(\\+98|0)?9\\d{9}$');
    return regex.test(value);
}

const isValidName=(value)=>{
    return value.length>2 && value.length<255
}

const {defineInputBinds,errors}=useForm({
    validationSchema:userSchema
})
const emailModel=defineInputBinds('email')
const nameModel=defineInputBinds('name')
const phoneModel=defineInputBinds('phone')

</script>