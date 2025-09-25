<template>
  <div class="about">
    <div class="about__intro">
      <h1 class="about__title">We are</h1>
      <p class="about__description">
        team of like-minded people, socially active companies, media
        personalities, volunteers who help low-income shelters and foster carers
        to support homeless animals.
      </p>
    </div>
    <div class="about__goal">
      <h1 class="about__title">Our primary goal</h1>
      <p class="about__description">
        is to provide animals with the most necessary things - food, medicine,
        and urgent needs for the livelihood of shelters. We believe in our power
        and the power of conscious citizens who care about the environment and
        their health, who understand the importance of helping each other,
        especially our little friends. Growth begins with your care for your
        loved ones. Animals are one of the closest creatures to humans who
        remain with us throughout our lives. We all know the healing power of
        warmth, grace, and big loving eyes.
      </p>
      <span class="about__quote">
        "Animals need to have friends. Just like humans." - James Herriot, All
        Creatures Great and Small</span
      >
      <p class="about__description">
        Who else if not we should support our younger brothers, especially in
        difficult times? Let's be friends!
      </p>
    </div>
    <iframe
      class="about__video"
      src="https://www.youtube.com/embed/5Wk1rp99B7o"
      title="YouTube video player"
    ></iframe>
  </div>
</template>

<script>
import { gsap, ScrollTrigger } from "@/plugins/gsap";

export default {
  name: "AboutSection",
  mounted() {
    const video = this.$el.querySelector(".about__video");

    const animateVideo = () => {
      gsap.fromTo(
        video,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
      );
    };

    ScrollTrigger.create({
      trigger: video,
      start: "top 80%",
      onEnter: animateVideo,
      onEnterBack: animateVideo,
    });
  },
};
</script>

<style scoped lang="scss">
.about {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 9rem;
  text-align: left;
  color: #000000;
  background-color: white;

  &__title {
    font-size: 3.2rem;
  }

  &__description {
    font-size: 2.2rem;
    line-height: 1.5;
    margin-top: 1rem;
  }

  &__quote {
    display: block;
    font-style: italic;
    font-size: 1.25rem;
    margin: 2rem 2rem 2rem 5rem;
    padding-left: 1rem;
    border-left: 4px solid #ff97d0;
    font-size: 2.2rem;
    line-height: 1.5;
    width: 50rem;
  }

  &__video {
    width: 100%;
    height: 600px;
    margin-top: 2rem;
  }
}
</style>
