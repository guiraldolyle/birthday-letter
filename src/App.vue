<script setup>
import { ref } from 'vue'

const opened = ref(false)
const showNote = ref(false)

function openLetter() {
  opened.value = true
  window.setTimeout(() => {
    showNote.value = true
  }, 650)
}
</script>

<template>
  <v-app>
    <v-main>
      <main class="night-scene">
        <div class="sky-glow" aria-hidden="true"></div>
        <div class="moon" aria-hidden="true"><span></span></div>
        <div class="stars stars-one" aria-hidden="true"></div>
        <div class="stars stars-two" aria-hidden="true"></div>
        <div class="rose-haze rose-left" aria-hidden="true"></div>
        <div class="rose-haze rose-right" aria-hidden="true"></div>

        <div class="scene-heading">
          <span class="eyebrow">ISANG MUNTING PAG-AALAY</span>
          <div class="heading-rule"><i></i></div>
          <p>Sa ilalim ng buwan, para sa iyo.</p>
        </div>

        <section class="letter-stage" aria-live="polite">
          <Transition name="envelope" mode="out-in">
            <div v-if="!opened" key="closed" class="intro-card">
              <div class="wax-seal">♡</div>
              <span class="intro-kicker">ISANG LIHAM PARA SA IYO</span>
              <h1>Maligayang<br /><em>Kaarawan</em></h1>
              <p class="intro-copy">May mga salitang mas nararapat isulat kaysa sabihin lamang.</p>
              <v-btn class="open-button" rounded="pill" size="large" @click="openLetter">
                Buksan ang liham <span class="button-arrow">↗</span>
              </v-btn>
              <span class="intro-foot">Mula sa pusong may alay</span>
            </div>

            <article v-else key="open" class="letter-card">
              <div class="letter-topline">
                <span>PARA SA IYO</span>
                <span class="tiny-heart">✦</span>
                <span>SA ARAW NA ITO</span>
              </div>
              <div class="letter-ornament">❧</div>
              <Transition name="poem" appear>
                <div v-if="showNote" class="poem-content">
                  <h2>Mabuhay!</h2>

                  <p>
                    Sa babaeng walang kaarte-arte,<br />
                    Ewan kung mayroon bang arte o wala,<br />
                    Pero isa lang ang masasabi ko, sinta,<br />
                    Walang katumbas ang pagmamahal<br />
                    Na binigay at inalay mong marangal<br />
                    Sa pusong hirap magtiwala.
                  </p>

                  <p>
                    At sa iyong kaarawan,<br />
                    Kahit konti, ngunit may kahulugan,<br />
                    Itong tulang aking isinulat<br />
                    Ay alay ko sa iyong kaarawan.
                  </p>

                  <p class="birthday-line">Maligayang bati sa iyong kaarawan,</p>

                  <p>
                    Nawa'y umulan ng pag-ibig sa iyong daigdig,<br />
                    At biyaya'y dumaloy nang walang kaparis.
                  </p>

                  <p>
                    Nawa'y pagpalain ka ng Bathala at mga tala,<br />
                    Sa kalusugan, tagumpay, at bawat mithiin sa tuwina.
                  </p>

                  <p>
                    At higit sa lahat, sinta kong minamahal,<br />
                    Nawa'y madama mo ang pag-ibig kong wagas at marangal,<br />
                    Pag-ibig na sa iyo'y aking laan,<br />
                    Ngayon, bukas, at sa habang panahon.
                  </p>

                  <div class="closing">
                    <span class="closing-flourish">❦</span>
                    <span>Sa habang panahon</span>
                  </div>
                </div>
              </Transition>
            </article>
          </Transition>
        </section>

        <div class="river" aria-hidden="true">
          <div class="river-reflection"></div>
          <div class="river-wave wave-a"></div>
          <div class="river-wave wave-b"></div>
          <div class="river-wave wave-c"></div>
        </div>

        <footer class="scene-footer">
          <span>✦</span> ISANG GABI, ISANG LIHAM, ISANG PUSO <span>✦</span>
        </footer>
      </main>
    </v-main>
  </v-app>
</template>
