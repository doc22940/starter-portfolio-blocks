<template>
  <div class="px-4 space-y-2 md:px-0">
    <!-- Custom Status Presence will read the data from here -->
    <div id="object" class="hidden">
      {{ getPresenceData }}
    </div>

    <div class="space-y-6 md:flex md:space-x-6 md:space-y-0">
      <section class="md:w-6/12">
        <CardDiscord
          :small-image-text="presence.smallImageText"
          :large-image="presence.largeImageKey"
          :small-image="presence.smallImageKey"
          :timestamp="presence.timestamp"
          :details="presence.details"
          :state="presence.state"
          class="shadow-lg"
        />

        <div class="mt-4 space-y-2">
          <div class="items-center w-full md:flex md:space-x-2">
            <h3
              class="w-full font-medium text-gray-700 dark:text-gray-100 md:w-1/4"
            >
              Details (upper text)
            </h3>
            <input
              v-model="presence.details"
              class="w-full md:w-3/4"
              type="text"
            />
          </div>

          <div class="items-center w-full md:flex md:space-x-2">
            <h3
              class="w-full font-medium text-gray-700 dark:text-gray-100 md:w-1/4"
            >
              State (lower text)
            </h3>
            <input
              v-model="presence.state"
              class="w-full md:w-3/4"
              type="text"
            />
          </div>

          <div class="items-center w-full md:flex md:space-x-2">
            <h3
              class="w-full font-medium text-gray-700 dark:text-gray-100 md:w-1/4"
            >
              Large Image
            </h3>
            <select
              v-model="presence.largeImageKey"
              class="w-full bg-white dark:bg-gray-700 md:w-3/4"
            >
              <option selected>PreMiD</option>
              <option
                v-for="(image, index) of getImageNames.large"
                :key="`large-image-${index}`"
              >
                {{ image }}
              </option>
            </select>
          </div>

          <div class="items-center w-full md:flex md:space-x-2">
            <h3
              class="w-full font-medium text-gray-700 dark:text-gray-100 md:w-1/4"
            >
              Small Image
            </h3>
            <select
              v-model="presence.smallImageKey"
              class="w-full bg-white dark:bg-gray-700 md:w-3/4"
            >
              <option selected>None</option>
              <option
                v-for="(image, index) of getImageNames.small"
                :key="`small-image-${index}`"
              >
                {{ image }}
              </option>
            </select>
          </div>

          <div
            v-if="presence.smallImageKey !== 'None'"
            class="items-center w-full md:flex md:space-x-2"
          >
            <h3
              class="w-full font-medium text-gray-700 dark:text-gray-100 md:w-1/4"
            >
              Small Image Text
            </h3>
            <input
              v-model="presence.smallImageText"
              class="w-full md:w-3/4"
              type="text"
            />
          </div>

          <div class="items-center w-full md:flex md:space-x-2">
            <h3
              class="w-full font-medium text-gray-700 dark:text-gray-100 md:w-1/4"
            >
              Timestamps
            </h3>

            <div class="grid w-full grid-cols-1 gap-2 md:w-3/4">
              <div
                :class="{
                  'timestamp dark:text-gray-200': true,
                  'active text-white dark:text-gray-100':
                    presence.timestamp.start.enabled === true,
                }"
                @click="toggleTimestamp('elapsed')"
              >
                Show Time Elapsed
              </div>

              <div
                :class="{
                  'timestamp flex items-center space-x-2 justify-center cursor-default': true,
                  active: presence.timestamp.end.enabled === true,
                }"
              >
                <span
                  :class="{
                    'dark:text-gray-200': true,
                    'text-white dark:text-gray-100':
                      presence.timestamp.end.enabled === true,
                  }"
                  >Time To:
                </span>
                <input
                  v-model="presence.timestamp.end.value"
                  type="time"
                  @input="endTimestampChange"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="space-y-4 text-justify md:w-6/12">
        <div class="space-y-2">
          <div
            v-if="presence.installed === false"
            class="hidden mb-2 bg-red-500 sm:block information dark:bg-gray-700"
          >
            You need to install the Custom Status presence from the PreMiD Store
            to be able to use this page.
            <a
              href="https://premid.app/store/presences/Custom%20Status"
              target="_blank"
              rel="noreferrer"
              class="text-blue-200"
              >Click here</a
            >
            to visit the store.
          </div>

          <div class="bg-green-500 information dark:bg-gray-700">
            Welcome to the new look of PreMiD pages including Custom Status. I
            have completely redesigned my website, please take a look at the
            rest too!
          </div>

          <div class="block bg-red-500 sm:hidden information dark:bg-gray-700">
            Are you on mobile? If you are you should know that PreMiD doesn't
            work on mobile, so you can't use this page in any way.
          </div>
        </div>

        <div>
          <h2
            class="block text-lg font-semibold text-gray-800 dark:text-gray-100"
          >
            How does it work?
          </h2>

          <p class="text-gray-700 dark:text-gray-200">
            When you add our Presence from Presence Store from
            <a
              href="https://premid.app/store/presences/Custom%20Status?utm_source=eggsy.xyz"
              title="PreMiD Store"
              rel="noreferrer"
              target="_blank"
              >this page</a
            >, you will be able to use this page. You just have to set your
            settings and PreMiD will show those settings on your profile just
            like in the preview here.
          </p>
        </div>

        <div>
          <h2
            class="block text-lg font-semibold text-gray-800 dark:text-gray-100"
          >
            It's not showing anything!?
          </h2>

          <p class="text-gray-700 dark:text-gray-200">
            If the system isn't working or it isn't displaying anything on your
            profile, it's most likely about you. Please check
            <a
              href="https://premid.app/store/presences/Custom%20Status?utm_source=eggsy.xyz"
              title="PreMiD Docs"
              rel="noreferrer"
              target="_blank"
              >Troubleshooting Documentation</a
            >
            and see if those steps will fix your issue. If nothing works out,
            you can always find me on PreMiD's Discord server and get support
            there!
          </p>
        </div>

        <div>
          <h2
            class="block text-lg font-semibold text-gray-800 dark:text-gray-100"
          >
            Can I donate?
          </h2>

          <p class="text-gray-700 dark:text-gray-200">
            If you want to support my work here, you can contact with me on
            <a
              href="https://discord.com/users/162969778699501569"
              title="Click to visit my profile"
              rel="noreferrer"
              target="_blank"
              >Discord</a
            >. My username is <strong>EGGSY#3388</strong> and you can find me on
            PreMiD's Discord server. Thank you for your contributions!
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import largeImages from "@/assets/files/premid/largeImages"
import smallImages from "@/assets/files/premid/smallImages"

export default {
  layout: "premid",
  data() {
    return {
      presence: {
        installed: true,
        largeImageKey: "PreMiD",
        smallImageKey: "None",
        smallImageText: "",
        details: "",
        state: "",
        timestamp: {
          start: {
            enabled: false,
            value: null,
          },
          end: {
            enabled: false,
            value: null,
          },
        },
      },
    }
  },
  head: {
    title: "PreMiD Custom Status",
    link: [
      {
        rel: "prefetch",
        href: "https://i.imgur.com/FowB3D5.png",
      },
    ],
  },
  computed: {
    /**
     * Formats image names, adds spaces and returns all in a single object.
     * @returns {{ large: string[], small: string[]}} An object with large and small image array.
     */
    getImageNames() {
      const formatName = (name) =>
        name?.match(/[A-Z][a-z]+/g)?.join(" ") || name

      return {
        large: Object.keys(largeImages).map(formatName)?.sort(),
        small: Object.keys(smallImages).map(formatName)?.sort(),
      }
    },
    /**
     * Checks for everything and appends data to Vue, then renders it in template.
     * @returns {Object|String} An empty object or stringified Discord readable object.
     */
    getPresenceData() {
      const data = this.presence
      const timestamps = data.timestamp
      const object = {}

      /* Large and small image */
      if (data.largeImageKey) object.largeImageKey = data.largeImageKey
      else object.largeImageKey = "premid"

      if (data.smallImageKey) object.smallImageKey = data.smallImageKey
      if (data.smallImageKey && data.smallImageText)
        object.smallImageText = data.smallImageText

      // Replace spaces and force lowercase
      object.largeImageKey = object.largeImageKey
        .replace(/\s/g, "")
        .toLowerCase()

      object.smallImageKey = object.smallImageKey
        .replace(/\s/g, "")
        .toLowerCase()

      // Details and state
      if (data.details) object.details = data.details
      if (data.state) object.state = data.state

      // Timestamps
      if (timestamps.start.enabled && timestamps.start.value) {
        object.startTimestamp = timestamps.start.value
      } else if (timestamps.end.enabled && timestamps.end.value) {
        object.endTimestamp = this.$moment(
          timestamps.end.value,
          "HH:mm"
        ).valueOf()
      }

      // Have to change at least one value because Discord doesn't re-render the data on timestamp changes
      object.smallImageText = data.smallImageText || "NULL"
      if (object.smallImageText === "NULL") delete object.smallImageText

      if (Object.keys(object).length < 1) return {}
      else return JSON.stringify(object)
    },
  },
  beforeDestroy() {
    this.observer.disconnect()
  },
  mounted() {
    this.setupMutationObserver()
  },
  methods: {
    /**
     * Turns on and off a timestamp value.
     * @param {elapsed|left} option
     */
    toggleTimestamp(option) {
      const start = this.presence.timestamp.start
      const end = this.presence.timestamp.end

      if (option === "elapsed") {
        if (start.enabled === false) {
          end.enabled = false

          start.value = new Date().getTime()
          start.enabled = true

          this.presence.smallImageText = this.presence.smallImageText || null
        } else {
          start.value = null
          start.enabled = false
        }
      } else if (option === "left" && end.enabled === true) {
        end.enabled = false
        end.value = null

        end.enabled = !end.enabled
      }
    },
    /**
     * Gets called when end timestamp value is changed.
     */
    endTimestampChange() {
      this.presence.timestamp.start.enabled = false
      this.presence.timestamp.start.value = null

      this.presence.timestamp.end.enabled = true
    },
    /**
     * Creates a mutation observer that looks for the changes in #__nuxt, which gets mutated by PreMiD Presence to detect if presence is added.
     */
    setupMutationObserver() {
      const target = document.getElementById("__nuxt")
      let currentState = target.classList?.contains("presence")

      // Return if it was already set, no need an observer
      if (currentState) return
      else this.presence.installed = false

      this.observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName !== "class") return

          const newClassState = mutation.target.classList.contains("presence")

          if (currentState !== newClassState) {
            currentState = newClassState
            this.presence.installed = newClassState || false

            if (this.presence.installed === true) this.observer?.disconnect()
          }
        })
      })

      this.observer.observe(target, { attributes: true })
    },
  },
}
</script>

<style lang="scss" scoped>
.information {
  @apply w-full p-4 rounded-md text-white;
}

input,
select {
  @apply rounded-md ring-2 focus:ring-4 focus:outline-none ring-gray-300 ring-opacity-25 px-4 py-2 dark:bg-gray-700 dark:hover:bg-opacity-75 dark:ring-gray-800 dark:text-gray-200;

  &[type="time"] {
    @apply px-2 py-px;
  }
}

.timestamp {
  @apply rounded-md p-2 text-center  select-none ring-2 ring-gray-200 ring-opacity-25 bg-white hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-opacity-75 dark:ring-transparent;

  &:not(.cursor-default) {
    @apply cursor-pointer;
  }

  &:not(.active) {
    @apply text-gray-700 dark:text-gray-200;
  }

  &.active {
    @apply bg-green-500 hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-800;
  }
}

a {
  @apply text-blue-500 hover:text-blue-600 hover:underline;
}
</style>
