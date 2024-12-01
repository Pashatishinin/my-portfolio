
<script>
  import { onMount } from "svelte";
  import anime from "animejs";

  let gridDimensions = { width: 25, height: 20 };

  function updateGridDimensions() {
    if (window.innerWidth < 480) {
      gridDimensions = { width: 25, height: 27 };
    } else if (window.innerWidth < 640) {
      gridDimensions = { width: 32, height: 27 };
    } else if (window.innerWidth < 768) {
      gridDimensions = { width: 32, height: 20 };
    } else if (window.innerWidth < 1024) {
      gridDimensions = { width: 44, height: 20 };
    } else if (window.innerWidth < 1280) {
      gridDimensions = { width: 53, height: 20 };
    } else {
      gridDimensions = { width: 70, height: 30 };
    }

    //console.log(`Width = ${gridDimensions.width}, Height = ${gridDimensions.height}`)
  }

  onMount(() => {
    // Обновляем размеры сетки при загрузке
    updateGridDimensions();

    // Добавляем обработчик изменения размера
    window.addEventListener("resize", updateGridDimensions);
    return () => window.removeEventListener("resize", updateGridDimensions);
  });

  function handleDotClick(event) {
    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 0.5, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [gridDimensions.width, gridDimensions.height],
        from: event.target.dataset.index,
      }),
    });
  }
</script>

<style>
  .dot-point {
    width: 0.5rem;
    height: 0.5rem;
  }
</style>

<div
  class="grid w-fit"
  style={`grid-template-columns: repeat(${gridDimensions.width}, 1fr);`}
  on:click={handleDotClick}
>
  {#each Array(gridDimensions.width * gridDimensions.height) as _, index}
    <div
      class="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-slate-600"
      data-index={index}
    >
      <div
        class="dot-point h-1 w-1 sm:h-2 sm:w-2 rounded-full bg-gradient-to-b from-slate-700 to-slate-400 opacity-50 group-hover:from-indigo-600 group-hover:to-white"
        data-index={index}
      />
    </div>
  {/each}
</div>
