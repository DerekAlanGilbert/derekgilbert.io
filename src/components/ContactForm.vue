<template>
	<div class="contact-form-wrapper content-box">
    <form name="contactForm" method="POST"  data-netlify="true">
      <input name=clientName type="text" placeholder="Name"/>
      <input name="cientEmail" type="email" placeholder="Email"/>
      <label>Write a little about</label>
      <textarea name="clientContext" rows="10" spellcheck="true" wrap="hard" placeholder=" Write something about why we should work together..."/>
      <button  class="submit" type="submit">Submit</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.contact-form-wrapper {
  form {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 15px;
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
</style>