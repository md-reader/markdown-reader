<script lang="ts">
  export let svg: { attributes: Record<string, string>; content: string }
  let className: string
  export { className as class }
</script>

<svg {...svg.attributes} class={className}>
  {@html svg.content}
</svg>

<style>
  svg {
    display: inline-block;
    fill: currentColor;
  }
</style>
