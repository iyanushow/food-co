import { onBeforeMount, onBeforeUnmount, ref, watch } from 'vue';

const useScroll = benchmark => {
  const changeScroll = ref(false);

  const handleScroll = () => {
    const scrollOffset = window.scrollY;

    changeScroll.value = scrollOffset >= benchmark;
  };

  console.log(changeScroll.value);

  onBeforeMount(() => {
    window.addEventListener('scroll', handleScroll);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  return {
    changeScroll,
  };
};

export default useScroll;
