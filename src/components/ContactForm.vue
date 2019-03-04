<template>
	<div class="contact-form-wrapper content-box">
    <form name="contact" action="/" method="POST"  data-netlify-recaptcha="true" data-netlify="true">
      <div class="input-wrapper">
        <label>Name</label>
        <input name="name" type="text"/>
      </div>
      <div class="input-wrapper">
      <label>Email</label>
        <input name="email" type="email"/>
      </div>
      <div class="input-wrapper">
      <label>Write a little about</label>
        <textarea name="contact" rows="10" spellcheck="true" wrap="hard"/>
      </div>
      <div data-netlify-recaptcha="true"></div>
      <div class="input-wrapper">
        <button  class="submit" type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.contact-form-wrapper {
  form {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 15px;
    .input-wrapper{
      width: 100%;
      input, textarea {
        resize: none;
        width: 100%;        
        padding: 12px 24px;
        transition: 0.5s ease-in-out;
        border-radius: 6px;
        font-size: 1.0em;
        border: 1px solid var(--body-color);
        outline: none;
        &:focus {
          outline: none;
          border: 1px solid var(--link-color);
        }
      }
      .submit {
        padding: 12px 24px;
        transition: 0.5s ease-in-out;
        border-radius: 6px;
        font-size: 1.0em;
        border: 1px solid var(--body-color);
        cursor: pointer;
        &:hover {
          background-color: var(--link-color);
          color: #fff;
        }
      }
    }
  }
}

</style>