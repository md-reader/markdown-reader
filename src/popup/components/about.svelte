<script lang="ts">
  import Tooltip, { Wrapper } from '@smui/tooltip'
  import Icon from './icon.svelte'
  import logoIcon from '@/images/logo.svg'
  import chromeIcon from '@/images/chrome-web-store-logo.svg'
  import githubIcon from '@/images/github.svg'
  import emailIcon from '@/images/email.svg'
  export let homepage
  export let version
</script>

<div>
  <Icon class="logo-icon" svg={logoIcon} />
  <h1>Markdown Reader</h1>
  <div class="links">
    <Wrapper>
      <a target="_blank" href={homepage}>
        <Icon class="icon-link" svg={chromeIcon} />
      </a>
      <Tooltip xPos="start">Chrome Web Store</Tooltip>
    </Wrapper>
    <Wrapper>
      <a target="_blank" href="https://github.com/md-reader/markdown-reader">
        <Icon class="icon-link" svg={githubIcon} />
      </a>
      <Tooltip xPos="start">GitHub</Tooltip>
    </Wrapper>
    <Wrapper>
      <a href="mailto:mkdreader@gmail.com">
        <Icon class="icon-link" svg={emailIcon} />
      </a>
      <Tooltip xPos="start">Email</Tooltip>
    </Wrapper>
  </div>
  <div class="footer">
    <div class="version">v{version}</div>
    <div class="copyright">
      Copyright &copy;2018-{new Date().getFullYear()} Bener.
    </div>
  </div>
</div>

<style>
  :global(.logo-icon) {
    display: block !important;
    width: 20%;
    margin: 60px auto 10px;
  }
  h1 {
    text-align: center;
    line-height: 1;
    font-size: 24px;
    margin: 0;
    color: #35363a;
  }
  .links {
    text-align: center;
    font-size: 0;
    margin-top: 40px;
  }
  .links a {
    display: inline-block;
    transition: 0.2s;
    color: #35363a;
  }
  .links a:not(:last-child) {
    margin-right: 12px;
  }
  .links a:hover {
    opacity: 0.6;
  }
  .links :global(.icon-link) {
    display: inline-block;
    height: 22px;
  }
  .footer {
    font-size: 12px;
    opacity: 0.3;
  }
  .version {
    position: absolute;
    right: 10px;
    bottom: 8px;
  }
  .copyright {
    position: absolute;
    bottom: 8px;
    left: 10px;
  }
</style>
