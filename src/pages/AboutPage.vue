<script>
export default {
  data() { return {} }
}
</script>

<template>
  <section class="about-page flex column">
    <fieldset class="about">
      <legend>About</legend>
      <p>This site has a few sections:</p>
      <ul class="flex column">
        <li>
          The <RouterLink to="/">home page</RouterLink> displays user
          information as well as the current Bitcoin rate.
        </li>
        <li>
          The <RouterLink to="/contact">contacts page</RouterLink> displays all
          contacts with the ability to remove, add, edit, or see each ones
          details.
        </li>
        <li>
          The <RouterLink to="/stats">stats page</RouterLink> displays Bitcoin
          market history and average block size in 2 distinct chart formats.
        </li>
        <li>
          The about page, which is the page you are currently on.
        </li>
      </ul>
    </fieldset>

    <fieldset class="contact-info flex column">
      <legend>Creator information</legend>
      <h2>Jenny Tover</h2>
      <p><span>Phone: </span> 050-123-4567</p>
      <p><span>Email: </span> jenny.lottner@gmail.com</p>
      <p>
        <span>About me: </span> I finished my B.S in Biology and Psychology with
        a focus on Neuroscience from Tel-Aviv University. During my academic
        studies I took 2 programming courses; one in Matlab, and one in Python.
        I quickly found that those were my favorite courses and that I
        thoroughly enjoy Programming. Once I graduated, I took a programming
        bootcamp with Coding Academy.
      </p>
    </fieldset>
  </section>
</template>

<style lang="scss">
@import "../assets/style/basics/vars";
@import "../assets/style/basics/helpers";

.about-page {
  gap: 1rem;

  padding: 1rem 2rem;
  line-height: 1.45;

  fieldset {
    padding: 0.5rem 1.5rem 1rem;
    border-radius: $fieldset-borders;

    legend {
      font-size: 1.25rem;
    }

    ul {
      margin-inline-start: 1.5rem;

      a {
        color: $blue-text;
      }
    }
  }
}
</style>