<template>
  <div class="contact">
    <div class="contact__info">
      <h1 class="contact__title">Contact us</h1>
      <p class="contact__location">Kyiv, Ukraine</p>
      <p class="contact__email">mail@isa.co.ua</p>
      <ul class="contact__social-list">
        <li
          class="contact__social-item"
          v-for="(link, index) in socialLinks"
          :key="index"
        >
          <a
            :href="link.href"
            target="_blank"
            rel="noopener"
            class="contact__social-link"
          >
            <img
              :src="link.icon"
              :alt="link.name"
              class="contact__social-icon"
            />
          </a>
        </li>
      </ul>
    </div>
    <div>
      <img
        class="contact__image"
        src="../assets/images/contactStarAnimals.svg"
        alt="Star with animals illustration"
      />
    </div>
  </div>
</template>

<script>
import iconFacebook from "@/assets/images/iconFacebook.svg";
import iconInstagram from "@/assets/images/iconInstagram.svg";
import iconYoutube from "@/assets/images/iconYoutube.svg";
import iconPatreon from "@/assets/images/iconPatreon.svg";
import iconTelegram from "@/assets/images/iconTelegram.svg";

import { nextTick } from "vue";
import { gsap } from "@/plugins/gsap";

export default {
  name: "ContactSection",
  data() {
    return {
      socialLinks: [
        {
          name: "youtube",
          href: "https://www.youtube.com/channel/UCflad3HMzVzumevfDEqJFFQ/featured",
          icon: iconYoutube,
        },
        {
          name: "instagram",
          href: "https://www.instagram.com/isa.official.ua/",
          icon: iconInstagram,
        },
        {
          name: "facebook",
          href: "https://www.facebook.com/isa.co.ua",
          icon: iconFacebook,
        },
        {
          name: "patreon",
          href: "https://www.patreon.com/isa_co_ua",
          icon: iconPatreon,
        },
        {
          name: "telegram",
          href: "https://t.me/isa_co_ua",
          icon: iconTelegram,
        },
      ],
    };
  },
  mounted() {
    nextTick(() => {
      gsap.fromTo(
        ".contact__image",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".contact__image",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  },
};
</script>

<style scoped lang="scss">
.contact {
  display: flex;
  flex-direction: row;
  background-color: #31be32;
  padding: 9rem;
  text-align: left;
  color: #000000;

  &__info {
    flex: 1;
  }

  &__title {
    font-size: 3.2rem;
  }

  &__location,
  &__email {
    font-size: 2.2rem;
  }

  &__social-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
    padding: 0;
  }

  &__social-link {
    display: inline-block;

    &:hover .contact__social-icon {
      transform: scale(0.8);
    }
  }

  &__social-icon {
    width: 48px;
    height: 48px;
    transition: transform 0.3s ease;
  }

  &__image {
    width: 540px;
    height: auto;
  }
}
</style>
