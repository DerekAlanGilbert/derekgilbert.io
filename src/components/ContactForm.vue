<template>
  <div class="contact-form-wrapper content-box">
    <form
      name="contactForm"
      method="POST"
      action="/thanks"
      data-netlify="true"
      data-netlify-recaptcha="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contactForm" />
      <input
        v-validate="'required|min:3'"
        data-vv-validate-on="blur"
        data-vv-as="Name"
        name="clientName"
        type="text"
        placeholder="Name"
      />
      <small class="error">{{ errors.first("clientName") }}</small>
      <input
        v-validate="'email|min:5'"
        data-vv-validate-on="blur"
        data-vv-as="Email"
        name="cientEmail"
        type="email"
        placeholder="Email"
      />
      <small class="error">{{ errors.first("cientEmail") }}</small>
      <textarea
        name="clientContext"
        rows="10"
        spellcheck="true"
        wrap="hard"
        placeholder="Write why you're contacting me.."
      />
      <div data-netlify-recaptcha="true"></div>
      <button class="submit" type="submit">Submit</button>
    </form>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.contact-form-wrapper {
  form {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 15px;
    width: 100%;
    input,
    textarea {
      resize: none;
      width: 100%;
      padding: 12px 24px;
      transition: 0.5s ease-in-out;
      border-radius: 6px;
      font-size: 1em;
      border: 1px solid var(--body-color);
      outline: none;
      &:invalid {
        border: 1px solid var(--error-color);
      }
      &:focus {
        border: 1px solid var(--link-color);
      }
    }
    .submit {
      max-width: 180px;
      padding: 12px 24px;
      transition: 0.5s ease-in-out;
      border-radius: 6px;
      font-size: 1em;
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
