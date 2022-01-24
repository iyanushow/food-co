import { onBeforeMount, onBeforeUnmount, reactive, ref, watch } from 'vue';

const useCurrentSection = () => {
  const sections = document.querySelectorAll('section');

  console.log(sections);

  const handleScroll = () => {
    const scrollOffset = window.scrollY;

    sections.map(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 50;

      sectionId = section.getAttribute('id');

      // if(scrollOffset > sectionTop && scrollOffset)
    });

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

export default useCurrentSection;
