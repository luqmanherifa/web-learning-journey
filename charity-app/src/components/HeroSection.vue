<template>
  <div class="hero">
    <div class="hero__header">
      <img :src="logoSrc" alt="Hero Logo" class="hero__logo" />
      <h1 class="hero__title">Innovative Solutions for Animals</h1>
    </div>
    <div class="hero__content">
      <p class="hero__subtitle">charity organization</p>
      <ul class="hero__socials">
        <li
          v-for="(link, index) in socialLinks"
          :key="index"
          class="hero__social-item"
        >
          <a
            :href="link.href"
            target="_blank"
            rel="noopener"
            class="hero__social-link"
          >
            <img :src="link.icon" :alt="link.name" class="hero__social-icon" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import heroDog from "../assets/images/heroDog.svg";
import heroCat from "../assets/images/heroCat.svg";
import iconFacebook from "@/assets/images/iconFacebook.svg";
import iconInstagram from "@/assets/images/iconInstagram.svg";
import iconYoutube from "@/assets/images/iconYoutube.svg";
import iconPatreon from "@/assets/images/iconPatreon.svg";
import iconTelegram from "@/assets/images/iconTelegram.svg";

import { gsap } from "@/plugins/gsap";

export default {
  name: "HeroSection",
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
      logoSrc: heroDog,
      showCat: false,
    };
  },
  mounted() {
    const title = this.$el.querySelector(".hero__title");
    gsap.fromTo(
      title,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );

    const logo = this.$el.querySelector(".hero__logo");
    gsap.from(logo, {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    });

    const content = this.$el.querySelector(".hero__content");
    gsap.from(content, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    setInterval(() => {
      this.showCat = !this.showCat;
      gsap.fromTo(
        logo,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          onStart: () => {
            this.logoSrc = this.showCat ? heroCat : heroDog;
          },
        }
      );
    }, 2000);
  },
};
</script>

<style scoped lang="scss">
.hero {
  background-color: #fcf944;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 600px;
  color: #000000;

  &__header {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3rem;
  }

  &__logo {
    width: 200px;
    height: 200px;
  }

  &__title {
    font-size: 3.5rem;
    width: 300px;
    line-height: 1;
    text-align: left;
  }

  &__subtitle {
    font-size: 2rem;
    margin-top: 2rem;
  }

  &__socials {
    list-style: none;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-top: 1rem;
  }

  &__social-link {
    font-size: 1.5rem;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    &:hover .hero__social-icon {
      transform: scale(0.8);
    }
  }

  &__social-icon {
    width: 48px;
    height: 48px;
    transition: transform 0.3s ease;
  }
}
</style>
