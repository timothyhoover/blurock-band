<template lang="pug">
section(class='w-full')
  form-kit(
    type='form'
    netlify
    netlify-honeypot
    name='contact'
    action='/success'
    method='POST'
    input='bg-br-primary'
    submit-label='Send'
    :actions='false'
  )
    input(
      type='hidden'
      name='form-name'
      value='contact'
    )
    form-kit(
      type='text'
      placeholder='Name'
      label='Name'
      name='name'
      validation='required'
    )
    form-kit(
      type='email'
      placeholder='Email'
      label='Email'
      name='email'
      validation='required|email'
    )
    form-kit(
      type='text'
      placeholder='Website'
      label='Website'
      name='website'
    )
    form-kit(
      type='textarea'
      placeholder='Message'
      label='Message'
      name='message'
      validation='required'
    )
    form-kit(
      type='submit'
      label='Send'
      input-class='btn-primary btn-md w-full max-w-md'
    )
</template>
