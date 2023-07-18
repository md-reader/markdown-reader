<script lang="ts">
  export let localize: (field: string) => string
</script>

<div class="warning">
  <p>{localize('desc.accessWarning')}</p>
</div>

<style>
  .warning {
    width: 280px;
    font-size: 12px;
    padding: 8px 10px;
    border: 1px solid currentColor;
    border-radius: 4px;
    text-align: left;
    background: #fff1f0;
    color: #ff493c;
  }
  .warning p {
    margin: 0;
  }
</style>
