<script lang="ts">
  import storage from '@/core/storage'
  import Warning from './warning.svelte'
  import About from './about.svelte'
  import Icon from './icon.svelte'
  import Switch from '@smui/switch'
  import FormField from '@smui/form-field'
  import Select, { Option } from '@smui/select'
  import Tooltip, { Wrapper } from '@smui/tooltip'
  import SegmentedButton, { Segment } from '@smui/segmented-button'
  import MD_PLUGINS from '@/config/md-plugins'
  import PAGE_THEMES from '@/config/page-themes'
  import { getDefaultData } from '@/core/data'
  import type { Data } from '@/core/data'
  import pkg from '../../../package.json'
  import i18n from '@/config/i18n'
  import settingIcon from '@/images/setting.svg'
  import pluginsIcon from '@/images/plugins.svg'
  import aboutIcon from '@/images/about.svg'
  import warningIcon from '@/images/warning.svg'
  import lightIcon from '@/images/light.svg'
  import darkIcon from '@/images/dark.svg'
  import autoIcon from '@/images/auto.svg'

  let localize = i18n()
  let homepage = pkg.homepage
  let version = pkg.version
  let isAllowViewFile = true
  let tabs = [
    {
      title: 'General',
      icon: settingIcon,
    },
    {
      title: 'Plugins',
      icon: pluginsIcon,
    },
    {
      title: 'About',
      icon: aboutIcon,
    },
  ]
  let themeIconData = {
    light: lightIcon,
    dark: darkIcon,
    auto: autoIcon,
  }
  let currentTab = tabs[0].title
  let data = getDefaultData()

  // Get if file allowed access
  chrome.extension.isAllowedFileSchemeAccess(
    (isAllow: boolean) => (isAllowViewFile = !!isAllow),
  )

  storage.get().then((_data: Data) => {
    // need an assignment to update UI
    data = { ...data, ..._data }
  })

  $: if (data.language) {
    updateConfig('language', data.language)
    localize = i18n(data.language)
  }

  function updateConfig(key, value) {
    setTimeout(() => {
      chrome.runtime.sendMessage({ action: 'storage', data: { key, value } })
    }, 0)
  }
</script>

<main>
  <div class="setting-layout">
    <div class="setting-side">
      <ul>
        {#each tabs as tab, idx}
          <li
            class={tab.title === currentTab ? 'active' : ''}
            on:click={() => (currentTab = tab.title)}
            on:keypress={() => (currentTab = tab.title)}
          >
            <button
              tabindex={idx + 1}
              aria-label={localize('label', tab.title)}
            >
              <Icon class="side-icon" svg={tab.icon} />
            </button>
          </li>
        {/each}
      </ul>
    </div>

    <div class="setting-content">
      {#if currentTab === 'General'}
        <h2>
          {localize('label', currentTab)}
          {#if !isAllowViewFile}
            <Wrapper rich class="warning-tooltip">
              <Icon class="warning-icon" svg={warningIcon} />
              <Tooltip xPos="start" yPos="below">
                <Warning {localize} />
              </Tooltip>
            </Wrapper>
          {/if}
        </h2>

        <!-- enable -->
        <div class="form general-content">
          <div class="form-item inline">
            <div class="label-item">
              <div class="form-label">{localize('label.enable')}</div>
              <div class="form-label-desc">
                {localize('desc.enable')}
              </div>
            </div>
            <FormField align="end">
              <Switch
                bind:checked={data.enable}
                color="primary"
                on:change={() => updateConfig('enable', data.enable)}
              />
            </FormField>
          </div>

          <!-- centered -->
          <div class="form-item inline">
            <div class="label-item">
              <div class="form-label">{localize('label.centered')}</div>
              <div class="form-label-desc">
                {localize('desc.centered')}
              </div>
            </div>
            <FormField align="end">
              <Switch
                disabled={!data.enable}
                bind:checked={data.centered}
                color="primary"
                on:change={() => updateConfig('centered', data.centered)}
              />
            </FormField>
          </div>

          <!-- auto refresh -->
          <div class="form-item inline">
            <div class="label-item">
              <div class="form-label">{localize('label.autoRefresh')}</div>
              <div class="form-label-desc">
                {localize('desc.autoRefresh')}
              </div>
            </div>
            <FormField align="end">
              <Switch
                disabled={!data.enable}
                bind:checked={data.refresh}
                color="primary"
                on:change={() => updateConfig('refresh', data.refresh)}
              />
            </FormField>
          </div>

          <!-- theme -->
          <div class="form-item inline">
            <div class="label-item">{localize('label.theme')}</div>
            <SegmentedButton
              segments={PAGE_THEMES}
              let:segment
              singleSelect
              bind:selected={data.pageTheme}
            >
              <Segment
                {segment}
                title={localize('label', segment)}
                disabled={!data.enable}
                on:selected={() => updateConfig('pageTheme', segment)}
              >
                <Icon svg={themeIconData[segment]} class="theme-icon" />
              </Segment>
            </SegmentedButton>
          </div>

          <!-- language -->
          <div class="form-item">
            <div class="label-item">{localize('label.language')}:</div>
            <FormField style="padding-left: 10px">
              <Select bind:value={data.language}>
                {#each i18n.locales as locale}
                  <Option value={locale}>{localize(locale)}</Option>
                {/each}
              </Select>
            </FormField>
          </div>
        </div>
      {:else if currentTab === 'Plugins'}
        <h2>{localize('label', currentTab)}</h2>
        <div class="form plugin-content">
          <!-- <div class="form-item inline">
            <div class="label-item">
              <div class="form-label">{localize('Enable plugins')}</div>
            </div>
            <FormField align="end">
              <Switch color="primary" disabled={!data.enable} />
            </FormField>
          </div> -->
          {#each MD_PLUGINS as plugin}
            <div class="form-item inline">
              <div class="label-item">{localize('desc', plugin)}</div>
              <FormField align="end">
                <Switch
                  color="primary"
                  bind:group={data.mdPlugins}
                  value={plugin}
                  disabled={!data.enable}
                  on:change={() => updateConfig('mdPlugins', data.mdPlugins)}
                />
              </FormField>
            </div>
          {/each}
        </div>
      {:else if currentTab === 'About'}
        <About {homepage} {version} />
      {/if}
    </div>
  </div>
</main>

<style>
  main {
    overflow: auto;
    box-sizing: border-box;
    width: 500px;
    height: 350px;
    border: 1px solid #24315830;
    border-radius: 1px;
  }
  .setting-layout {
    display: flex;
    height: 100%;
  }
  .setting-side {
    padding: 10px;
    border-right: 1px solid #eeeeee;
    background: #f9fafb;
  }
  .setting-side ul {
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 0;
    color: #243158e3;
  }
  .setting-side li {
    margin-bottom: 6px;
  }
  .setting-side li button:active,
  .setting-side li.active button {
    transition:
      0.2s,
      background 0s;
    background: #e9efff;
    color: var(--mdc-theme-primary);
  }
  .setting-side button:focus-visible {
    background: #e9efffb3;
    outline: none;
  }

  .setting-side li button:hover {
    background: #e9efffdd;
  }
  .setting-side li button:active {
    transform: scale(0.95);
  }
  .setting-side li button :global(svg) {
    width: 26px;
    height: 26px;
  }
  .setting-side button {
    display: block;
    background: none;
    border: none;
    border-radius: 8px;
    padding: 7px;
    font-size: 0;
    cursor: pointer;
    color: currentColor;
  }
  :global(.warning-tooltip) {
    display: inline-block;
    position: absolute;
    margin: 0px 0 0 8px;
  }
  :global(.warning-tooltip) :global(.mdc-tooltip__surface) {
    padding: 0;
  }
  :global(.warning-tooltip) :global(.warning-icon) {
    width: 22px;
    height: 22px;
    color: #ff493c;
    filter: drop-shadow(0 0 2px #ff493c4d);
  }
  .setting-content {
    position: relative;
    flex: 1;
    height: 100%;
    overflow: auto;
    box-sizing: border-box;
    padding: 26px 34px 0;
  }
  .setting-content h2 {
    margin-top: 0;
    margin-bottom: 20px;
  }
  .form-item {
    margin-bottom: 6px;
  }
  .form-item.inline {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }
  .plugin-content .form-item.inline {
    margin-bottom: 24px;
  }
  .label-item {
    flex: 1;
    font-weight: bolder;
    font-size: 13px;
    color: #243158e3;
  }
  .form-label-desc {
    font-size: 12px;
    color: #aaa;
    margin-top: 2px;
  }
  :global(.theme-icon) {
    width: 20px;
    color: currentColor;
  }
  :global(.smui-select--standard) :global(.mdc-select__anchor) {
    height: 50px;
  }
</style>
