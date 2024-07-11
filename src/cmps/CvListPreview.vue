<script>
export default {
  props: ["item"],
};
</script>

<template>
  <div class="cv-preview grid">
    <h4 class="title">{{ item.title }}</h4>
    <h4 class="years">{{ item.years }}</h4>
    <h5 v-if="item.job" class="job">{{ item.job }}</h5>
  </div>
  <p>{{ item.desc }}</p>
</template>

<style lang="scss">
@import "../assets/style/basics/vars";
@import "../assets/style/basics/helpers";

.about-page .education,
.about-page .experience {
  ul {
    list-style: none;
    
    li {
      padding-block: 10px;

      .cv-preview {
        grid-template-columns: 3fr 1fr;
        row-gap: 8px;

        .years {
          justify-self: end;
        }
      }
    }
  }
}
</style>