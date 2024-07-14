<script>
import CvListPreview from "@/cmps/CvListPreview.vue";

export default {
  data() {
    return {
      skills: [
        "Javascript",
        "Python",
        "Matlab",
        "React",
        "Vue",
        "HTML",
        "CSS",
        "Sass",
        "Add more",
      ],
      educations: [
        { title: "Coding Academy", years: "2024", desc: "description here" },
        {
          title: "Tel-Aviv University",
          years: "2020-2023",
          desc: "description here",
        },
        {
          title: "Amsterdam University College",
          years: "2019-2020",
          desc: "During my time at Amsterdam University College, I sought to shape my academic journey through a multidisciplinary liberal arts and sciences approach, aiming to make informed decisions for my future. The diverse and vibrant environment allowed me to engage with students from various countries and cultures, broadening my perspectives and fostering a rich learning experience. Engaging in diverse classes at AUC, I not only gained substantial knowledge but also discovered valuable insights about myself, exploring both my capabilities and optimal learning methods along the way.",
        },
      ],
      experiences: [
        {
          title: "Israel Defense Force",
          job: "Medic",
          years: "2016-2019",
          desc: `• Provided vital healthcare support during combat training excursions and on-call duties in the clinic of an elite special forces unit (Shaldag).
• Skilled in healthcare, healthcare management, logistics, problem-solving, and effective collaboration with diverse teams.
• Awarded a certificate of excellence for job performance.
• Managed the medical equipment and supplies logistics for the entire unit and special forces operations.
• Supervised preventive medicine measures to mitigate health risks and promote wellness.
• Served as the sole healthcare provider on the unit's training base.`,
        },
      ],
      languages: ["English", "Hebrew"],
    };
  },

  components: {
    CvListPreview,
  },
};
</script>

<template>
  <section class="about-page grid">
    <h1>CV</h1>

    <fieldset class="contact-info flex column">
      <legend>Contact information</legend>
      <h2>Jenny Tover</h2>
      <p><span>Phone: </span>050-hire-me</p>
      <p><span>Email: </span>jenny.lottner@gmail.com</p>
    </fieldset>

    <fieldset class="about me">
      <legend>About me</legend>
      <p>
        I finished my B.S in Biology and Psychology with a focus on Neuroscience
        from Tel-Aviv University. During my academic studies I took 2
        programming courses; one in Matlab, and one in Python. I quickly found
        that those were my favorite courses and that I thoroughly enjoy
        Programming. Once I graduated, I took a programming bootcamp with Coding
        Academy.
      </p>
    </fieldset>

    <fieldset class="skills">
      <legend>Skills</legend>
      <ul>
        <li v-for="(skill, idx) in skills" :key="{ idx }">{{ skill }}</li>
      </ul>
    </fieldset>

    <fieldset class="education">
      <legend>Education</legend>
      <ul>
        <li v-for="(education, idx) in educations" :key="{ idx }">
          <CvListPreview :item="education" />
        </li>
      </ul>
    </fieldset>

    <fieldset class="experience">
      <legend>Experience</legend>
      <ul>
        <li v-for="(experience, idx) in experiences" :key="{ idx }">
          <CvListPreview :item="experience" />
        </li>
      </ul>
    </fieldset>

    <fieldset class="language">
      <legend>Languages</legend>
      <ul>
        <li v-for="(language, idx) in languages" :key="{ idx }">
          {{ language }}
        </li>
      </ul>
    </fieldset>
  </section>
</template>

<style lang="scss">
@import "../assets/style/basics/vars";
@import "../assets/style/basics/helpers";

.about-page {
  grid-template-columns: 1fr 5fr;
  gap: 16px;
  margin-block: 16px;

  fieldset {
    ul {
      padding-inline: 10px;
    }
  }

  h1 {
    grid-area: 1 / 1 / 2 / 3;
    justify-self: center;
  }

  .contact-info {
    grid-area: 2 / 1;
    gap: 10px;
  }

  .about-me {
    grid-area: 2 / 2;
  }

  .skills {
    grid-area: 3 / 1;
  }

  .education {
    grid-area: 3 / 2;
  }

  .language {
    grid-area: 4 / 1;
  }

  .experience {
    grid-area: 4 / 2;
  }
}
</style>