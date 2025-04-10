<template>
  <img src="@/assets/images/chevron.svg" class="event__button--back" @click="goBack">
  <div class="event__preview" :style="{ 'backgroundImage': `url(${event.image})` }">
    <div class="event__content">
      <h1 class="event__title">{{ event.title }}</h1>

      <div class="event__secondary">
        <div class="event__secondary--block">
          <img class="event__secondary--img" src="@/assets/images/geo.svg" alt="">
          <span class="event__secondary--info">{{ event.location }}</span>
        </div>
      </div>

      <div class="event__secondary">
        <div class="event__secondary--block">
          <img class="event__secondary--img" src="@/assets/images/clock.svg" alt="">
          <span class="event__secondary--info">{{ dateFormatter(event.date, 'time') }}</span>
        </div>
        <div class="event__secondary--block">
          <img class="event__secondary--img" src="@/assets/images/calendar.svg" alt="">
          <span class="event__secondary--info">{{ dateFormatter(event.date, 'date') }}</span>
        </div>
        <div class="event__secondary--block">
          <img class="event__secondary--img" src="@/assets/images/weather-sun.svg" alt="">
          <span class="event__secondary--info">{{ event.weather }}</span>
        </div>
      </div>
    </div>
  </div>

  <div class="event__bio">
    <h2 class="event__title">Participants</h2>

    <div class="event__participants" :style="participantsStyle">

      <img src="@/assets/images/chevron.svg" class="event__button--expand" :class="{ rotated: participantsExpanded }"
        @click="expandParticipants">

      <div v-if="!participantsExpanded" v-for="(participant, index) in visibleParticipants" :key="participant.id"
        class="event__participants--block">
        <img class="event__participants--image" :src="participant.avatar" :alt="participant.nickname">
      </div>
      <span v-if="remainingParticipants > 0 && !participantsExpanded" class="event__participants--more">
        + {{ remainingParticipants }} more
      </span>

      <div v-if="participantsExpanded" v-for="(participant, index) in event.participants" :key="participant.id"
        class="event__participants--block">
        <img class="event__participants--image" :src="participant.avatar" :alt="participant.nickname">
        <span class="event__participants--nickname">{{ participant.nickname }}</span>
      </div>
    </div>


    <h2 class="event__title">Description</h2>
    <span class="event__description">{{ event.description }}</span>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from 'vue-router';
import { useEventStore } from '@/store/eventStore';

const route = useRoute();
const eventStore = useEventStore();

const eventId = route.params.id;
let participantsExpanded = ref(false);

const goBack = () => {
  window.history.back();
};

const expandParticipants = () => {
  participantsExpanded.value = !participantsExpanded.value;
}

const dateFormatter = (isoString, type) => {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const date = new Date(isoString);
  const day = date.getUTCDate();
  const month = date.getUTCMonth();
  const hours = date.getUTCHours().toString().padStart(2, '0');
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');
  if (type === 'time') {
    return `${hours}:${minutes}`;
  } else if (type === 'date') {
    return `${day} ${months[month]}`;
  }
};

const event = computed(() => {
  return eventStore.friendsEvents.find(e => e.id === Number(eventId)) ||
    eventStore.myEvents.find(e => e.id === Number(eventId));
});

const visibleParticipants = computed(() => {
  return event.value?.participants?.slice(0, 5) || [];
});

const remainingParticipants = computed(() => {
  return event.value?.participants?.length > 5 ? event.value.participants.length - 5 : 0;
});

const participantsStyle = computed(() => {
  return {
    flexDirection: participantsExpanded.value ? 'column' : 'row',
    alignItems: participantsExpanded.value ? 'flex-start' : 'flex-start',
    height: participantsExpanded.value ? `${event.value.participants.length * 40 - 15}px` : '50px', // Учитываем длину массива
  };
});
</script>

<style lang="scss" scoped>
.event {
  &__preview {
    position: relative;
    width: 100%;
    height: 70dvh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    transform-origin: bottom;
    animation: zoomOut .5s ease forwards;
  }

  &__content {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    backdrop-filter: brightness(.6);
  }

  &__secondary {
    display: flex;
    gap: 10px;

    &--block {
      display: flex;
      align-items: center;
      gap: 5px;
    }

    &--img {
      filter: invert(180);
      height: 15px;
    }

    &--info {
      text-transform: uppercase;
    }
  }

  &__title {
    margin-top: auto;
    text-transform: uppercase;
  }

  &__button {
    &--back {
      position: absolute;
      top: 20px;
      left: 20px;
      background-color: $color-opacitygrey;
      backdrop-filter: contrast(70%);
      border-radius: 50%;
      height: 30px;
      width: 30px;
      padding: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: .2s ease;
      transform: rotate(180deg);
      z-index: 1;

      &:active {
        backdrop-filter: contrast(50%);
      }
    }

    &--expand {
      position: absolute;
      align-self: flex-end;
      background-color: $color-opacitygrey;
      border-radius: 50%;
      height: 30px;
      width: 30px;
      padding: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: .2s ease;
      transform: rotate(90deg);
      z-index: 1;
      right: 10px;

      &.rotated {
        transform: rotate(270deg);
      }

      &:active {
        backdrop-filter: contrast(50%);
      }
    }
  }


  &__bio {
    display: flex;
    flex-direction: column;
    gap: 20px;

    width: 100%;
    height: 100%;
    padding: 20px;


  }

  &__participants {
    position: relative;
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 10px;
    background-color: $color-opacitygrey;
    border-radius: 27px;
    transition: .5s ease;
    overflow: hidden;

    &--block {
      height: 100%;
      display: flex;
      gap: 10px;
    }

    &--image {
      height: 30px;
      width: 30px;
      border-radius: 50%;
      object-fit: cover;
    }

    &--nickname {
      margin-top: 5px;;
    }
    &--more {
      margin-top: 5px;;
    }
  }

  &__description {}
}

@keyframes zoomOut {
  0% {
    transform: scale(1.05);
  }

  100% {
    transform: scale(1);
  }
}

// .participants-transition-enter-active,
// .participants-transition-leave-active {
//   transition: max-height 0.3s ease-in-out;
//   overflow: hidden;
// }

// .participants-transition-enter-from,
// .participants-transition-leave-to {
//   max-height: 0;
// }

// .participants-transition-enter-to,
// .participants-transition-leave-from {
//   max-height: 400px;
// }</style>