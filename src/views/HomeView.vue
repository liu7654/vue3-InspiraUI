<script setup>
import { ref, computed } from "vue"
import { Icon } from "@iconify/vue";
import {
  PATTERN_BACKGROUND_DIRECTION,
  PATTERN_BACKGROUND_MASK,
  PATTERN_BACKGROUND_SPEED,
  PATTERN_BACKGROUND_VARIANT,
} from "../components/ui/pattern-background";
import PhotoGallery from "../components/ui/photo-gallery/PhotoGallery.vue"
import PatternBackground from "../components/ui/pattern-background/PatternBackground.vue"
import GradientButton from "../components/ui/gradient-button/GradientButton.vue"
import { useColorMode } from "@vueuse/core";
const items = [
  {
    src: "https://images.pexels.com/photos/16834200/pexels-photo-16834200/free-photo-of-young-brunette-in-a-white-dress-sitting-on-a-bench-and-holding-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    src: "https://images.pexels.com/photos/16834202/pexels-photo-16834202/free-photo-of-young-woman-in-a-white-dress-posing-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    src: "https://images.pexels.com/photos/16834194/pexels-photo-16834194/free-photo-of-woman-in-white-dress-posing-with-red-flowers-on-lap.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    src: "https://images.pexels.com/photos/17362900/pexels-photo-17362900/free-photo-of-pretty-young-model-in-chinese-retro-dress.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    src: "https://images.pexels.com/photos/19447919/pexels-photo-19447919/free-photo-of-model-in-a-pink-ao-dai-dress-with-a-bouquet-of-tulips-by-the-river.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    src: "https://images.pexels.com/photos/20332975/pexels-photo-20332975/free-photo-of-young-woman-posing-in-a-silk-slip-dress.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    src: "https://images.pexels.com/photos/19732643/pexels-photo-19732643/free-photo-of-woman-in-white-dress-sitting-and-reading-book.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    src: "https://images.pexels.com/photos/17347482/pexels-photo-17347482/free-photo-of-woman-in-dress-posing-with-bag.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
];

const isDark = computed(() => useColorMode().value == "dark");
const bgColor = computed(() => (isDark.value ? "#000" : "#fff"));
</script>
<style></style>

<template>
  <!-- <PatternBackground :animate="true" :direction="'top-right'" :variant="'dot'"
    class="flex h-[36rem] w-full items-center justify-center" :speed="25000"> -->
  <PatternBackground :animate="true" :direction="PATTERN_BACKGROUND_DIRECTION.Bottom"
    :variant="PATTERN_BACKGROUND_VARIANT.BigDot" class="flex h-[100%] w-full items-center justify-center"
    :speed="PATTERN_BACKGROUND_SPEED.Slow" :mask="PATTERN_BACKGROUND_MASK.EllipseTop">
    <!-- <p
      class="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-5xl">
      <PhotoGallery :items="items" />
    </p> -->

    <!-- <div class="text-blance flex justify-center p-10">
      <h1 class="text-balance text-center text-4xl font-bold">
        You are a
        <TextHighlight class="bg-gradient-to-r from-indigo-300 to-purple-300">
          f****ing great developer !
        </TextHighlight>
      </h1>
    </div> -->
    <!-- <div class="z-10 flex h-56 w-full flex-col items-center justify-center">
      <GradientButton :bg-color="bgColor">Zooooooooooom 🚀</GradientButton>
    </div> -->
    <!-- <section class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20" />
      <div
        class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div class="mx-auto max-w-2xl lg:max-w-4xl">
        <img class="mx-auto h-12" src="https://tailwindcss.com/plus-assets/img/logos/workcation-logo-indigo-600.svg"
          alt="" />
        <figure class="mt-10">
          <blockquote class="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
            <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
              molestiae. Numquam corrupti in laborum sed rerum et corporis.”</p>
          </blockquote>
          <figcaption class="mt-10">
            <img class="mx-auto size-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="" />
            <div class="mt-4 flex items-center justify-center space-x-3 text-base">
              <div class="font-semibold text-gray-900">Judith Black</div>
              <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900">
                <circle cx="1" cy="1" r="1" />
              </svg>
              <div class="text-gray-600">CEO of Workcation</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section> -->
  </PatternBackground>

</template>
