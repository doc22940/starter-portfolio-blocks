<template>
  <div class="px-4 pt-6 pb-14">
    <nav class="fixed top-0 left-0 hidden w-full py-4 sm:block">
      <div
        class="container flex items-center mx-auto text-gray-800 dark:text-gray-200"
      >
        <nuxt-link to="/" class="flex items-center space-x-2 hover:underline">
          <icon name="arrow-left" class="w-6 h-6" />
          <span>Go Back Home</span>
        </nuxt-link>

        <div class="flex items-center ml-auto space-x-2">
          <a :href="getLink.webstore" target="_blank" rel="noreferrer">
            <h1 class="font-semibold">Unblock Please</h1>
          </a>
          <icon name="cursor-click" class="w-6 h-6" />
        </div>
      </div>
    </nav>

    <section
      class="flex items-center justify-center w-full mt-12 space-x-2 sm:mt-24 dark:text-gray-200"
    >
      <nuxt-link class="sm:hidden" to="/">
        <icon name="arrow-left" class="w-6 h-6" />
      </nuxt-link>

      <icon name="lock-open" class="hidden w-6 h-6 sm:block" />

      <a :href="getLink.webstore" rel="noreferrer" target="_blank"
        ><h2 class="text-2xl font-bold">Unblock Please</h2></a
      >
    </section>

    <section
      class="mx-auto mt-12 text-justify sm:mt-24 space-y-14 sm:space-y-28 sm:w-9/12"
    >
      <!-- What is Unblock Please? -->
      <div class="items-center justify-between sm:flex">
        <div class="sm:w-6/12">
          <h2 class="project-title">
            What is
            <a
              :href="getLink.webstore"
              class="text-red-600"
              rel="noreferrer"
              target="_blank"
              >Unblock Please?</a
            >
          </h2>

          <p class="dark:text-gray-300">
            It is a Chrome extension that allows you to unblock the Imgur and
            Pastebin restrictions. Some countries or ISPs block access to these
            services but these both services are the leaders of their concepts.
            You are most likely to face with an Imgur or Pastebin link but can't
            open it because of your country or ISP blocks it. With Unblock
            Please, you can <i>legally</i> access these two services easily!
          </p>
        </div>

        <img
          src="/assets/images/projects/unblock-please/featuring.png"
          class="hidden sm:block"
          alt="featuring image"
        />
      </div>

      <!-- What's cool about it? -->
      <div class="items-center justify-between sm:flex">
        <img
          src="/assets/images/projects/unblock-please/featuring2.png"
          class="hidden sm:block"
          alt="featuring image"
        />

        <div class="ml-auto text-right sm:w-6/12">
          <h2 class="project-title">
            What's cool about <span class="text-red-600">it?</span>
          </h2>

          <p class="dark:text-gray-300">
            Just like everything I have created these days, it is written in
            Vue, and using Vue, I was able to build cool stuff such as local
            statistics of how many times it unblocked those two services and
            when was the last time. You can also disable and enable one (or
            both) of the services if it is unblocked already or you just don't
            want extension to deal with it.
          </p>
        </div>
      </div>

      <div class="items-center justify-between sm:flex">
        <div class="sm:w-6/12">
          <h2 class="project-title">
            Is it <span class="text-red-600">free?</span>
          </h2>

          <p class="dark:text-gray-300">
            Yes, it is. There is no additional prices or any packages comes with
            it. It is completely
            <a :href="getLink.github"><strong>open-source</strong></a> and free
            on the Chrome Webstore! You can add it with just a single click and
            surf on Imgur and/or Pastebin!
          </p>
        </div>

        <img
          src="/assets/images/projects/unblock-please/featuring3.png"
          class="hidden sm:block"
          alt="featuring image"
        />
      </div>

      <!-- Are you ready? -->
      <div class="mx-auto text-center sm:w-5/12">
        <h2 class="project-title">Are you ready?</h2>

        <div class="text-gray-800 dark:text-gray-300">
          <a
            :href="getLink.webstore"
            class="font-medium text-red-600"
            rel="noreferrer"
            target="_blank"
            >Click here</a
          >
          to add it to your browser and start using Unblock Please!
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head: {
    title: "Unblock Please",
  },
  computed: {
    getLink() {
      return this.$config.links.unblockPlease
    },
  },
}
</script>

<style lang="scss" scoped>
a {
  @apply hover:underline;
}

.project-title {
  @apply text-xl font-semibold text-gray-800 dark:text-gray-200;
}
</style>
